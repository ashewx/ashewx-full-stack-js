import Head from 'next/head'

import AppLayout from '@components/AppLayout'

export default function Card() {
  return (
    <>
      <Head>
        <title>Card</title>
      </Head>

      <AppLayout>
        <div>
          Put Cards here.
        </div>
      </AppLayout>
    </>
  )
}
