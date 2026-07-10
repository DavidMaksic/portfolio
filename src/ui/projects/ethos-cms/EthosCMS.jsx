import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import EthosCmsEn from './ethos-cms-en.mdx';
import EthosCmsSr from './ethos-cms-sr.mdx';
import MDXWrapper from '../MDXWrapper';

function EthosCMS() {
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
         {currentLanguage === 'en' && <EthosCmsEn />}
         {currentLanguage === 'sr' && <EthosCmsSr />}
      </MDXWrapper>
   );
}

export default EthosCMS;
