import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import EthosBlogEnMdx from './ethos-blog-en.mdx';
import EthosBlogSrMdx from './ethos-blog-sr.mdx';
import MDXWrapper from '../MDXWrapper';

function EthosBlog() {
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
         {currentLanguage === 'en' && <EthosBlogEnMdx />}
         {currentLanguage === 'sr' && <EthosBlogSrMdx />}
      </MDXWrapper>
   );
}

export default EthosBlog;
