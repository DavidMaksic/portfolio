import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import ProjectGrid from './ProjectGrid';

function Hero() {
   const { i18n, t } = useTranslation();
   const currentLanguage = i18n.language;

   return (
      <motion.div
         initial={{ transform: 'translateY(20px)', opacity: 0 }}
         whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         id="#hero"
         className="w-4/5 lg:w-11/12 md:w-full mx-auto text-center gap-24 lg:gap-10 xs:gap-12 lg:px-8 xs:px-0 self-center"
      >
         <div className="flex flex-col gap-10 xs:gap-8 2xs:gap-10">
            <span
               className={`${
                  currentLanguage === 'en'
                     ? 'font-bold leading-18 md:leading-19 xs:leading-12'
                     : 'font-extrabold leading-17 md:leading-18 xs:leading-12'
               } text-6xl xs:text-[2.5rem] 2xs:text-4xl text-primary-800`}
            >
               {t('HeroPart1')}

               <span className="font-italic italic font-thin md:font-medium">
                  David
               </span>

               {t('HeroPart2')}

               <span className="font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#0077ff] to-[#00cec7]">
                  React
               </span>
               {t('HeroPart3')}
               <span className="font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#7f00de] to-[#ff007f]">
                  Next.js
               </span>
            </span>

            <div className="self-center flex items-center justify-center gap-2 rounded-2xl w-fit px-2.5 py-1 border border-primary-400/40 shadow-sm dark:border-primary-400/15 dark:bg-primary-100/50">
               <Link
                  to="https://github.com/DavidMaksic"
                  target="_blank"
                  aria-label="Github"
                  className="hover:bg-primary-200/50 transition p-2 rounded-xl"
               >
                  <FaGithub className="size-6" />
               </Link>

               <div className="h-5 w-1 border-r border-primary-400" />

               <Link
                  to="#"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="hover:bg-primary-200/50 transition p-2 rounded-xl"
               >
                  <FaLinkedin className="size-6" />
               </Link>
            </div>
         </div>
      </motion.div>
   );
}

export default Hero;
