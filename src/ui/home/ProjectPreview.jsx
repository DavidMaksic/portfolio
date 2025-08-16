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
      projectURL,
   } = projectData;
   const { i18n } = useTranslation();
   const currentLanguage = i18n.language;

   return (
      <Link
         to={`/${projectURL}`}
         className="rounded-3xl flex flex-col shadow-preview overflow-hidden hover:translate-y-[-10px] transition duration-200 p-2 md:p-4 sm:p-2! gap-2 dark:bg-primary-300/25"
      >
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
      </Link>
   );
}

export default ProjectPreview;
