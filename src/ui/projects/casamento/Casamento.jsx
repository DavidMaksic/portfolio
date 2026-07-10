import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import CasamentoEn from './casamento-en.mdx';
import CasamentoSr from './casamento-sr.mdx';
import MDXWrapper from '../MDXWrapper';

function Casamento() {
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
         {currentLanguage === 'en' && <CasamentoEn />}
         {currentLanguage === 'sr' && <CasamentoSr />}
      </MDXWrapper>
   );
}

export default Casamento;
