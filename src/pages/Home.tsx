import React from 'react'
import Gallery from '@/pages/components/gallery'
import { Content, Header } from 'antd/es/layout/layout'
import Title from 'antd/es/typography/Title'
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

export default Home
