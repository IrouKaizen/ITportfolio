
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} PortfolioTech. Tous droits réservés.
          </p>
          
          <div className="flex items-center">
            <span className="text-white/70 flex items-center">
              Conçu avec <Heart className="w-4 h-4 text-red-500 mx-1 fill-red-500" /> par Lovable
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
