import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import MDXWrapper from '../MDXWrapper';
import TimerEn from './timer-en.mdx';
import TimerSr from './timer-sr.mdx';

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
         {currentLanguage === 'en' && <TimerEn />}
         {currentLanguage === 'sr' && <TimerSr />}
      </MDXWrapper>
   );
}

export default Timer;
