import styles from '@styles/photo.module.css'
import Head from 'next/head'
import Image from 'next/image'

import { CircularProgress } from "@heroui/react"
import AppLayout from '@components/AppLayout'

import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"

import axios from 'axios'

import { useState, useEffect } from 'react'
import { Masonry } from "masonic";

// Image breakpoints
const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128]

export default function Photography() {
  const [images, setImages] = useState([]) // States to keep track of image URLs
  const [isLoading, setLoading] = useState(true) // Keep track of loading state for all images to load
  const [lightBoxIdx, setLightBoxIdx] = useState(-1) // Track open/close state and current photo to look for lightbox


  const fetchPhotos = async () => {
    try {
      const response = await axios.get("/api/photos")
      setImages(response.data.results.toReversed().map(x => ({
        src: `${x}=w1080`,
        width: 1080,
        srcSet: breakpoints.map(xx => ({
          src: `${x}=w${xx}`,
          width: xx,
        }))
      })))
    } catch(error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false)
  }

  // Image component
  const ImgItem = ({ index, data: {src} }) => (
    <Image
      src={src}
      style={{ width: '100%' }}
      width={500}
      height={500}
      onClick={() => setLightBoxIdx(index)}
    />
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
            <Masonry items={images} render={ImgItem} maxColumnCount={4} columnGutter={4} overscanBy={4} />
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
        <Lightbox
          index={lightBoxIdx}
          open={lightBoxIdx >= 0}
          close={() => setLightBoxIdx(-1)}
          slides={images}
          plugins={[Fullscreen, Thumbnails, Zoom]}
        />
      </AppLayout>
    </>
  )
}
