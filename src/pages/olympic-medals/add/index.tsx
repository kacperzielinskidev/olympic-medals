import Head from "next/head";
import type { BreadcrumbItemType } from "../../../components/common/Breadcrumb";
import { Breadcrumb } from "../../../components/common/Breadcrumb";
import type { NextPageWithLayout } from "../../../components/layout/NextPageWithLayout";
import PublicLayout from "../../../components/layout/PublicLayout";
import OlympicMedalsAddForm from "../../../components/modules/OlympicModules/add/OlympicMedalsAddForm";

const OlympicMedalsAdd: NextPageWithLayout = () => {
  const breadcrumbItems: BreadcrumbItemType[] = [
    {
      url: `/olympic-medals`,
    },
    {
      label: "Add",
    },
  ];

  return (
    <>
      <Head>
        <title>Olympic Medals Add</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex h-full w-full  flex-col justify-start">
        <Breadcrumb items={breadcrumbItems} />

        <div className="px-auto mt-6 flex w-full flex-col rounded-lg ">
          <OlympicMedalsAddForm />
        </div>
      </main>
    </>
  );
};

export default OlympicMedalsAdd;

OlympicMedalsAdd.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;