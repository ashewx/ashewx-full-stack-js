import Head from 'next/head'

import {Card} from "@heroui/react"
import AppLayout from '@components/AppLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to my world!</title>
      </Head>

      <AppLayout>
        <Card className="w-[240px] h-[240px] bg-linear-to-br from-gray-500 to-white-500">
          Hello world
        </Card>
      </AppLayout>
    </>
  )
}
