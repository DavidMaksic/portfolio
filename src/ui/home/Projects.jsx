import {
   FaMobileScreenButton,
   FaCaretDown,
   FaCaretUp,
   FaCss3Alt,
   FaHtml5,
   FaReact,
   FaSass,
   FaJs,
} from 'react-icons/fa6';
import {
   RiNextjsFill,
   RiSupabaseFill,
   RiTailwindCssFill,
} from 'react-icons/ri';
import { SiReactquery, SiRedux, SiReactrouter, SiUmami } from 'react-icons/si';
import { TbApi, TbBrandFramerMotion } from 'react-icons/tb';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useTranslation } from 'react-i18next';
import {
   IoExtensionPuzzleOutline,
   IoLanguage,
   IoSettingsOutline,
} from 'react-icons/io5';
import { CgShortcut } from 'react-icons/cg';
import { motion } from 'motion/react';

import ProjectPreview from './ProjectPreview';
import CasamentoImg from './../../../public/casamento.png';
import EthosCmsImg from './../../../public/ethos-cms.png';
import UseGamesImg from './../../../public/use-games.png';
import YakuzaImg from './../../../public/yakuza.png';
import EthosImg from './../../../public/ethos.png';
import timerImg from './../../../public/timer.png';
import blogImg from './../../../public/blog.png';
import vsCode from './../../../public/vscode.png';

