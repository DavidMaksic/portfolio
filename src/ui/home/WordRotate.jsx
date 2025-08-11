import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function WordRotate({ words, duration = 2000, className = '' }) {
   const [index, setIndex] = useState(0);
   const isMobile = useMediaQuery({ maxWidth: 450 });

   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((i) => (i + 1) % words.length);
      }, duration);
      return () => clearInterval(interval);
   }, [words.length, duration]);

   return (
      <motion.div
         layout
         className="inline-block overflow-hidden relative align-bottom"
      >
         <AnimatePresence mode="wait">
            <motion.span
               key={index}
               layout
               className={className}
               initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: isMobile ? -10 : -20 }}
               transition={{ duration: 0.2 }}
            >
               {words[index]}
            </motion.span>
         </AnimatePresence>
      </motion.div>
   );
}
