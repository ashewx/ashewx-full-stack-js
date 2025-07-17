import styles from '@styles/photo.module.css'
import Head from 'next/head'

import { CircularProgress } from "@heroui/react"
import AppLayout from '@components/AppLayout'

import axios from 'axios'

import { useState, useEffect } from 'react'
import { Masonry } from "masonic";

export default function Photography() {
  const [images, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("/api/photos")
      setItems(response.data.results.map(x => ({ url: x })))
    } catch(error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false)
  }

  const ImgItem = ({ data: {url} }) => (
    <img src={url + "=w1024"} style={{ width: '100%' }} />
  )

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
            <Masonry items={images.toReversed()} render={ImgItem} maxColumnCount={4} columnGutter={4} overscanBy={4} />
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
