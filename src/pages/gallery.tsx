// App.tsx
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import AppHeader from '@/pages/components/header'
import AppBody from '@/pages/components/body'
import AppFooter from '@/pages/components/footer'
import { CarouselRef } from 'antd/es/carousel'
import dynamic from 'next/dynamic'

const StyledLayout = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  background: linear-gradient(
      135deg,
      rgba(229, 229, 247, 1) 0%,
      rgba(213, 213, 239, 1) 100%
    ),
    repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      rgba(229, 229, 247, 0.5) 30px
    ),
    repeating-linear-gradient(
      rgba(255, 181, 181, 0.3),
      rgba(255, 184, 184, 0.4)
    );
  background-blend-mode: overlay, lighten, normal;
  opacity: 1;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at top left,
      rgba(255, 181, 181, 0.15),
      transparent 60%
    );
    opacity: 0.8;
    z-index: -1;
  }
`

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
  'https://cdn-images-jorge-maria.imgix.net/Boda.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda1.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda2.jpg',
  'https://cdn-images-jorge-maria.imgix.net/Boda3.jpg',
]

const App: React.FC = () => {
  const [current, setCurrent] = useState(0)

  const onChange = (currentSlide: number) => {
    setCurrent(currentSlide)
    console.log(`Slide actual: ${currentSlide}`)
  }

  const onDownload = () => {
    const url = images[current]
    const suffix = url.slice(url.lastIndexOf('.'))
    const filename = 'Image-' + suffix

    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = blobUrl
        link.download = filename
        document.body.appendChild(link)
        link.click()
        URL.revokeObjectURL(blobUrl)
        link.remove()
      })
  }

  const carouselRef = useRef<CarouselRef>(null)

  const goToImage = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index)
    }
  }

  return (
    <StyledLayout>
      <AppHeader />
      <AppBody
        images={images}
        onChange={onChange}
        onDownload={onDownload}
        carouselRef={carouselRef}
        goToImage={goToImage}
      />
      <AppFooter
        images={images}
        current={current}
        setCurrent={setCurrent}
        goToImage={goToImage}
      />
    </StyledLayout>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})

// export default App
