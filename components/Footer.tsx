import styles from './Footer.module.css';
import { Image } from '@heroui/react';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Image src="/android-chrome-512x512.png" alt="AN Logo" className={styles.logo} />
    </footer>
  );
};

export default Footer;