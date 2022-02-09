import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>

        </Head>
        <body className="bg-fixed bg-gradient-to-r from-green-500 to-blue-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument