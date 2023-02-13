import Head from "next/head";

import { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPageWithLayout } from "../components/layout";
import { PublicLayout } from "../components/layout";

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  useEffect(() => {
    void router.push("/olympic-medals");
  }, [router]);

  return (
    <>
      <Head>Olympic Medals</Head>
    </>
  );
};

export default Home;

Home.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;
