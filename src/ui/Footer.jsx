import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
   const { t } = useTranslation();
   const location = useLocation();
   const pathname = location.pathname;

   return (
      <div className="mb-12 px-8 py-6 flex flex-col gap-3 items-center  w-[45.5rem] md:w-[40rem] sm:w-full! self-center backdrop-blur-lg rounded-3xl mt-6 shadow-sm bg-white/50 dark:bg-black/30 overflow-hidden">
         <div className="flex xs:flex-col xs:gap-14 justify-between items-center w-full">
            <div className="flex items-center justify-center gap-2 rounded-lg w-fit">
               <Link
                  to="https://github.com/DavidMaksic"
                  target="_blank"
                  aria-label="Github"
                  className="hover:bg-primary-400/40 transition p-2 rounded-md opacity-85 hover:opacity-100 dark:hover:bg-primary-400/30"
               >
                  <FaGithub className="size-5" />
               </Link>

               <div className="h-5 w-1 border-r border-primary-400" />

               <Link
                  to="https://www.linkedin.com/in/david-maksi%C4%87-b44948379/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="hover:bg-primary-400/40 transition p-2 rounded-md opacity-85 hover:opacity-100 dark:hover:bg-primary-400/30"
               >
                  <FaLinkedinIn className="size-5" />
               </Link>
            </div>

            {pathname === '/' && (
               <ul className="flex items-center gap-5 text-lg text-primary-600">
                  <li>
                     <a
                        href="#projects"
                        className="hover:text-primary-700 transition"
                     >
                        {t('Header.nav-link-1')}
                     </a>
                  </li>

                  <span className="text-xs">•</span>

                  <li>
                     <a
                        href="#about"
                        className="hover:text-primary-700 transition"
                     >
                        {t('Header.nav-link-2')}
                     </a>
                  </li>

                  <span className="text-xs">•</span>

                  <li>
                     <a
                        href="#skills"
                        className="hover:text-primary-700 transition"
                     >
                        {t('Header.nav-link-3')}
                     </a>
                  </li>
               </ul>
            )}
         </div>

         <div className="mt-18 xs:mt-12 flex flex-col gap-3 items-center">
            <span className="text-base text-primary-700 text-center">
               {t('Footer.p1-part1')}
               <strong>React</strong>
               {t('Footer.p1-part2')}
               <strong>MDX</strong>
               {t('Footer.p1-part3')}
               <strong>Vercel</strong>
               {t('Footer.p1-part4')}.
            </span>

            <span className="text-base text-primary-700 text-center">
               {t('Footer.p2')}
            </span>
         </div>
      </div>
   );
}

export default Footer;
