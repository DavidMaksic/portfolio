import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import MDXWrapper from '../MDXWrapper';
import BlogEnMdx from './blog-en.mdx';
import BlogSrMdx from './blog-sr.mdx';

function Blog() {
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
         {currentLanguage === 'en' && <BlogEnMdx />}
         {currentLanguage === 'sr' && <BlogSrMdx />}
      </MDXWrapper>
   );
}

export default Blog;
