import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from './header/Header';
import Footer from './Footer';

// TODO: Screenshot better images
// TODO: Fix image zoom size on mobile devices
// TODO: Fix favicon
// TODO: Main image zoom in border radius
// TODO: Add VsCode re-design project
// TODO: In CMS, make modal list scrollable in features

function Layout() {
   const location = useLocation();
   const { i18n } = useTranslation();

   const currentLanguage = i18n.language;
   const pathname = location.pathname;

   return (
      <div>
         <div
            className={`background-gradient bg-primary dark:bg-primary transition ${
               pathname === '/' && 'background-glow'
            } `}
         >
            <main
               className={`mx-auto w-full max-w-5xl flex flex-col min-h-screen text-xl antialiased px-4 text-primary-800 md:px-12 xs:px-6 ${
                  pathname !== '/' ? 'gap-16 xs:gap-10' : 'gap-28'
               } ${
                  currentLanguage === 'en' ? 'font-default' : 'font-cyrillic'
               }`}
            >
               <Header />
               <Outlet />
               <Footer />
            </main>
         </div>
      </div>
   );
}

export default Layout;
