import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import UseGamesEnMdx from './use-games-en.mdx';
import UseGamesSrMdx from './use-games-sr.mdx';
import MDXWrapper from '../MDXWrapper';

function UseGames() {
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
         {currentLanguage === 'en' && <UseGamesEnMdx />}
         {currentLanguage === 'sr' && <UseGamesSrMdx />}
      </MDXWrapper>
   );
}

export default UseGames;
