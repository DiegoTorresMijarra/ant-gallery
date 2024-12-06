// Footer.tsx
import React from 'react'
import styled from 'styled-components'
import { DownloadOutlined } from '@ant-design/icons'
import { Image } from 'antd'

const StyledFooter = styled.footer`
  flex: 0 0 10%;
  width: 100%;
  height: 100%;

  display: flex;
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
  justify-content: center;
  gap: 10px;
  overflow-x: auto;

  img {
    cursor: pointer;
    object-fit: cover;
    border: 2px solid transparent;
    transition: border 0.3s ease;

    &:hover {
      border-color: #263cc9;
    }
  }
`

const StyledImage = styled(Image)<{ selected: boolean }>`
  border: ${({ selected }) =>
    selected ? '2px solid #263cc9' : '2px solid transparent'};
  border-radius: 50%;
`

interface FooterProps {
  images: string[]
  current: number
  setCurrent: (index: number) => void
  onDownload: () => void
}

const AppFooter: React.FC<FooterProps> = ({
  images,
  current,
  setCurrent,
  onDownload,
}: FooterProps) => {
  return (
    <StyledFooter>
      <ExplanationText>
        &larr; Desliza para explorar las fotos &rarr;
      </ExplanationText>
      <PreviewGroupWrapper>
        {images.map((src, index) => (
          <StyledImage
            key={`preview-image-${index}`}
            src={src}
            alt={`preview-image-${index}`}
            width={60}
            height={60}
            preview={false}
            onClick={() => setCurrent(index)}
            selected={index === current}
          />
        ))}
      </PreviewGroupWrapper>
      <DownloadOutlined
        onClick={onDownload}
        style={{ fontSize: '20px', cursor: 'pointer' }}
      />
    </StyledFooter>
  )
}

export default AppFooter
