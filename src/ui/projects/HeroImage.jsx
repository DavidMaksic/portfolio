import { featuredProjects, otherProjects } from '../home/Projects';
import { Link, useLocation } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa6';
import Tech from '../home/Tech';

function HeroImage({ image, title }) {
   const featured = featuredProjects.map((item) => item);
   const other = otherProjects.map((item) => item);
   const { pathname } = useLocation();

   // Find current project based on title, to extract its tech stack
   const [featuredProject] = featured.filter(
      (item) => item.titleEn === title || item.titleSr === title,
   );
   const [otherProject] = other.filter(
      (item) => item.titleEn === title || item.titleSr === title,
   );

   const hasCodeLink = featuredProject?.codeLink || otherProject?.codeLink;
   const hasDemoLink = featuredProject?.demoLink || otherProject?.demoLink;

   const noLinks = !hasCodeLink && !hasDemoLink;
   const hasZoom =
      pathname === '/casamento' || pathname === '/yakuza' ? 'hero-image' : '';

   return (
      <div className="mt-10 mb-12 flex flex-col shadow-article rounded-3xl parent mx-[8rem] md:mx-[3rem] sm:mx-0! bg-white dark:bg-primary-300/25">
         <img
            src={image}
            className={`rounded-3xl dark:opacity-90 dark:shadow-md ${hasZoom}`}
            alt={featuredProject?.titleEn || otherProject?.titleEn}
         />

         <div
            className={`py-4 px-6 xs:px-4 flex justify-between items-center ${
               noLinks ? 'gap-0!' : 'gap-6'
            }`}
         >
            <div className="flex items-center gap-2 flex-wrap">
               {featuredProject?.techStack.map((tech) => (
                  <Tech icon={tech.icon} name={tech.name} key={tech.name} />
               )) ||
                  otherProject?.techStack.map((tech) => (
                     <Tech icon={tech.icon} name={tech.name} key={tech.name} />
                  ))}
            </div>

            <div className="flex xs:flex-col items-center gap-2 xs:gap-2">
               {hasCodeLink && (
                  <Link
                     to={featuredProject?.codeLink || otherProject?.codeLink}
                     target="_blank"
                     className="hover:bg-primary-100 dark:hover:bg-primary-200 transition p-2.5 rounded-xl"
                  >
                     <FaGithub className="size-6" />
                  </Link>
               )}

               {hasDemoLink && (
                  <Link
                     to={featuredProject?.demoLink || otherProject?.demoLink}
                     target="_blank"
                     className="hover:bg-primary-100 dark:hover:bg-primary-200 transition p-2.5 rounded-xl"
                  >
                     <FiExternalLink className="size-6" />
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
}

export default HeroImage;
