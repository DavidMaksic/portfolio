import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import ArtfolioEn from './artfolio-en.mdx';
import ArtfolioSr from './artfolio-sr.mdx';
import MDXWrapper from '../MDXWrapper';

function Artfolio() {
   const { i18n } = useTranslation();
   const currentLanguage = i18n.language;

   document.documentElement.style.scrollBehavior = 'auto';

   useEffect(() => {
      let timer = setTimeout(() => {
         document.documentElement.style.scrollBehavior = 'smooth';
      }, 1000);

      return () => {
         clearTimeout(timer);
      };
   }, []);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <MDXWrapper>
         {currentLanguage === 'en' && <ArtfolioEn />}
         {currentLanguage === 'sr' && <ArtfolioSr />}
      </MDXWrapper>
   );
}

export default Artfolio;
