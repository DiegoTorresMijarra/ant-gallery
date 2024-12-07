import React from 'react'
import Gallery from '@/pages/components/gallery'
import { Content } from 'antd/es/layout/layout'
import dynamic from 'next/dynamic'

const Home = () => (
  <Content className="App">
    <Gallery />
  </Content>
)

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
})

// export default Home
