import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: faFacebook },
  { name: 'Twitter', url: 'https://twitter.com', icon: faTwitter },
  { name: 'Instagram', url: 'https://instagram.com', icon: faInstagram },
];

const SocialLinks = ({ isCollapsed, isMobile }: { isCollapsed: boolean; isMobile: boolean }) => (
  <div className={`flex ${isCollapsed || isMobile ? 'flex-col' : 'flex-row'} justify-center space-x-4 space-y-4`}>
    {socialLinks.map((link) => (
      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="block py-2 text-lg font-medium hover:font-bold bg-white text-black hover:bg-white uppercase">
        <FontAwesomeIcon icon={link.icon} className="mr-2" />
      </a>
    ))}
  </div>
);

export default SocialLinks;