// Header.tsx
import React from 'react'
import styled from 'styled-components'
import { Header } from 'antd/es/layout/layout'

const StyledHeader = styled(Header)`
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
      45deg,
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

const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  text-align: center;
`

const AppHeader: React.FC = () => {
  return (
    <StyledHeader>
      <Title>Jorge y María</Title>
    </StyledHeader>
  )
}

export default AppHeader
