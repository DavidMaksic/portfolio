import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { SiReaddotcv } from 'react-icons/si';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import WordRotate from './WordRotate';

function Hero() {
   const { i18n, t } = useTranslation();
   const currentLanguage = i18n.language;

   return (
      <motion.div
         initial={{ transform: 'translateY(20px)', opacity: 0 }}
         whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         id="#hero"
         className="w-4/5 lg:w-11/12 md:w-full mx-auto text-center gap-24 lg:gap-10 xs:gap-12 lg:px-8 md:px-0! self-center"
      >
         <div className="flex flex-col gap-10 xs:gap-8 2xs:gap-10">
            <motion.div
               layout
               className={`${
                  currentLanguage === 'en'
                     ? 'font-bold leading-18 md:leading-17 xs:leading-13 2xs:leading-13 text-6xl md:text-[3.3rem] xs:text-[2.49rem] 2xs:text-[2.55rem]'
                     : 'font-extrabold leading-18 xs:leading-12.5 2xs:leading-13 text-[4rem] md:text-6xl xs:text-[2.49rem] 2xs:text-[2.5rem]'
               }  sm:text-[3.6rem] text-primary-800`}
            >
               {t('HeroPart1')}

               <span className="font-italic italic font-thin md:font-medium">
                  David
               </span>

               {t('HeroPart2')}

               <WordRotate
                  words={[
                     <span
                        key="react"
                        className="font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#0077ff] to-[#00cec7]"
                     >
                        React
                     </span>,
                     <span
                        key="next"
                        className="font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#7f00de] to-[#ff198c]"
                     >
                        Next.js
                     </span>,
                     <span
                        key="tailwind"
                        className="font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#00ce89] to-[#afd601]"
                     >
                        Tailwind
                     </span>,
                     <span
                        key="JavaScript"
                        className="font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#e95d00] to-[#ffc401]"
                     >
                        JavaScript
                     </span>,
                  ]}
                  className="inline-block font-semibold text-primary-600"
                  duration={2500}
               />
            </motion.div>

            <div className="self-center flex items-center justify-center gap-2 rounded-2xl w-fit px-2.5 py-1 shadow-links dark:bg-primary-100/50">
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
                  to="https://www.linkedin.com/in/david-maksi%C4%87-b44948379/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="hover:bg-primary-200/50 transition p-2 rounded-xl"
               >
                  <FaLinkedin className="size-6" />
               </Link>

               <div className="h-5 w-1 border-r border-primary-400" />

               <Link
                  to="https://drive.google.com/file/d/1jYWtNI2IM-V_1dfM2CKFDRGxbtRLu9I4/view?usp=sharing"
                  target="_blank"
                  aria-label="CV"
                  className="flex items-center gap-2 hover:bg-primary-200/50 transition p-2 rounded-xl"
               >
                  <SiReaddotcv className="size-6 stroke-[0.2px]" />
                  {t('CV')}
               </Link>
            </div>
         </div>
      </motion.div>
   );
}

export default Hero;
