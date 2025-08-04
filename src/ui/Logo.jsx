import { Link } from 'react-router-dom';

function Logo() {
   return (
      <Link to={'/'} alt="Logo" className="font-stylish text-4xl mb-[-4px]">
         <div className="flex items-center gap-4">
            <span>David</span>
            <span className="block"> M.</span>
         </div>
      </Link>
   );
}

export default Logo;
