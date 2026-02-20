import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import mediumZoom from 'medium-zoom';

function HeroZoom() {
   const isMobile = useMediaQuery({ maxWidth: 768 });

   useEffect(() => {
      const zoom = mediumZoom('.hero-image', {
         margin: isMobile ? 20 : 60,
      });

      return () => {
         zoom.detach();
      };
   }, [isMobile]);

   return null;
}

export default HeroZoom;
