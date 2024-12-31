import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import fotografiaReconstruidaData from '@/data/fotografia-reconstruida.json';
import eucasticaData from '@/data/eucastica.json';
import arteColoridoData from '@/data/arte-colorido.json';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface ImageData {
  src: string;
  title: string;
}

interface GaleriaProps {
  type: 'fotografia-reconstruida' | 'eucastica' | 'arte-colorido';
}

const Galeria: React.FC<GaleriaProps> = ({ type }) => {
  let images: ImageData[];
  switch (type) {
    case 'fotografia-reconstruida':
      images = fotografiaReconstruidaData;
      break;
    case 'eucastica':
      images = eucasticaData;
      break;
    case 'arte-colorido':
      images = arteColoridoData;
      break;
    default:
      images = [];
  }

  const parsedImages = images
    .map((image) => ({
      ...image,
      pair: images.find((img) => img.title === `Fotografia ${image.title}`)
    }))
    .filter((image) => !image.title.includes('Fotografia'));

  console.log('images', images);
  images.map((image) => console.log(image.title, image.title.includes('Fotografia'), image.title.replace('Fotografia', '').trim()));
  console.log('parsedImages', parsedImages);

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
      {parsedImages.map((image, index) => (
        <div key={index} className="relative mb-4 break-inside-avoid">
          <Card>
            <CardContent>
            <Carousel>
              <CarouselContent>
                <CarouselItem><img src={image.src} alt={`${image.title}`} className="w-full h-auto mb-4" /></CarouselItem>
                {image.pair && <CarouselItem><img src={image.pair.src} alt={`Fotografia ${image.title}`} className="w-full h-auto mb-4" /></CarouselItem>}
              </CarouselContent>
              {image.pair && <CarouselPrevious />}
              {image.pair && <CarouselNext />}
            </Carousel>
            </CardContent>
            <CardFooter>
              <div className="text-center">{image.title}</div>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Galeria;