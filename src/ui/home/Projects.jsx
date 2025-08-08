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
import CasamentoImg from './../../../assets/casamento.png';
import EthosCmsImg from './../../../assets/ethos-cms.png';
import UseGamesImg from './../../../assets/use-games.png';
import YakuzaImg from './../../../assets/yakuza.png';
import EthosImg from './../../../assets/ethos.png';
import timerImg from './../../../assets/timer.png';
import blogImg from './../../../assets/blog.png';
import vsCode from './../../../assets/vscode.png';

export const featuredProjects = [
   {
      titleEn: 'Ethos Blog',
      titleSr: 'Етос Блог',
      image: EthosImg,
      descriptionEn:
         'A Next.js blog website featuring internationalization, user authentication and comment system. Designed for a comfy reading experience.',
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
      demoLink: 'https://ethos-blog.vercel.app',
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
   },

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
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
      ],
      projectURL: 'timer',
      codeLink: 'https://github.com/DavidMaksic/Training-Timer',
      demoLink: 'https://davidmaksic.github.io/Training-Timer/',
   },
];

export const otherProjects = [
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
               className="flex items-center gap-2 self-center shadow-article text-lg text-primary-600 rounded-full pr-3.5 pl-4.5 py-1.5 hover:translate-y-[-4px] transition bg-white dark:bg-primary-300/25"
            >
               <span>{t('Projects.show-more-btn')}</span>
               <FaCaretDown />
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
               <FaCaretUp />
            </a>
         </motion.div>
      </motion.div>
   );
}

export default Projects;
