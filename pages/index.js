import styles from '@styles/index.module.css'
import Head from 'next/head'

import AppLayout from '@components/AppLayout'

import { Avatar, Button, Link } from '@heroui/react'

// Icons
import {
  BsTwitterX,
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsLinkedin
} from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <AppLayout>
        <div className={styles['parallax-container']}>
          <div className="flex flex-col justify-center items-center h-full gap-3 grow">
            <Avatar
              className="size-[45vh]"
              src="/ashewx-profile-pic.jpg"
            />
            <div className='text-3xl font-semibold'>Andrew Nguyen</div>
            <div className='text-xl'>Software Engineer | Arizona State Graduate</div>
            <div className={[styles['social-icons'], 'flex', 'gap-2'].join(' ')}>
              <Button
                size="lg"
                radius="full"
                isIconOnly
                variant="shadow"
                className={styles['ig-icon']}
                href="https://www.instagram.com/ashewx/"
                as={Link}
                target="_blank"
              >
                <BsInstagram size="1.5em" />
              </Button>
              <Button
                size="lg"
                radius="full"
                isIconOnly
                variant="shadow"
                className={styles['x-icon']}
                href="https://x.com/ashewx"
                as={Link}
                target="_blank"
              >
                <BsTwitterX size="1.5em" />
              </Button>
              <Button
                size="lg"
                radius="full"
                isIconOnly
                variant="shadow"
                className={styles['fb-icon']}
                href="https://www.facebook.com/ashewx"
                as={Link}
                target="_blank"
              >
                <BsFacebook size="1.5em" />
              </Button>
              <Button
                size="lg"
                radius="full"
                isIconOnly
                variant="shadow"
                className={styles['gh-icon']}
                href="https://github.com/ashewx"
                as={Link}
                target="_blank"
              >
                <BsGithub size="1.5em" />
              </Button>
              <Button
                size="lg"
                radius="full"
                isIconOnly
                variant="shadow"
                className={styles['li-icon']}
                href="https://www.linkedin.com/in/nguyen-hoang-andrew/"
                as={Link}
                target="_blank"
              >
                <BsLinkedin size="1.5em" />
              </Button>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  )
}
