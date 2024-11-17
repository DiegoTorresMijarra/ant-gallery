import React from 'react';
import { Carousel, Image } from 'antd';

const images = [
    'https://cdn-images-jorge-maria.imgix.net/2x1.jpg',
    'https://cdn-images-jorge-maria.imgix.net/8e37c6fa-1667-498e-ac63-d06de4d52f83.webp',
    'https://cdn-images-jorge-maria.imgix.net/400.png',
    'https://cdn-images-jorge-maria.imgix.net/1620402630-laravel.png',
    'https://cdn-images-jorge-maria.imgix.net/bebidas.jpeg',
    'https://cdn-images-jorge-maria.imgix.net/bruja.png',
    'https://cdn-images-jorge-maria.imgix.net/CapturaPortfolio.PNG',
    'https://cdn-images-jorge-maria.imgix.net/CapturaPortfolio2.PNG',
    'https://cdn-images-jorge-maria.imgix.net/CapturaPortfolio3.PNG',
    'https://cdn-images-jorge-maria.imgix.net/contacto.png',
    'https://cdn-images-jorge-maria.imgix.net/croqueta.jpg',
    'https://cdn-images-jorge-maria.imgix.net/entrantes.jpg',
];

const Gallery: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Carousel arrows autoplay afterChange={onChange} style={{ width: '600px', height: '500px', backgroundColor:'black' }}>
            {images.map((src, index) => (
                <Image
                    key={`image-${index}`}
                    src={src}
                    alt={`image-${index}`}
                    width={800}
                    height={450}
                />
            ))}
        </Carousel>
    );
};

export default Gallery;
