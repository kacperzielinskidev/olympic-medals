import type { OlympicMedals } from "@prisma/client";
import Link from "next/link";
import Flag from "react-world-flags";
import { api } from "../../../../utils/api";
import { countryCodeMap } from "../../../../utils/countries";
import { getCountryCode } from "../../../../utils/getCountryCode";
import { Datatable, DatatableRow } from "../../../common/Datatable";
import { SpinnerOverlay } from "../../../common/SpinnerOverlay";

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
  const { data, isLoading } = api.olympicMedals.getAll.useQuery();

  if (!data) {
    console.error("NO DATA HERE");
    return null;
  }

  const sortedMedals: OlympicMedals[] = data.sort((a, b) => {
    if (b.gold_medals !== a.gold_medals) {
      return b.gold_medals - a.gold_medals;
    } else if (b.silver_medals !== a.silver_medals) {
      return b.silver_medals - a.silver_medals;
    } else {
      return b.bronze_medals - a.bronze_medals;
    }
  });

  return (
    <>
      {isLoading ? (
        <SpinnerOverlay />
      ) : (
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
      )}
    </>
  );
};
