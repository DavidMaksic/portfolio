import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function PageNotFound() {
   const { t } = useTranslation();

   return (
      <div className="bg-white dark:bg-primary h-screen flex items-center justify-center font-default text-primary-600">
         <div className="flex flex-col items-center gap-8 bg-primary-200/80 dark:bg-primary-100 mx-6 px-20 sm:px-10 py-10 rounded-[34px] mb-32 border border-primary-300/20">
            <p className="text-5xl xs:text-3xl font-bold text-primary-600! text-center">
               {t('PageNotFound.message')}
            </p>

            <Link to="/">
               <button className="text-2xl underlined-text font-medium ">
                  &larr; &nbsp;{t('PageNotFound.back-btn')}
               </button>
            </Link>
         </div>
      </div>
   );
}

export default PageNotFound;
