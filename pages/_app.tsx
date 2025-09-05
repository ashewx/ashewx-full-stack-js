import '@styles/globals.css'

import { ApolloProvider } from '@apollo/client';
import client from '@lib/apollo';

import { HeroUIProvider } from '@heroui/react';

import { useRouter } from "next/router";
import type { AppProps } from 'next/app';

function Application({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const useHref = (href: string) => router.basePath + href;

  return (
    <ApolloProvider client={client}>
      <HeroUIProvider navigate={router.push} useHref={useHref}>
        <Component {...pageProps} />
      </HeroUIProvider>
    </ApolloProvider>
  );
}

export default Application;