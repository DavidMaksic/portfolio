import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import mediumZoom from 'medium-zoom';

function ImageZoom() {
   const isMobile = useMediaQuery({ maxWidth: 768 });

   useEffect(() => {
      const zoom = mediumZoom('.parent img', {
         margin: isMobile ? 20 : 60,
      });

      return () => {
         zoom.detach();
      };
   }, [isMobile]);

   return null;
}

export default ImageZoom;
