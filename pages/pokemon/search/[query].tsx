import Head from 'next/head';
import AppLayout from '@components/AppLayout';

const SearchCard: React.FC = () => {
  return (
    <>
      <Head>
        <title>SearchCard</title>
      </Head>

      <AppLayout>
        <div>
          SearchCard here
        </div>
      </AppLayout>
    </>
  );
};

export default SearchCard;