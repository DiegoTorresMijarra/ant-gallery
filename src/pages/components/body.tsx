import React from 'react'
import styled from 'styled-components'
import { Carousel, Image } from 'antd'

const StyledContent = styled.div`
  flex: 1; /* Ocupa el espacio restante en el layout */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px; /* Espaciado interno para evitar bordes duros */
`

const StyledCarousel = styled(Carousel)`
  width: 100vw;
  display: flex;
  max-width: 800px;
  height: 100%;
  max-height: 80vh; /* Altura máxima adaptada al viewport */
  position: relative;

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-prev,
  .slick-next {
    color: blueviolet;
    width: 50px;
    height: 50px;
    background-color: rgba(169, 169, 169, 0.5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(169, 169, 169, 0.8);
    }

    &:before {
      font-size: 24px;
      color: white;
    }
  }

  .slick-dots {
    bottom: -20px;

    li button {
      width: 10px;
      height: 10px;
      background-color: gray;
      border-radius: 50%;
    }

    li.slick-active button {
      background-color: blueviolet;
    }
  }
`

const ImageStyled = styled(Image)`
  max-width: 100%;
  max-height: 70vh; /* Altura máxima ajustada al viewport */
  object-fit: contain; /* Mantiene la proporción de las imágenes */
  display: block;
`

interface BodyProps {
  images: string[]
  onChange: (currentSlide: number) => void
}

const AppBody: React.FC<BodyProps> = ({ images, onChange }: BodyProps) => {
  return (
    <StyledContent>
      <StyledCarousel arrows afterChange={onChange}>
        {images.map((src, index) => (
          <div key={`carousel-image-${index}`}>
            <ImageStyled
              src={src}
              alt={`carousel-image-${index}`}
              preview={false}
            />
          </div>
        ))}
      </StyledCarousel>
    </StyledContent>
  )
}

export default AppBody
