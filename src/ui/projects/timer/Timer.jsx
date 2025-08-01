import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import MDXWrapper from '../MDXWrapper';
import TimerEnMdx from './timer-en.mdx';
import TimerSrMdx from './timer-sr.mdx';

function Timer() {
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
         {currentLanguage === 'en' && <TimerEnMdx />}
         {currentLanguage === 'sr' && <TimerSrMdx />}
      </MDXWrapper>
   );
}

export default Timer;
