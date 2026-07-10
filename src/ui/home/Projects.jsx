import { featuredProjects, otherProjects } from '../../data/ProjectData';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa6';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import ProjectPreview from './ProjectPreview';

function Projects() {
   const [open, setOpen] = useLocalStorage(false, 'showMoreProjects');
   const { t } = useTranslation();

   return (
      <motion.div
         initial={{ transform: 'translateY(70px)', opacity: 0 }}
         whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         id="projects"
         className="flex flex-col gap-10 scroll-mt-24 md:px-8 sm:px-0!"
      >
         <span className="text-2xl text-primary-700 tracking-widest uppercase text-center font-bold">
            {t('Projects.h1')}
         </span>

         <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
            {featuredProjects.map((project) => (
               <ProjectPreview projectData={project} key={project.titleEn} />
            ))}
         </div>

         {!open && (
            <button
               onClick={() => setOpen((open) => !open)}
               className="flex items-center gap-2 self-center shadow-article text-lg text-primary-600 rounded-full pr-3.5 pl-4.5 py-1.5 hover:translate-y-1 transition bg-white dark:bg-primary-300/25"
            >
               <span>{t('Projects.show-more-btn')}</span>
               <FaCaretDown className="size-4 opacity-80" />
            </button>
         )}

         <motion.div
            initial={{ transform: 'translateY(70px)', opacity: 0 }}
            whileInView={{
               transform: open ? 'translateY(0px)' : '',
               opacity: 1,
            }}
            transition={{ duration: 0.8 }}
            className={`${open ? 'visible' : 'hidden'} flex flex-col gap-10`}
         >
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:px-12 sm:px-0!">
               {otherProjects.map((project) => (
                  <ProjectPreview projectData={project} key={project.titleEn} />
               ))}
            </div>

            <a
               href="#projects"
               onClick={() => setOpen((open) => !open)}
               className="flex items-center gap-2 self-center shadow-article text-lg text-primary-600 rounded-full pr-3.5 pl-4.5 py-1.5 hover:translate-y-[-4px] transition bg-white dark:bg-primary-300/25"
            >
               <span>{t('Projects.show-less-btn')}</span>
               <FaCaretUp className="size-4 opacity-80" />
            </a>
         </motion.div>
      </motion.div>
   );
}

export default Projects;
