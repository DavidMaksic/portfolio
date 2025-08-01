import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import EthosBlogCmsEnMdx from './ethos-blog-cms-en.mdx';
import EthosBlogCmsSrMdx from './ethos-blog-cms-sr.mdx';
import MDXWrapper from '../MDXWrapper';

function EthosBlogCMS() {
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
         {currentLanguage === 'en' && <EthosBlogCmsEnMdx />}
         {currentLanguage === 'sr' && <EthosBlogCmsSrMdx />}
      </MDXWrapper>
   );
}

export default EthosBlogCMS;
