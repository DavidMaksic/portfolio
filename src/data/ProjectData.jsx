import {
   FaMobileScreenButton,
   FaCss3Alt,
   FaNodeJs,
   FaDocker,
   FaVuejs,
   FaHtml5,
   FaReact,
   FaSass,
   FaJs,
} from 'react-icons/fa6';
import {
   SiReacthookform,
   SiReactrouter,
   SiReactquery,
   SiBetterauth,
   SiExpress,
   SiDrizzle,
   SiVitest,
   SiRedux,
   SiZod,
} from 'react-icons/si';
import {
   IoExtensionPuzzleOutline,
   IoSettingsOutline,
   IoLanguage,
} from 'react-icons/io5';
import {
   RiTailwindCssFill,
   RiSupabaseFill,
   RiNextjsFill,
} from 'react-icons/ri';
import { BsJavascript, BsTypescript } from 'react-icons/bs';
import { TbApi, TbBrandFramerMotion } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';
import { CgShortcut } from 'react-icons/cg';
import { DiRedis } from 'react-icons/di';

import UnderConstructionImg from '/under-construction.avif';
import PlaywrightIcon from '../ui/Icons/PlaywrightIcon';
import BlockNoteIcon from '../ui/Icons/BlockNoteIcon';
import CasamentoImg from '/casamento.png';
import EthosCmsImg from '/ethos-cms.png';
import UseGamesImg from '/use-games.png';
import ResendIcon from '../ui/Icons/ResendIcon';
import SwiperIcon from '../ui/Icons/SwiperIcon';
import YakuzaImg from '/yakuza.png';
import TrpcIcon from '../ui/Icons/TrpcIcon';
import EthosImg from '/ethos.png';
import timerImg from '/timer.png';
import blogImg from '/blog.png';
import vsCode from '/vscode.png';

const buttonColors = (color, textOpacity = '55') =>
   `bg-${color}-700/8
   dark:bg-${color}-200/15
   hover:bg-${color}-700/40
   dark:hover:bg-${color}-300/40
   text-${color}-800/${textOpacity}
   dark:text-${color}-200/65
   hover:text-${color}-50
   hover:shadow-hue
   hover:shadow-${color}-700/25
   dark:hover:shadow-${color}-300/15`;

