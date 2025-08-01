import { useTranslation } from 'react-i18next';
import LanguageButton from './LanguageButton';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

function Navigation() {
   const { t } = useTranslation();
   const location = useLocation();
   const pathname = location.pathname;
   const { isDarkMode, toggleDarkMode } = useDarkMode();

   return (
      <nav className="text-base font-semibold text-primary-600">
         <ul className="flex gap-8 xs:gap-6 items-center">
            {pathname === '/' ? (
               <li className="flex items-center gap-10 xs:gap-8 sm:hidden">
                  <div>
                     <a
                        href="#projects"
                        className="hover:text-primary-700 transition"
                     >
                        {t('Header.nav-link-1')}
                     </a>
                  </div>
                  <div>
                     <a
                        href="#about"
                        className="hover:text-primary-700 transition text-nowrap"
                     >
                        {t('Header.nav-link-2')}
                     </a>
                  </div>
                  <div>
                     <a
                        href="#skills"
                        className="hover:text-primary-700 transition"
                     >
                        {t('Header.nav-link-3')}
                     </a>
                  </div>
               </li>
            ) : (
               <li>
                  <Link to={'/'} className="transition hover:text-primary-700">
                     {t('Header.return')}
                  </Link>
               </li>
            )}

            <div className="h-5 w-1 border-r border-primary-400" />

            <li className="flex items-center gap-5">
               <button
                  role="button"
                  aria-label="Light/Dark Mode Button"
                  className="hover:bg-primary-300/30 dark:hover:bg-primary-400/20 p-2 rounded-xl transition"
                  onClick={toggleDarkMode}
               >
                  {isDarkMode ? (
                     <HiOutlineMoon className="size-6 transition-custom" />
                  ) : (
                     <HiOutlineSun className="size-6 transition-custom" />
                  )}
               </button>

               <LanguageButton />
            </li>
         </ul>
      </nav>
   );
}

export default Navigation;
