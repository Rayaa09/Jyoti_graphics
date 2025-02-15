import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const WelcomeAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000); // Hide after 3 seconds
  }, []);

  return (
    show && (
      <motion.div
      initial={{ x: "-100%", y: "-100%", rotate: -30, opacity: 0 }}
      animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
      exit={{ x: "-100%", y: "-100%", rotate: -30, opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 bg-yellow-400 text-black p-8 rounded-[50%] shadow-lg w-48 h-48 flex items-center justify-center"
      style={{ clipPath: "polygon(0% 20%, 30% 0%, 80% 10%, 100% 40%, 90% 80%, 40% 100%, 10% 90%, 0% 50%)" }}
    >
      <p className="text-2xl font-extrabold">WELCOME</p>
      </motion.div>
    )
  );
};

export default WelcomeAnimation;
