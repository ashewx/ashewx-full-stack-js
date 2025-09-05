import Head from 'next/head';
import AppLayout from '@components/AppLayout';

const Card: React.FC = () => {
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
  );
};

export default Card;