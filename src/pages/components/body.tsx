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
  margin: 0 auto;

  .slick-track {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  .slick-prev,
  .slick-next {
    color: blueviolet;

    position: absolute;

    width: 60px; /* Hacer el botón más grande */
    height: 60px; /* Hacer el botón más grande */
    background-color: rgba(
      169,
      169,
      169,
      0.5
    ); /* Fondo gris azulado transparente */
    border-radius: 50%; /* Forma circular */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    opacity: 1;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(
        169,
        169,
        169,
        0.8
      ); /* Fondo más opaco al hacer hover */
    }
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px; /* Hacer los íconos más grandes */
    color: white; /* Cambiar color de los íconos */
    display: block; /* Asegurarse de que el icono ocupe el espacio completo */
    margin: 0; /* Eliminar cualquier margen que pueda descentrar el ícono */
  }

  .slick-prev::after {
    font-weight: bold;
    position: relative;
    top: 0;
    border-inline-width: 4px 0;
    border-block-width: 4px 0;
  }
  .slick-next::after {
    top: 0;
    position: relative;
    inset-inline-start: 0;
    border-inline-width: 4px 0;
    border-block-width: 4px 0;
  }

  .slick-dots {
    transform: translateY(30px);

    li {
      button {
        background-color: gray; /* Color de los dots inactivos */
      }
    }

    li.slick-active {
      button {
        background-color: blueviolet; /* Color del dot activo */
      }
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

const AppBody: React.FC<BodyProps> = ({ images = [], onChange }: BodyProps) => {
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
