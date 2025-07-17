import styles from '@styles/photo.module.css'
import Head from 'next/head'

import { CircularProgress } from "@heroui/react"
import AppLayout from '@components/AppLayout'

import axios from 'axios'
import { Masonry } from 'react-plock'

import { useState, useEffect } from 'react'


export default function Photography() {
  const [images, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("/api/photos")
      setItems(response.data.results)
    } catch(error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPhotos()
  }, [])

  return (
    <>
      <Head>
        <title>Photography</title>
      </Head>

      <AppLayout>
        {
          !isLoading ?
          <div className={[styles['gallery-container'], 'px-3'].join(' ')}>
            <Masonry
              items={images.toReversed()}
              config={{
                columns: [2, 3, 4],
                gap: [16, 16, 16],
                media: [640, 768, 1024],
                useBalancedLayout: true,
              }}
              render={(item) => (
                <img src={item + "=w1024"} style={{ width: '100%' }} />
              )}
            />
          </div> :
          <div className="flex flex-row justify-center items-center h-full">
            <CircularProgress
              classNames={{
                svg: "w-40 h-40 drop-shadow-md",
              }}
              aria-label="Loading..."
              color="primary"
              strokeWidth={4}
              isIndeterminate
              size="lg"
            />
          </div>
        }
      </AppLayout>
    </>
  )
}
