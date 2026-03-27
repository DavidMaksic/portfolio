function ArticleImage({
   image,
   imageMobile,
   alt,
   isResponsive = false,
   height = '',
}) {
   if (isResponsive)
      return (
         <div className="parent grid grid-cols-[3fr_1fr] gap-6 lg:grid-cols-1 mb-2">
            <img
               src={image}
               alt={alt}
               className={`rounded-2xl h-91 object-cover lg:h-full dark:opacity-90 ${height}`}
            />
            <img
               src={imageMobile}
               alt={alt}
               className={`rounded-2xl h-91 object-cover lg:hidden dark:opacity-90 ${height}`}
            />
         </div>
      );

   if (!isResponsive)
      return (
         <div className="parent self-center justify-self-center mb-2">
            <img
               src={image}
               alt={alt}
               className={`rounded-xl h-110 lg:h-full dark:opacity-90 ${height}`}
            />
         </div>
      );
}

export default ArticleImage;
