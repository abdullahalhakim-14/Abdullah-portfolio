const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value) => (typeof value === "string" ? value.trim() : "");

const respond = (response, status, body) => {
  response.setHeader("Cache-Control", "no-store");
  return response.status(status).json(body);
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return respond(response, 405, { message: "Method not allowed." });
  }

  let body;
  try {
    body = typeof request.body === "string" ? JSON.parse(request.body) : request.body || {};
  } catch {
    return respond(response, 400, { message: "Invalid request." });
  }
  const name = clean(body.name);
  const email = clean(body.email).toLowerCase();
  const message = clean(body.message);
  const website = clean(body.website);
  const startedAt = Number(body.startedAt);

  // Honeypot submissions receive a neutral success response.
  if (website) return respond(response, 200, { ok: true });

  if (
    !name ||
    name.length > 80 ||
    !EMAIL_PATTERN.test(email) ||
    email.length > 254 ||
    message.length < 20 ||
    message.length > 3000
  ) {
    return respond(response, 400, {
      message: "Please check your name, email, and project details.",
    });
  }

  if (Number.isFinite(startedAt) && Date.now() - startedAt < 1200) {
    return respond(response, 429, { message: "Please wait a moment and try again." });
  }

  const formId = clean(process.env.FORMSPREE_FORM_ID);

  if (!/^[a-zA-Z0-9]+$/.test(formId)) {
    console.error("Contact form is missing a valid FORMSPREE_FORM_ID.");
    return respond(response, 503, {
      message: "The contact form is temporarily unavailable. Please email me directly.",
    });
  }

  try {
    const formspreeResponse = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio inquiry from ${name}`,
        source: "Abdullah portfolio contact form",
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!formspreeResponse.ok) {
      const details = await formspreeResponse.text();
      console.error("Formspree rejected the contact submission:", formspreeResponse.status, details);
      if (formspreeResponse.status === 429) {
        return respond(response, 429, {
          message: "Too many messages were sent. Please wait a moment and try again.",
        });
      }
      return respond(response, 502, {
        message: "Your message could not be delivered. Please try again shortly.",
      });
    }

    return respond(response, 200, { ok: true });
  } catch (error) {
    console.error("Contact email failed:", error);
    return respond(response, 502, {
      message: "Your message could not be delivered. Please try again shortly.",
    });
  }
}
