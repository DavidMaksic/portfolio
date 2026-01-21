import { useTranslation } from 'react-i18next';

function TableOfContents({ h2Arr }) {
   const { t } = useTranslation();

   const handleAnchorClick = (e, id) => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
   };

   return (
      <div className="mx-32 md:mx-[3rem] sm:mx-0! flex flex-col gap-5">
         <span className="font-bold">{t('TableOfContents')}</span>

         <div className="flex flex-col gap-2">
            {h2Arr.map((item) => (
               <a
                  onClick={(e) => handleAnchorClick(e, item)}
                  href={`#${item}`}
                  className="w-max py-2 pl-8 pr-40 xs:pr-32 text-lg rounded-xl text-primary-500 dark:text-primary-600/90 bg-white border border-primary-400/30 dark:border-primary-400/10 hover:bg-primary dark:bg-primary-300/15 dark:hover:bg-primary-300/10 transition duration-75"
               >
                  {item.charAt(0).toUpperCase() +
                     item.slice(1).replaceAll('-', ' ')}
               </a>
            ))}
         </div>
      </div>
   );
}

export default TableOfContents;
