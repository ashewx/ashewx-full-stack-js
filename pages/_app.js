import '@styles/globals.css'

import {HeroUIProvider} from '@heroui/react'

function Application({ Component, pageProps }) {
  return (
    <HeroUIProvider>
      <Component {...pageProps} />
    </HeroUIProvider>
  )
}

export default Application
