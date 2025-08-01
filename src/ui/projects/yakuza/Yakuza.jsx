import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import YakuzaEnMdx from './yakuza-en.mdx';
import YakuzaSrMdx from './yakuza-sr.mdx';
import MDXWrapper from '../MDXWrapper';

function Yakuza() {
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
         {currentLanguage === 'en' && <YakuzaEnMdx />}
         {currentLanguage === 'sr' && <YakuzaSrMdx />}
      </MDXWrapper>
   );
}

export default Yakuza;
