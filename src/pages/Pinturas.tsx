import { Link } from 'react-router-dom';
import fotografiaReconstruidaData from '@/data/fotografia-reconstruida.json';
import eucasticaData from '@/data/eucastica.json';
import arteColoridoData from '@/data/arte-colorido.json';

const categories = [
  { name: 'Fotografía Reconstruida', path: '/pinturas/fotografia-reconstruida', data: fotografiaReconstruidaData },
  { name: 'Eucastica', path: '/pinturas/eucastica', data: eucasticaData },
  { name: 'Arte Colorido', path: '/pinturas/arte-colorido', data: arteColoridoData },
];

const Pinturas = () => (
  <div className="space-y-8 p-4">
    {categories.map((category, index) => (
      <Link to={category.path} key={index} className="block w-full relative group">
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src={category.data[0].src}
            alt={category.name}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{ filter: 'brightness(0.7)' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold uppercase">{category.name}</h2>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default Pinturas;