const buttonVariant = {
   red: buttonColors('red', '50'),
   orange: buttonColors('orange'),
   amber: buttonColors('amber'),
   yellow: buttonColors('yellow'),
   lime: buttonColors('lime'),
   green: buttonColors('green'),
   teal: buttonColors('teal'),
   cyan: buttonColors('cyan'),
   sky: buttonColors('sky'),
   blue: buttonColors('blue'),
   indigo: buttonColors('indigo'),
   violet: buttonColors('violet'),
   fuchsia: buttonColors('fuchsia'),
   pink: buttonColors('pink'),
   rose: buttonColors('rose'),
};

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
            icon: <RiNextjsFill className="text-[1.2rem]" />,
         },
         {
            name: 'Tailwind',
            icon: <RiTailwindCssFill />,
         },
         {
            name: 'Better Auth',
            icon: <SiBetterauth />,
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
            name: 'Zod',
            icon: <SiZod />,
         },
         {
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
         {
            name: 'Resend',
            icon: <ResendIcon size="0.88em" />,
         },
         {
            name: 'Swiper',
            icon: <SwiperIcon />,
         },
      ],
      projectURL: 'ethos-blog',
      codeLink: 'https://github.com/DavidMaksic/ethos-blog',
      demoLink: 'https://ethos-blog.com',
      visitBtn: buttonVariant.red,
      readBtn: buttonVariant.orange,
   },

   {
      titleEn: 'Ethos CMS',
      titleSr: 'Етос CMS',
      image: EthosCmsImg,
      descriptionEn:
         'A Content Management System (CMS) app for managing Ethos Blog website. Only verified authors have access to the app. Contains WYSIWYG text editor.',
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
            name: 'React Router',
            icon: <SiReactrouter />,
         },
         {
            name: 'TanStack Query',
            icon: <SiReactquery />,
         },
         {
            name: 'Motion',
            icon: <TbBrandFramerMotion />,
         },
         {
            name: 'Swiper',
            icon: <SwiperIcon />,
         },
         {
            name: 'BlockNote',
            icon: <BlockNoteIcon />,
         },
         {
            name: 'Supabase',
            icon: <RiSupabaseFill />,
         },
      ],
      projectURL: 'ethos-cms',
      readBtn: buttonVariant.amber,
   },

   {
      titleEn: 'Artfolio',
      titleSr: 'Артфолио',
      image: UnderConstructionImg,
      descriptionEn: 'A full-stack social media platform for artists.',
      descriptionSr: 'Друштвена мрежа за уметнике.',
      techStack: [
         {
            name: 'Node.js',
            icon: <FaNodeJs />,
         },
         {
            name: 'Express',
            icon: <SiExpress />,
         },
         {
            name: 'TypeScript',
            icon: <BsTypescript />,
         },
         {
            name: 'PostgreSQL',
            icon: <BiLogoPostgresql />,
         },
         {
            name: 'Drizzle',
            icon: <SiDrizzle />,
         },
         {
            name: 'Vue',
            icon: <FaVuejs />,
         },
         {
            name: 'Zod',
            icon: <SiZod />,
         },
         {
            name: 'Vitest',
            icon: <SiVitest />,
         },
         {
            name: 'Playwright',
            icon: <PlaywrightIcon />,
         },
         {
            name: 'Docker',
            icon: <FaDocker />,
         },
      ],
      projectURL: 'artfolio',
      codeLink: 'https://github.com/DavidMaksic/artfolio',
      readBtn: buttonVariant.yellow,
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
            name: 'React Router',
            icon: <SiReactrouter />,
         },
         {
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
      ],
      projectURL: 'timer',
      codeLink: 'https://github.com/DavidMaksic/training-timer',
      demoLink: 'https://davidmaksic.github.io/training-timer/',
      visitBtn: buttonVariant.green,
      readBtn: buttonVariant.teal,
   },
];

export const otherProjects = [
   {
      titleEn: 'O Casamento',
      titleSr: 'O Casamento',
      image: CasamentoImg,
      descriptionEn:
         'A brochure website for a fictional wedding company, displaying what it offers.',
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
      codeLink: 'https://github.com/DavidMaksic/o-casamento',
      demoLink: 'https://davidmaksic.github.io/o-casamento/',
      visitBtn: buttonVariant.cyan,
      readBtn: buttonVariant.sky,
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
            icon: <TbApi className="text-[1.45rem]" />,
         },
      ],
      projectURL: 'use-games',
      readBtn: buttonVariant.blue,
   },

   {
      titleEn: 'Blog App',
      titleSr: 'Блог Апликација',
      image: blogImg,
      descriptionEn:
         'A simple blogging app with bookmarks. Built with vanilla JavaScript using MVC architecture.',
      descriptionSr:
         'Једноставна блогинг апликација са функцијом обележавања чланака. Направљена са ванила JavaScript-ом користећи MVC архитектуру.',
      techStack: [
         {
            name: 'JavaScript',
            icon: <BsJavascript />,
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
      codeLink: 'https://github.com/DavidMaksic/blog-lite',
      demoLink: 'https://davidmaksic.github.io/blog-lite/',
      visitBtn: buttonVariant.indigo,
      readBtn: buttonVariant.violet,
   },

   {
      titleEn: 'VS Code Redesign',
      titleSr: 'VS Code Редизајн',
      image: vsCode,
      descriptionEn:
         'Most popular IDE redesigned for the current year, with no clutter and easier navigation, featuring all of my extensions.',
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
      readBtn: buttonVariant.fuchsia,
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
            icon: <BsJavascript />,
         },
         {
            name: 'Responsive',
            icon: <FaMobileScreenButton />,
         },
      ],
      projectURL: 'yakuza',
      codeLink: 'https://github.com/DavidMaksic/yakuza-site',
      demoLink: 'https://davidmaksic.github.io/yakuza-site/',
      visitBtn: buttonVariant.pink,
      readBtn: buttonVariant.rose,
   },
];
