import '@styles/globals.css'

import {HeroUIProvider} from '@heroui/react'

import {useRouter} from "next/router";

function Application({ Component, pageProps }) {
  const router = useRouter();
  const useHref = (href) => router.basePath + href;

  return (
    <HeroUIProvider navigate={router.push} useHref={useHref}>
      <Component {...pageProps} />
    </HeroUIProvider>
  )
}

export default Application
