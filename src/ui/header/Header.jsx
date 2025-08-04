import { motion } from 'motion/react';

import Navigation from './Navigation';
import Logo from './../Logo';

function Header() {
   return (
      <motion.header
         initial={{ transform: 'translateY(-300px)', opacity: 0 }}
         animate={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
         className="pr-8 pl-6 xs:pl-4 xs:pr-5.5 py-3 w-[45.5rem] md:w-[40rem] sm:w-full! flex items-center justify-between self-center rounded-2xl mt-6 shadow-xs bg-white/50 dark:bg-black/25 backdrop-blur-lg xs:relative z-10 lg:mx-6 xs:mx-0 2xs:gap-12"
      >
         <Logo />
         <Navigation />
      </motion.header>
   );
}

export default Header;
