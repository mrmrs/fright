import Document, { Head, Main, NextScript } from 'next/document'

import { ThemeProvider } from 'glamorous' 
import theme from '../theme'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body style={{ fontFamily: 'Open Sans' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
