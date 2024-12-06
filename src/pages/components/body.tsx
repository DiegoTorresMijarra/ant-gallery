// Body.tsx
import React from 'react'
import styled from 'styled-components'
import { Carousel, Image } from 'antd'

const StyledContent = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledCarousel = styled(Carousel)`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 600px) {
    transform: translateY(20%);
  }

  @media (max-width: 450px) {
    transform: translateY(50%);
  }

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
  max-height: 500px;
  display: flex;
  background: none;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    display: flex !important;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`

interface BodyProps {
  images: string[]
  onChange: (currentSlide: number) => void
}

const AppBody: React.FC<BodyProps> = ({ images, onChange }) => {
  return (
    <StyledContent>
      <StyledCarousel arrows afterChange={onChange}>
        {images.map((src, index) => (
          <StyledContainer key={`carousel-image-${index}`}>
            <ImageStyled
              src={src}
              alt={`carousel-image-${index}`}
              // width={800}
              // height={450}
              preview={false}
              style={{ objectFit: 'contain', maxWidth: 'fit-content' }}
            />
          </StyledContainer>
        ))}
      </StyledCarousel>
    </StyledContent>
  )
}

export default AppBody