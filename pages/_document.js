import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* Add other head elements here if needed */}
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