export const featuredProjects = [
   {
      titleEn: 'Ethos Blog',
      titleSr: 'Етос Блог',
      image: EthosImg,
      descriptionEn:
         'A Next.js blog website featuring internationalization, user authentication and a comment system. Designed for a comfy reading experience.',
      descriptionSr:
         'Блог вебсајт направљен користећи Next.js који садржи интернационализацију, аутентикацију корисника и систем коментарисања.',
      techStack: [
         {
            name: 'Next.js',
            icon: <RiNextjsFill />,
         },
         {
            name: 'Tailwind',
            icon: <RiTailwindCssFill />,
         },
         {
            name: 'Motion',
            icon: <TbBrandFramerMotion />,
         },
         {
            name: 'i18n',
            icon: <IoLanguage />,
         },
         {
            name: 'Supabase',
            icon: <RiSupabaseFill />,
         },
         {
            name: 'Umami',
            icon: <SiUmami />,
         },
         {
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
      ],
      projectURL: 'ethos-blog',
      codeLink: 'https://github.com/DavidMaksic/ethos-blog',
      demoLink: 'https://ethos-blog.vercel.app',
      visitBtn:
         'bg-red-700/8 dark:bg-red-200/15 hover:bg-red-700/40 dark:hover:bg-red-300/40 text-red-800/50 dark:text-red-200/65 hover:text-red-50 hover:shadow-hue hover:shadow-red-700/25 dark:hover:shadow-red-300/15',
      readBtn:
         'bg-orange-700/8 dark:bg-orange-200/15 hover:bg-orange-700/40 dark:hover:bg-orange-300/40 text-orange-800/55 dark:text-orange-200/65 hover:text-orange-50 hover:shadow-hue hover:shadow-orange-700/25 dark:hover:shadow-orange-300/15',
   },

   {
      titleEn: 'Ethos Blog CMS',
      titleSr: 'Етос Блог CMS',
      image: EthosCmsImg,
      descriptionEn:
         'A Content Management System (CMS) app for managing blog website. Only authors have access to enter the app. Contains WYSIWYG text editor.',
      descriptionSr:
         'CMS апликација за управљање блог садржајем. Једино аутори могу да приступе апликацији. Садржи WYSIWYG текст едитор.',
      techStack: [
         {
            name: 'React',
            icon: <FaReact />,
         },
         {
            name: 'Tailwind',
            icon: <RiTailwindCssFill />,
         },
         {
            name: 'React Query',
            icon: <SiReactquery />,
         },
         {
            name: 'React Router',
            icon: <SiReactrouter />,
         },
         {
            name: 'Motion',
            icon: <TbBrandFramerMotion />,
         },
         {
            name: 'Supabase',
            icon: <RiSupabaseFill />,
         },
      ],
      projectURL: 'ethos-blog-cms',
      codeLink: 'https://github.com/DavidMaksic/ethos-blog-cms',
      readBtn:
         'bg-lime-700/8 dark:bg-lime-200/15 hover:bg-lime-700/40 dark:hover:bg-lime-300/40 text-lime-800/55 dark:text-lime-200/65 hover:text-lime-50 hover:shadow-hue hover:shadow-lime-700/25 dark:hover:shadow-lime-300/15',
   },

   {
      titleEn: 'VS Code Redesign',
      titleSr: 'VS Code Редизајн',
      image: vsCode,
      descriptionEn:
         'Most popular IDE redesigned for the current year, with no clutter and easier navigation, featuring all of my settings, extensions and shortcuts.',
      descriptionSr:
         'Најпопуларнији IDE модерно редизајниран, без непотребних опција и са лакшом навигацијом.',
      techStack: [
         {
            name: 'CSS',
            icon: <FaCss3Alt />,
         },
         {
            name: 'Extensions',
            icon: <IoExtensionPuzzleOutline />,
         },
         {
            name: 'Shortcuts',
            icon: <CgShortcut />,
         },
         {
            name: 'Settings',
            icon: <IoSettingsOutline />,
         },
      ],
      projectURL: 'vscode',
      readBtn:
         'bg-green-700/8 dark:bg-green-200/15 hover:bg-green-700/40 dark:hover:bg-green-300/40 text-green-800/55 dark:text-green-200/65 hover:text-green-50 hover:shadow-hue hover:shadow-green-700/25 dark:hover:shadow-green-300/15',
   },

   {
      titleEn: 'O Casamento',
      titleSr: 'O Casamento',
      image: CasamentoImg,
      descriptionEn:
         'A brochure website for a fictional wedding company, which showcases what this company offers.',
      descriptionSr:
         'Вебсајт брошура за фикционалну фирму за венчања, која представља њену понуду.',
      techStack: [
         {
            name: 'HTML',
            icon: <FaHtml5 />,
         },
         {
            name: 'SASS',
            icon: <FaSass />,
         },
         {
            name: 'JavaScript',
            icon: <FaJs />,
         },
         {
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
      ],
      projectURL: 'casamento',
      codeLink: 'https://github.com/DavidMaksic/O-Casamento',
      demoLink: 'https://davidmaksic.github.io/O-Casamento/',
      visitBtn:
         'bg-teal-700/8 dark:bg-teal-200/15 hover:bg-teal-700/40 dark:hover:bg-teal-300/40 text-teal-800/55 dark:text-teal-200/65 hover:text-teal-50 hover:shadow-hue hover:shadow-teal-700/25 dark:hover:shadow-teal-300/15',
      readBtn:
         'bg-cyan-700/8 dark:bg-cyan-200/15 hover:bg-cyan-700/40 dark:hover:bg-cyan-300/40 text-cyan-800/55 dark:text-cyan-200/65 hover:text-cyan-50 hover:shadow-hue hover:shadow-cyan-700/25 dark:hover:shadow-cyan-300/15',
   },
];

export const otherProjects = [
   {
      titleEn: 'Training Timer',
      titleSr: 'Тренинг Тајмер',
      image: timerImg,
      descriptionEn:
         'A simple timer with preset feature for creating multiple workouts.',
      descriptionSr:
         'Једноставан тајмер са опцијом за прављење предефинисаних тренинга.',
      techStack: [
         {
            name: 'React',
            icon: <FaReact />,
         },
         {
            name: 'Tailwind',
            icon: <RiTailwindCssFill />,
         },
         {
            name: 'Redux Toolkit',
            icon: <SiRedux />,
         },
         {
            name: 'React Router',
            icon: <SiReactrouter />,
         },
         {
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
      ],
      projectURL: 'timer',
      codeLink: 'https://github.com/DavidMaksic/Training-Timer',
      demoLink: 'https://davidmaksic.github.io/Training-Timer/',
      visitBtn:
         'bg-sky-700/8 dark:bg-sky-200/15 hover:bg-sky-700/40 dark:hover:bg-sky-300/40 text-sky-800/55 dark:text-sky-200/65 hover:text-sky-50 hover:shadow-hue hover:shadow-sky-700/25 dark:hover:shadow-sky-300/15',
      readBtn:
         'bg-blue-700/8 dark:bg-blue-200/15 hover:bg-blue-700/40 dark:hover:bg-blue-300/40 text-blue-800/55 dark:text-blue-200/65 hover:text-blue-50 hover:shadow-hue hover:shadow-blue-700/25 dark:hover:shadow-blue-300/15',
   },

   {
      titleEn: 'useGames App',
      titleSr: 'useGames Апликација',
      image: UseGamesImg,
      descriptionEn:
         'App which fetches game data using REST API. Users can browse, rate and save games.',
      descriptionSr:
         'Апликација која преузима податке о видео-играма користећи REST API. Корисници могу да разгледају, оцене и сачувају игре.',
      techStack: [
         {
            name: 'React',
            icon: <FaReact />,
         },
         {
            name: 'Tailwind',
            icon: <RiTailwindCssFill />,
         },
         {
            name: 'REST',
            icon: <TbApi />,
         },
      ],
      projectURL: 'use-games',
      readBtn:
         'bg-indigo-700/8 dark:bg-indigo-200/15 hover:bg-indigo-700/40 dark:hover:bg-indigo-300/40 text-indigo-800/55 dark:text-indigo-200/65 hover:text-indigo-50 hover:shadow-hue hover:shadow-indigo-700/25 dark:hover:shadow-indigo-300/15',
   },

   {
      titleEn: 'Blog App',
      titleSr: 'Блог Апликација',
      image: blogImg,
      descriptionEn:
         'A simple blogging app with a bookmark feature. Built with vanilla JavaScript using MVC architecture.',
      descriptionSr:
         'Једноставна блогинг апликација са функцијом обележавања чланака. Направљена са ванила JavaScript-ом користећи MVC архитектуру.',
      techStack: [
         {
            name: 'JavaScript',
            icon: <FaJs />,
         },
         {
            name: 'Tailwind',
            icon: <RiTailwindCssFill />,
         },
         {
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
      ],
      projectURL: 'blog',
      codeLink: 'https://github.com/DavidMaksic/Blog-Lite',
      demoLink: 'https://davidmaksic.github.io/Blog-Lite/',
      visitBtn:
         'bg-violet-700/8 dark:bg-violet-200/15 hover:bg-violet-700/40 dark:hover:bg-violet-300/40 text-violet-800/55 dark:text-violet-200/65 hover:text-violet-50 hover:shadow-hue hover:shadow-violet-700/25 dark:hover:shadow-violet-300/15',
      readBtn:
         'bg-fuchsia-700/8 dark:bg-fuchsia-200/15 hover:bg-fuchsia-700/40 dark:hover:bg-fuchsia-300/40 text-fuchsia-800/55 dark:text-fuchsia-200/65 hover:text-fuchsia-50 hover:shadow-hue hover:shadow-fuchsia-700/25 dark:hover:shadow-fuchsia-300/15',
   },

   {
      titleEn: 'Yakuza Kiwami 2 Website Redesign',
      titleSr: 'Yakuza Kiwami 2 Вебсајт Редизајн',
      image: YakuzaImg,
      descriptionEn:
         'A complete redesign of the promotional website for the award-winning video-game Yakuza Kiwami 2.',
      descriptionSr:
         'Комплетан редизајн промоционалног вебсајта за награђивану видео-игру Yakuza Kiwami 2.',
      techStack: [
         {
            name: 'HTML',
            icon: <FaHtml5 />,
         },
         {
            name: 'CSS',
            icon: <FaCss3Alt />,
         },
         {
            name: 'JavaScript',
            icon: <FaJs />,
         },
         {
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
      ],
      projectURL: 'yakuza',
      codeLink: 'https://github.com/DavidMaksic/Yakuza-site',
      demoLink: 'https://davidmaksic.github.io/Yakuza-site/',
      visitBtn:
         'bg-pink-700/8 dark:bg-pink-200/15 hover:bg-pink-700/40 dark:hover:bg-pink-300/40 text-pink-800/55 dark:text-pink-200/65 hover:text-pink-50 hover:shadow-hue hover:shadow-pink-700/25 dark:hover:shadow-pink-300/15',
      readBtn:
         'bg-rose-700/8 dark:bg-rose-200/15 hover:bg-rose-700/40 dark:hover:bg-rose-300/40 text-rose-800/55 dark:text-rose-200/65 hover:text-rose-50 hover:shadow-hue hover:shadow-rose-700/25 dark:hover:shadow-rose-300/15',
   },
];

function Projects() {
   const [open, setOpen] = useLocalStorage(false, 'showMoreProjects');
   const { t } = useTranslation();

   return (
      <motion.div
         initial={{ transform: 'translateY(70px)', opacity: 0 }}
         whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         id="projects"
         className="flex flex-col gap-10 scroll-mt-24 md:px-8 sm:px-0!"
      >
         <span className="text-2xl text-primary-700 tracking-widest uppercase text-center font-bold">
            {t('Projects.h1')}
         </span>

         <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
            {featuredProjects.map((project) => (
               <ProjectPreview projectData={project} key={project.titleEn} />
            ))}
         </div>

         {!open && (
            <button
               onClick={() => setOpen((open) => !open)}
               className="flex items-center gap-2 self-center shadow-article text-lg text-primary-600 rounded-full pr-3.5 pl-4.5 py-1.5 hover:translate-y-1 transition bg-white dark:bg-primary-300/25"
            >
               <span>{t('Projects.show-more-btn')}</span>
               <FaCaretDown className="size-4 opacity-80" />
            </button>
         )}

         <motion.div
            initial={{ transform: 'translateY(70px)', opacity: 0 }}
            whileInView={{
               transform: open ? 'translateY(0px)' : '',
               opacity: 1,
            }}
            transition={{ duration: 0.8 }}
            className={`${open ? 'visible' : 'hidden'} flex flex-col gap-10`}
         >
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:px-12 sm:px-0!">
               {otherProjects.map((project) => (
                  <ProjectPreview projectData={project} key={project.titleEn} />
               ))}
            </div>

            <a
               href="#projects"
               onClick={() => setOpen((open) => !open)}
               className="flex items-center gap-2 self-center shadow-article text-lg text-primary-600 rounded-full pr-3.5 pl-4.5 py-1.5 hover:translate-y-[-4px] transition bg-white dark:bg-primary-300/25"
            >
               <span>{t('Projects.show-less-btn')}</span>
               <FaCaretUp className="size-4 opacity-80" />
            </a>
         </motion.div>
      </motion.div>
   );
}

export default Projects;
