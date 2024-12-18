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

    //
    //* {
    //    scrollbar-width: thin;
    //    scrollbar-color: #b374f5 #f4f4f4;
    //    scrollbar-track-color: rgba(45, 4, 75, 0.81);
    //}


    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background: #0a0a0a;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(90deg, #669ff5, #b374f5, #669ff5);
        border-radius: 20px;
        border: 1px solid #0a0a0a;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(90deg, #3b84f1, #983ef8, #3b84f1);
    }

    ::-webkit-scrollbar-track {
        background: rgba(45, 4, 75, 0.89);
        //background: linear-gradient(45deg, #669ff5, #b374f5);

        border-radius: 20px;
    }

    .ant-image-preview {
        background-color: #000000b3;
    }

    //.toolbar-wrapper {
    //    background-color: #000000;
    //}
    
    .ant-space-item {
        background: #0a0a0a;
        border: 1px solid #0a0a0a;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ConfigProvider>
)

export default App
