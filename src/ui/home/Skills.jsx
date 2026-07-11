import {
   toolsAndPlatforms,
   frontEndStack,
   backEndStack,
} from '../../data/SkillsData';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

function Skills() {
   const { t } = useTranslation();
   return (
      <motion.div
         initial={{ transform: 'translateY(70px)', opacity: 0 }}
         whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.7 }}
         id="skills"
         className="py-3 flex flex-col gap-10 scroll-mt-24 xs:px-2"
      >
         <span className="text-2xl text-primary-700 tracking-widest uppercase text-center font-bold">
            {t('Skills.h1')}
         </span>

         <div className="grid grid-cols-2 gap-6 md:grid-cols-1 md:px-20 sm:px-0!">
            <div className="relative overflow-hidden flex flex-col gap-5 shadow-preview border border-primary-400/30 dark:border-primary-400/10 rounded-2xl px-8 py-7 bg-white/50 dark:bg-primary-300/25 backdrop-blur-lg">
               <div className="pointer-events-none absolute -bottom-90 -right-80 w-180 h-180 rounded-full dark:bg-primary-400/15 blur-3xl xl:hidden will-change-transform" />

               <h4 className="text-primary-600 text-center">
                  {t('Skills.front-stack')}
               </h4>
               <div className="grid grid-cols-3 gap-3">
                  {frontEndStack.map((tech) => (
                     <Tech icon={tech.icon} name={tech.name} key={tech.name} />
                  ))}
               </div>
            </div>

            <div className="relative overflow-hidden flex flex-col gap-5 border shadow-preview border-primary-400/30 dark:border-primary-400/10 rounded-2xl px-8 py-7 bg-white/50 dark:bg-primary-300/25 backdrop-blur-lg">
               <div className="pointer-events-none absolute -bottom-90 -left-80 w-180 h-180 rounded-full dark:bg-primary-400/15 blur-3xl xl:hidden will-change-transform" />

               <h4 className="text-primary-600 text-center">
                  {t('Skills.back-stack')}
               </h4>
               <div className="grid grid-cols-3 gap-3">
                  {backEndStack.map((tech) => (
                     <Tech icon={tech.icon} name={tech.name} key={tech.name} />
                  ))}
               </div>
            </div>

            <div className="relative overflow-hidden flex flex-col col-span-2 md:col-span-1 gap-5 border shadow-preview border-primary-400/30 dark:border-primary-400/10 rounded-2xl px-8 py-7 bg-white/50 dark:bg-primary-300/25 backdrop-blur-lg">
               <div className="pointer-events-none absolute w-180 h-180 rounded-full dark:bg-primary-400/15 blur-3xl translate-x-[14%] -top-120 xl:hidden will-change-transform" />

               <h4 className="text-primary-600 text-center">
                  {t('Skills.tools-stack')}
               </h4>
               <div className="grid grid-cols-6 md:grid-cols-3 gap-3">
                  {toolsAndPlatforms.map((tech) => (
                     <Tech icon={tech.icon} name={tech.name} key={tech.name} />
                  ))}
               </div>
            </div>
         </div>
      </motion.div>
   );
}

function Tech({ icon, name }) {
   return (
      <div className="flex flex-col gap-1 z-10 py-4.5 w-full border border-primary-300 dark:border-primary-400/30 rounded-2xl justify-center items-center text-sm xs:text-xs 2xs:text-[0.7rem] hover:bg-primary-800 hover:text-primary-50 transition dark:hover:text-primary-100 dark:hover:border-primary-100">
         <span className="h-10 [&_svg]:size-8">{icon}</span>
         <span className="pointer-events-none text-center">{name}</span>
      </div>
   );
}

export default Skills;
