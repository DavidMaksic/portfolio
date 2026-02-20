function EntirePageImage({ image, alt }) {
   return (
      <div className="self-center justify-self-center mx-13 xs:mx-0">
         <img src={image} alt={alt} className="rounded-2xl shadow-article" />
      </div>
   );
}

export default EntirePageImage;
