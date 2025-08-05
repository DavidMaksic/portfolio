import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import mediumZoom from 'medium-zoom';

function ArticleImage({ image, imageMobile, alt, isResponsive }) {
   const isMobile = useMediaQuery({ maxWidth: 768 });

   useEffect(() => {
      const zoom = mediumZoom('.parent img', {
         margin: isMobile ? 20 : 60,
      });

      const handleClick = (e) => {
         if (zoom.getZoomedImage() && !e.target.closest('.parent img')) {
            zoom.close();
         }
      };

      document.addEventListener('click', handleClick);

      return () => {
         document.removeEventListener('click', handleClick);
         zoom.detach();
      };
   }, []);

   if (isResponsive)
      return (
         <div className="parent grid grid-cols-[3fr_1fr] gap-6 lg:grid-cols-1 mb-2">
            <img
               src={image}
               alt={alt}
               className="rounded-2xl h-91 object-cover lg:h-full dark:opacity-90"
            />
            <img
               src={imageMobile}
               alt={alt}
               className="rounded-2xl h-91 object-cover lg:hidden dark:opacity-90"
            />
         </div>
      );

   if (!isResponsive)
      return (
         <div className="parent self-center justify-self-center mb-2">
            <img
               src={image}
               alt={alt}
               className="rounded-xl h-110 lg:h-full  dark:opacity-90"
            />
         </div>
      );
}

export default ArticleImage;
