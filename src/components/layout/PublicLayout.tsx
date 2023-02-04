import Head from "next/head";
import { Header } from "../common/Header";
import Sidebar from "../common/Sidebar";

export interface IPublicLayout {
  children: React.ReactNode;
}

const PublicLayout: React.FC<IPublicLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>T3 app</title>
      </Head>
      <div className="relative flex min-h-screen flex-col items-stretch">
        <Header />
        <Sidebar />
        <main className="mx-auto mb-20 grid w-full max-w-[1700px] gap-4 px-8 pt-[90px]">
          <div className="ml-[250px]">{children}</div>
        </main>
      </div>
    </>
  );
};

export default PublicLayout;
