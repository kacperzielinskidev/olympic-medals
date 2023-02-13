import { useRouter } from "next/router";
import Flag from "react-world-flags";
import Image from "next/image";
import goldMedalImage from "../../../../../public/gold-medal.png";
import silverMedalImage from "../../../../../public/silver-medal.png";
import bronzeMedalImage from "../../../../../public/bronze-medal.png";
import { api } from "../../../../utils/api";

import { Card } from "../../../common/Card";
import { getCountryCode, countryCodeMap } from "../../../../utils";

export const OlympicMedalDetails = () => {
  const router = useRouter();
  const { olympicMedalId } = router.query;

  const { data } = api.olympicMedals.getById.useQuery({
    olympicMedalId: olympicMedalId as string,
  });

  return (
    <Card className="mt-4">
      <div className="ml-3 flex items-center gap-x-2 border-b">
        <Flag
          code={getCountryCode(data ? data?.name : "", countryCodeMap)}
          className="h-4"
        />
        <h1 className="text-xl font-medium">{data?.name}</h1>
      </div>
      <div className="mt-5 flex flex-col justify-start gap-y-2">
        <div className="flex items-end gap-x-2">
          <Image src={goldMedalImage} alt="Gold Medal" />
          <span>{data?.gold_medals}</span>
        </div>
        <div className="flex items-end gap-x-2">
          <Image src={silverMedalImage} alt="Gold Medal" />
          <span>{data?.silver_medals}</span>
        </div>
        <div className="flex items-end gap-x-2">
          <Image src={bronzeMedalImage} alt="Gold Medal" />
          <span>{data?.bronze_medals}</span>
        </div>
      </div>
    </Card>
  );
};
