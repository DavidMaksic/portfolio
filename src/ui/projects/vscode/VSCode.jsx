import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import VSCodeEnMdx from './vscode-en.mdx';
import VSCodeSrMdx from './vscode-sr.mdx';
import MDXWrapper from '../MDXWrapper';

function VSCode() {
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
         {currentLanguage === 'en' && <VSCodeEnMdx />}
         {currentLanguage === 'sr' && <VSCodeSrMdx />}
      </MDXWrapper>
   );
}

export default VSCode;
