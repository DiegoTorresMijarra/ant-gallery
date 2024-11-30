import React from 'react'
import Gallery from '@/pages/components/gallery'
import { Content, Header } from 'antd/es/layout/layout'
import styled from 'styled-components'

const Home = () => (
  <div className="App">
    <HeaderEdited>
      <Title>Jorge y María</Title>
    </HeaderEdited>
    <Content>
      <Gallery />
    </Content>
  </div>
)

const HeaderEdited = styled(Header)`
  * {
    margin: 0;
  }
`

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
`

export default Home
