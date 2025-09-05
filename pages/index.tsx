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

const socialLinks: {
  icon: JSX.Element;
  className: string;
  href: string;
}[] = [
  {
    icon: <BsInstagram size="1.5em" />,
    className: styles['ig-icon'],
    href: "https://www.instagram.com/ashewx/"
  },
  {
    icon: <BsTwitterX size="1.5em" />,
    className: styles['x-icon'],
    href: "https://x.com/ashewx"
  },
  {
    icon: <BsFacebook size="1.5em" />,
    className: styles['fb-icon'],
    href: "https://www.facebook.com/ashewx"
  },
  {
    icon: <BsGithub size="1.5em" />,
    className: styles['gh-icon'],
    href: "https://github.com/ashewx"
  },
  {
    icon: <BsLinkedin size="1.5em" />,
    className: styles['li-icon'],
    href: "https://www.linkedin.com/in/nguyen-hoang-andrew/"
  }
];

const Home: React.FC = () => {
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
              {socialLinks.map(({ icon, className, href }, idx) => (
                <Button
                  key={idx}
                  size="lg"
                  radius="full"
                  isIconOnly
                  variant="shadow"
                  className={className}
                  href={href}
                  as={Link}
                  target="_blank"
                >
                  {icon}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  )
}

export default Home;