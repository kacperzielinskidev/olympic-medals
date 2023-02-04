import Head from "next/head";
import type { NextPageWithLayout } from "../components/layout/NextPageWithLayout";
import PublicLayout from "../components/layout/PublicLayout";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>Olympic Medals</Head>
    </>
  );
};

export default Home;

Home.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;
