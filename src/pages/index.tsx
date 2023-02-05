import Head from "next/head";
import type { NextPageWithLayout } from "../components/layout/NextPageWithLayout";
import PublicLayout from "../components/layout/PublicLayout";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
