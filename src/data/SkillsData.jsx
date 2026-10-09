import {
   FaGithub,
   FaReact,
   FaNodeJs,
   FaDocker,
   FaGitAlt,
   FaVuejs,
} from 'react-icons/fa6';
import {
   RiNextjsFill,
   RiSupabaseFill,
   RiTailwindCssFill,
} from 'react-icons/ri';
import {
   SiBetterauth,
   SiDrizzle,
   SiExpress,
   SiReactquery,
   SiReactrouter,
   SiRedux,
   SiVercel,
   SiVitest,
   SiZod,
} from 'react-icons/si';
import { BsJavascript, BsTypescript } from 'react-icons/bs';
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiRedis } from 'react-icons/di';

import PlaywrightIcon from '../ui/Icons/PlaywrightIcon';
import TrpcIcon from '../ui/Icons/TrpcIcon';

export const frontEndStack = [
   { icon: <RiNextjsFill />, name: 'Next.js' },
   { icon: <FaReact />, name: 'React' },
   { icon: <FaVuejs />, name: 'Vue' },
   {
      icon: <BsJavascript />,
      name: 'JavaScript',
   },
   {
      icon: <BsTypescript />,
      name: 'TypeScript',
   },
   {
      icon: <RiTailwindCssFill />,
      name: 'Tailwind',
   },
   { icon: <SiReactrouter />, name: 'React Router' },
   { icon: <SiReactquery />, name: 'React Query' },
   { icon: <SiRedux />, name: 'Redux' },
];

export const backEndStack = [
   {
      icon: <FaNodeJs />,
      name: 'Node.js',
   },
   {
      icon: <SiExpress />,
      name: 'Express',
   },
   {
      icon: <BiLogoPostgresql />,
      name: 'PostgreSQL',
   },
   {
      icon: <SiDrizzle />,
      name: 'Drizzle',
   },
   { icon: <SiBetterauth className="size-7!" />, name: 'Better Auth' },
   {
      icon: <DiRedis className="size-10!" />,
      name: 'Redis',
   },
   {
      icon: <SiZod />,
      name: 'Zod',
   },
   {
      icon: <TrpcIcon className="size-11! mt-0.5" />,
      name: 'tRPC',
   },
   { icon: <RiSupabaseFill className="size-7! mt-0.5" />, name: 'Supabase' },
];

export const toolsAndPlatforms = [
   { icon: <FaGithub />, name: 'Github' },
   {
      icon: <FaGitAlt className="size-8.5!" />,
      name: 'Git',
   },
   {
      icon: <SiVitest className="size-8.5!" />,
      name: 'Vitest',
   },
   {
      icon: <PlaywrightIcon />,
      name: 'Playwright',
   },
   {
      icon: <FaDocker />,
      name: 'Docker',
   },
   {
      icon: <SiVercel className="size-6.5! mt-0.5" />,
      name: 'Vercel',
   },
];
