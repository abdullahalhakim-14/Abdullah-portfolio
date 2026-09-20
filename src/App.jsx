import { useState } from "react";
import { AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import { Outlet } from "react-router";

import IntroScreen from "./Components/IntroScreen";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const reduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
    <AnimatePresence mode="wait">
      {showIntro && !reduceMotion ? (
        <IntroScreen key="intro" onFinish={() => setShowIntro(false)} />
      ) : (
        <div key="site">
          <Outlet />
        </div>
      )}
    </AnimatePresence>
    </MotionConfig>
  );
}

export default App;
