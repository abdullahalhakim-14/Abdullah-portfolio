# Abdullah Alhakim Alhendi — Portfolio

Personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run build
npm run preview
```

## Contact form

The contact form posts to the Vercel Function at `api/contact.js`. The function validates the submission, filters simple bot traffic, and forwards it to Formspree. Visitors never leave the portfolio or open an email application.

Add these variables in **Vercel → Project → Settings → Environment Variables**:

```text
FORMSPREE_FORM_ID=your_form_id
```

Create the form in Formspree with `abdullah.alhakim04@gmail.com` as its notification email, copy the ID from an endpoint such as `https://formspree.io/f/FORM_ID`, apply the variable to Production and Preview, then redeploy the project.

## Deployment

Vercel detects Vite automatically. Use `npm run build` and the `dist` output directory. The included `vercel.json` keeps React Router deep links working while Vercel serves the `/api/contact` function normally.
