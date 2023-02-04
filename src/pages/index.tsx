import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data } = api.olympicMedals.getAll.useQuery();

  console.log(data);

  return <></>;
};

export default Home;
