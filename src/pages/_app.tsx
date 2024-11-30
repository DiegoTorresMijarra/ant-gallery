import React from 'react'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'

import theme from '../themes/themeConfig'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: #b374f5 #f4f4f4;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #b374f5, #669ff5);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #b374f5, #669ff5);
    }

    ::-webkit-scrollbar-track {
        background: #f4f4f4;
        border-radius: 10px;
    }
`

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ConfigProvider>
)

export default App
