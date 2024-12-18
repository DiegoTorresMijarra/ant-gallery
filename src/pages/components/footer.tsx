import React from 'react'
import styled from 'styled-components'
import { Image } from 'antd'

const StyledFooter = styled.footer`
  flex: 0 0 12%;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden; /* Evita el scroll vertical */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #e2e8f0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  background: linear-gradient(
      135deg,
      rgba(15, 23, 42, 1) 0%,
      rgba(30, 41, 59, 1) 50%,
      rgba(15, 23, 42, 1) 100%
    ),
    radial-gradient(circle at center, rgba(59, 130, 246, 0.05), transparent 70%);
  background-blend-mode: overlay;

  position: relative;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 0px,
      rgba(255, 255, 255, 0.05) 2px,
      transparent 2px,
      transparent 20px
    );
    background-size: 30px 30px;
    filter: blur(1px);
    opacity: 0.6;
  }
`

const ExplanationText = styled.p`
  color: #fff;
  margin: 0;
  font-size: 0.9rem;
  text-align: center;
`

const PreviewGroupWrapper = styled.div`
  display: flex;
  justify-content: flex-start; /* Asegura que las imágenes se alineen al principio */
  gap: 10px;
  width: 90%; /* Asegura que ocupe el 100% del ancho */
  height: 100%;

  overflow-x: auto; /* Permite el scroll horizontal */
  overflow-y: hidden; /* Evita el scroll vertical */

  img {
    cursor: pointer;
    object-fit: cover;
    border: 2px solid transparent;
    transition: border 0.3s ease;
    min-width: 60px; /* Tamaño fijo para las imágenes */
    min-height: 60px; /* Tamaño fijo para las imágenes */

    &:hover {
      border-color: #263cc9;
    }
  }
`

const StyledImage = styled(Image)<{ selected: boolean }>`
  border: ${({ selected }) =>
    selected ? '2px solid #263cc9' : '2px solid transparent'};
  border-radius: 50%;
  min-height: 100%;
  min-width: 60px;
`

interface FooterProps {
  images: string[]
  current: number
  setCurrent: (index: number) => void
  goToImage: (index: number) => void
}

const AppFooter: React.FC<FooterProps> = ({
  images = [],
  current,
  setCurrent,
  goToImage,
}: FooterProps) => {
  return (
    <StyledFooter>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <PreviewGroupWrapper>
          {images.map((src, index) => (
            <StyledImage
              key={`preview-image-${index}`}
              src={src}
              alt={`preview-image-${index}`}
              width={60}
              height={60}
              preview={false}
              onClick={() => {
                setCurrent(index)
                goToImage(index)
              }}
              selected={index === current}
            />
          ))}
        </PreviewGroupWrapper>
      </div>

      <ExplanationText>
        &larr; Desliza para explorar las fotos &rarr;
      </ExplanationText>
    </StyledFooter>
  )
}

export default AppFooter
