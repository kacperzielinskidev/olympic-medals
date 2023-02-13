import Link from "next/link";
import { useState } from "react";
import Flag from "react-world-flags";
import { getCountryCode, countryCodeMap, sortMedals } from "../../../../utils";
import { api } from "../../../../utils/api";

import { SpinnerOverlay, Notification } from "../../../common";
import { Datatable, DatatableRow } from "../../../common/Datatable";

const headers = [
  {
    id: "name",
    label: "Country",
    colSize: 2,
  },
  {
    id: "gold_medals",
    label: "Gold Medals",
    colSize: 2,
  },
  {
    id: "silver_medals",
    label: "Silver Medals",
    colSize: 2,
  },
  {
    id: "bronze_medals",
    label: "Bronze Medals",
    colSize: 2,
  },
];

export const OlympicMedalsDatatable = () => {
  const { data, isLoading, isError } = api.olympicMedals.getAll.useQuery();

  if (isLoading) {
    return <SpinnerOverlay />;
  }

  if (isError) {
    Notification.error({
      message: "Something went wrong. Please try again later.",
    });
    return null;
  }

  const sortedMedals = sortMedals(data);

  return (
    <>
      <Datatable headers={headers}>
        {sortedMedals?.map(
          ({ id, name, bronze_medals, gold_medals, silver_medals }) => (
            <DatatableRow key={id} headers={headers}>
              <Link href={`/olympic-medals/${id}`} legacyBehavior>
                <a className="td cursor-pointer rounded-l-lg  text-base text-blue-500 hover:underline">
                  <div className="flex items-center justify-center gap-x-2">
                    <Flag
                      code={getCountryCode(name, countryCodeMap)}
                      className="h-4"
                    />
                    <p>{name}</p>
                  </div>
                </a>
              </Link>
              <div>{gold_medals ?? ""}</div>
              <div>{silver_medals ?? ""}</div>
              <div>{bronze_medals ?? ""}</div>
            </DatatableRow>
          )
        )}
      </Datatable>
    </>
  );
};
