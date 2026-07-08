import {
   FaCss3Alt,
   FaGithub,
   FaHtml5,
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
import { useTranslation } from 'react-i18next';
import { BsJavascript, BsTypescript } from 'react-icons/bs';
import { motion } from 'motion/react';
import {
   SiBetterauth,
   SiDrizzle,
   SiExpress,
   SiPostgresql,
   SiReactquery,
   SiReactrouter,
   SiRedux,
   SiTrpc,
   SiVercel,
   SiVitest,
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiRedis } from 'react-icons/di';
import PlaywrightIcon from '../Icons/PlaywrightIcon';
import TrpcIcon from '../Icons/TrpcIcon';
import JwtIcon from '../Icons/JwtIcon';

const frontEndStack = [
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

const backEndStack = [
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
   {
      icon: <DiRedis className="size-10!" />,
      name: 'Redis',
   },
   {
      icon: <TrpcIcon className="size-11! mt-0.5" />,
      name: 'tRPC',
   },
   { icon: <SiBetterauth className="size-7!" />, name: 'Better Auth' },
   {
      icon: <JwtIcon />,
      name: 'JWT',
   },
   { icon: <RiSupabaseFill className="size-7! mt-0.5" />, name: 'Supabase' },
];

const toolsAndPlatforms = [
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

function Skills() {
   const { t } = useTranslation();

   return (
      <motion.div
         initial={{ transform: 'translateY(70px)', opacity: 0 }}
         whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.7 }}
         id="skills"
         className="py-3 flex flex-col gap-10 scroll-mt-24 xs:px-2"
      >
         <span className="text-2xl text-primary-700 tracking-widest uppercase text-center font-bold">
            {t('Skills.h1')}
         </span>

         <div className="grid grid-cols-2 gap-6 md:grid-cols-1 md:px-20 sm:px-0!">
            <div className="flex flex-col gap-5 shadow-xs border border-primary-400/30 dark:border-primary-400/10 rounded-2xl px-8 py-7 bg-white/50 dark:bg-primary-300/25 backdrop-blur-lg">
               <h4 className="text-primary-600 text-center">
                  {t('Skills.front-stack')}
               </h4>

               <div className="grid grid-cols-3 gap-3">
                  {frontEndStack.map((tech) => (
                     <Tech icon={tech.icon} name={tech.name} key={tech.name} />
                  ))}
               </div>
            </div>

            <div className="flex flex-col gap-5 border shadow-xs border-primary-400/30 dark:border-primary-400/10 rounded-2xl px-8 py-7 bg-white/50 dark:bg-primary-300/25 backdrop-blur-lg">
               <h4 className="text-primary-600 text-center">
                  {' '}
                  {t('Skills.back-stack')}
               </h4>

               <div className="grid grid-cols-3 gap-3">
                  {backEndStack.map((tech) => (
                     <Tech icon={tech.icon} name={tech.name} key={tech.name} />
                  ))}
               </div>
            </div>

            <div className="flex flex-col col-span-2 gap-5 border shadow-xs border-primary-400/30 dark:border-primary-400/10 rounded-2xl px-8 py-7 bg-white/50 dark:bg-primary-300/25 backdrop-blur-lg">
               <h4 className="text-primary-600 text-center">
                  {' '}
                  {t('Skills.tools-stack')}
               </h4>

               <div className="grid grid-cols-6 gap-3">
                  {toolsAndPlatforms.map((tech) => (
                     <Tech icon={tech.icon} name={tech.name} key={tech.name} />
                  ))}
               </div>
            </div>
         </div>
      </motion.div>
   );
}

function Tech({ icon, name }) {
   return (
      <div className="flex flex-col gap-1 py-4.5 w-full border border-primary-300 dark:border-primary-400/30 rounded-2xl justify-center items-center text-sm hover:bg-primary-800 hover:text-primary-50 transition dark:hover:text-primary-100 dark:hover:border-primary-100">
         <span className="h-10 [&_svg]:size-8">{icon}</span>
         <span className="pointer-events-none text-center">{name}</span>
      </div>
   );
}

export default Skills;
