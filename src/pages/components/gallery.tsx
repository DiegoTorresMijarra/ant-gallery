import React from 'react'
import {
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons'
import { Carousel, Image, Layout, Space } from 'antd'
import styled from 'styled-components'
import { Header } from 'antd/es/layout/layout'

const { Footer, Content } = Layout

const images = [
  'https://cdn-images-jorge-maria.imgix.net/Boda.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda1.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda2.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda3.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda1.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda2.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda3.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda1.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda2.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda3.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda1.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda2.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda3.jpg',
]

// Estilos personalizados con styled-components

// Contenedor principal
const StyledLayout = styled(Layout)`
  height: 100vh; /* Altura de toda la ventana */
  display: flex;
  flex-direction: column;
`

const StyledHeader = styled(Header)`
  flex: 0 0 10%; /* El header ocupa el 10% del alto */
  background: #263cc9;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledContent = styled(Content)`
  flex: 1;
  padding: 20px;
  background-color: black;
  //min-height: 80vh;
  //position: relative;
`

const StyledFooter = styled(Footer)`
  flex: 0 0 10%;
  min-height: fit-content;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  overflow-x: auto;
`
const ExplanationText = styled.p`
  color: white;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 10px; /* Espacio entre el texto y las imágenes */
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

// Aplicar fondo con blur oscuro al abrir la preview
const StyledPreview = styled.div`
  .ant-image-preview-mask {
    backdrop-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.8) !important;
  }
`

const StyledPreviewGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  overflow-x: auto;
  min-width: fit-content;

  img {
    cursor: pointer;
    object-fit: cover;
  }
`

const StyledDivider = styled.div`
  width: 80%;
  overflow: inherit;
`

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
`

const Gallery: React.FC = () => {
  const [current, setCurrent] = React.useState(0)

  const onChange = (currentSlide: number) => {
    console.log(`Slide actual: ${currentSlide}`)
  }

  const onDownload = () => {
    const url = images[current]
    const suffix = url.slice(url.lastIndexOf('.'))
    const filename = 'Image-' + suffix

    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(new Blob([blob]))
        const link = document.createElement('a')
        link.href = blobUrl
        link.download = filename
        document.body.appendChild(link)
        link.click()
        URL.revokeObjectURL(blobUrl)
        link.remove()
      })
  }

  return (
    <StyledPreview>
      <StyledLayout>
        <StyledHeader>
          <Title>Jorge y María</Title>
        </StyledHeader>
        <StyledContent>
          <StyledCarousel autoplay arrows afterChange={onChange}>
            {images.map((src, index) => (
              <div
                key={`carousel-image-${index}`}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Image
                  src={src}
                  alt={`carousel-image-${index}`}
                  // width={800}
                  // height={450}
                  preview={false}
                  style={{ objectFit: 'contain', maxWidth: 'fit-content' }}
                  loading={'lazy'}
                />
              </div>
            ))}
          </StyledCarousel>
        </StyledContent>

        <StyledFooter>
          <ExplanationText>
            &larr; Deslízame y selecciona una foto &rarr;
          </ExplanationText>
          <StyledDivider>
            <Image.PreviewGroup
              preview={{
                toolbarRender: (
                  _,
                  {
                    transform: { scale },
                    actions: {
                      onActive,
                      onFlipY,
                      onFlipX,
                      onRotateLeft,
                      onRotateRight,
                      onZoomOut,
                      onZoomIn,
                    },
                  },
                ) => (
                  <Space size={12} className="toolbar-wrapper">
                    <LeftOutlined onClick={() => onActive?.(-1)} />
                    <RightOutlined onClick={() => onActive?.(1)} />
                    <DownloadOutlined onClick={onDownload} />
                    <SwapOutlined rotate={90} onClick={onFlipY} />
                    <SwapOutlined onClick={onFlipX} />
                    <RotateLeftOutlined onClick={onRotateLeft} />
                    <RotateRightOutlined onClick={onRotateRight} />
                    <ZoomOutOutlined
                      disabled={scale === 1}
                      onClick={onZoomOut}
                    />
                    <ZoomInOutlined
                      disabled={scale === 50}
                      onClick={onZoomIn}
                    />
                  </Space>
                ),
                onChange: (index) => {
                  setCurrent(index)
                },
              }}
            >
              <StyledPreviewGroup>
                {images.map((src, index) => (
                  <Image
                    key={`preview-image-${index}`}
                    src={src}
                    alt={`preview-image-${index}`}
                    width={100}
                    height={100}
                    loading={'lazy'}
                  />
                ))}
              </StyledPreviewGroup>
            </Image.PreviewGroup>
          </StyledDivider>
        </StyledFooter>
      </StyledLayout>
    </StyledPreview>
  )
}

export default Gallery
