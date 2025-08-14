import '@styles/globals.css'

import { ApolloProvider } from '@apollo/client';
import client from '@lib/apollo.js';

import {HeroUIProvider} from '@heroui/react'

import {useRouter} from "next/router";

function Application({ Component, pageProps }) {
  const router = useRouter();
  const useHref = (href) => router.basePath + href;

  return (
    <ApolloProvider client={client}>
      <HeroUIProvider navigate={router.push} useHref={useHref}>
        <Component {...pageProps} />
      </HeroUIProvider>
    </ApolloProvider>
  )
}

export default Application
