import { HiOutlineBookOpen } from 'react-icons/hi';
import { FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Tech from './Tech';

function ProjectPreview({ projectData }) {
   const {
      techStack,
      titleEn,
      titleSr,
      image,
      descriptionEn,
      descriptionSr,
      demoLink,
      projectURL,
      visitBtn,
      readBtn,
   } = projectData;
   const { i18n, t } = useTranslation();
   const currentLanguage = i18n.language;

   return (
      <div className="rounded-3xl grid grid-rows-[0.5fr_1fr_0.1fr] shadow-preview overflow-hidden p-2 pb-4 md:p-4 sm:p-2! sm:pb-3! gap-2 dark:bg-primary-300/25">
         <img
            src={image}
            alt={currentLanguage === 'en' ? titleEn : titleSr}
            className="w-full bg-primary-900 text-primary-50 h-56 md:h-72 sm:h-57! xs:h-52! rounded-2xl object-cover shadow-md dark:opacity-90"
         />

         <div className="flex flex-col gap-2 p-3 md:py-4">
            <h4 className="text-2xl md:text-4xl sm:text-3xl! xs:text-2xl! font-semibold text-primary-900">
               {currentLanguage === 'en' ? titleEn : titleSr}
            </h4>

            <span className="text-lg text-primary-600 mb-3">
               {currentLanguage === 'en' ? descriptionEn : descriptionSr}
            </span>

            <div className="flex items-center gap-2 flex-wrap">
               {techStack.map((tech) => (
                  <Tech icon={tech.icon} name={tech.name} key={tech.name} />
               ))}
            </div>
         </div>

         <div
            className={`grid grid-cols-1 ${demoLink && 'grid-cols-2'} ${
               currentLanguage === 'en'
                  ? 'text-xl xs:text-lg'
                  : 'text-lg xs:text-base'
            } mx-2 sm:mx-1 h-14 xs:h-12.5 font-mono font-semibold mt-1`}
         >
            {demoLink && (
               <Link
                  to={demoLink}
                  target="_blank"
                  className={`rounded-l-2xl flex items-center justify-center gap-2 ${visitBtn} transition ease-out hover:saturate-120 border-r border-r-primary-50`}
               >
                  <span>{t('Projects.visit-btn')}</span>
                  <FiExternalLink className="stroke-[2.8px] size-4.5 xs:size-4" />
               </Link>
            )}

            <Link
               to={`/${projectURL}`}
               className={`rounded-r-2xl flex items-center justify-center gap-2 ${readBtn} ${
                  !demoLink && 'rounded-l-2xl'
               } transition ease-out hover:saturate-120`}
            >
               <span>{t('Projects.read-more-btn')}</span>
               <HiOutlineBookOpen className="stroke-[2.5px]" />
            </Link>
         </div>
      </div>
   );
}

export default ProjectPreview;
