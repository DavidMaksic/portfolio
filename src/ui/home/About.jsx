import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import AboutImage from './../../../public/about-image.jpg';

function About() {
   const { t } = useTranslation();

   return (
      <motion.div
         initial={{ transform: 'translateY(70px)', opacity: 0 }}
         whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.9 }}
         id="about"
         className="flex flex-col gap-10 scroll-mt-24 xs:px-2"
      >
         <span
            span
            className="text-2xl text-primary-700 tracking-widest uppercase text-center font-bold"
         >
            {t('About.h1')}
         </span>

         <div className="grid grid-cols-[1fr_2.8fr] md:grid-cols-1! gap-24 lg:gap-10">
            <img
               src={AboutImage}
               alt="Image of David"
               className="shadow--sm rounded-2xl h-128 md:h-140 sm:h-120! object-cover md:justify-self-center dark:opacity-90"
            />

            <div className="flex flex-col gap-8">
               <div className="flex flex-col gap-3 text-primary-700 leading-9 md:leading-9 xs:leading-8.5">
                  <span>{t('About.p1')}</span>

                  <span>
                     {t('About.p2-part1')} <strong>JavaScript</strong>{' '}
                     {t('About.p2-part2')}
                  </span>

                  <span>{t('About.p3')}</span>
               </div>

               <span className="self-end text-5xl text-primary-800 font-stylish pr-10">
                  David Maksić
               </span>
            </div>
         </div>
      </motion.div>
   );
}

export default About;
