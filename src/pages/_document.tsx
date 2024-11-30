import React from 'react'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        scrollbar-width: thin; /* Tamaño del scrollbar */
        scrollbar-color: #ff6b6b #f4f4f4;
    }

    ::-webkit-scrollbar {
        width: 8px; /* Ancho del scrollbar */
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #ff6b6b, #f7b731); /* Color con degradado */
        border-radius: 10px; /* Bordes redondeados */
    }

    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #ff4757, #ffa502); /* Color al pasar el mouse */
    }

    ::-webkit-scrollbar-track {
        background: #f4f4f4; /* Color del fondo del scrollbar */
        border-radius: 10px;
    }
`

const MyDocument = () => (
  <Html lang="en">
    <Head />
    <body style={{ margin: 0 }}>
      <GlobalStyle />
      <Main />
      <NextScript />
    </body>
  </Html>
)

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache()
  const originalRenderPage = ctx.renderPage
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => (
        <StyleProvider cache={cache}>
          <App {...props} />
        </StyleProvider>
      ),
    })

  const initialProps = await Document.getInitialProps(ctx)
  const style = extractStyle(cache, true)
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  }
}

export default MyDocument
