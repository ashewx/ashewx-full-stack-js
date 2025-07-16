import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@components/Button'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to my world!</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Responsive metatag */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        {/* Material Fonts and Icons */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <Button />
      </main>

      <Footer />
    </div>
  )
}
