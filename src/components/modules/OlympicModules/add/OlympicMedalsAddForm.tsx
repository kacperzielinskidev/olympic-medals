import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Notification } from "../../../common/Notification";
import { Card } from "../../../common/Card";
import { olympicMedalSchema } from "./schema/olympicMedalSchema";
import { Tooltip } from "@mantine/core";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { InputText, InputNumber, InputSubmit } from "../../../common/Form";
import { api } from "../../../../utils";

type OlympicMedalType = {
  name: string;
  medals: number;
  gold_medals: number;
  silver_medals: number;
  bronze_medals: number;
};

export const OlympicMedalsAddForm = () => {
  const router = useRouter();

  const methods = useForm<OlympicMedalType>({
    resolver: zodResolver(olympicMedalSchema),
  });

  const addOlympicMedalMutation = api.olympicMedals.create.useMutation();

  const onSubmit = async (data: OlympicMedalType) => {
    try {
      addOlympicMedalMutation.mutate({ ...data });
      Notification.success({ message: "Country addedd successfully" });
      await router.push("/olympic-medals");
    } catch (error) {
      Notification.error({ message: "Something went wrong" });
    }
  };

  return (
    <Card>
      <FormProvider {...methods}>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={methods.handleSubmit(onSubmit)}
          className="relative flex flex-col gap-4"
        >
          <Tooltip label="Country names should be in English. For example, Poland, Germany, Brazil">
            <div
              className={`flex w-max cursor-help items-center justify-start text-primary`}
            >
              <AiOutlineInfoCircle size={24} />
            </div>
          </Tooltip>
          <div className="grid grid-cols-2 gap-x-2">
            <InputText
              label="Name of Country"
              name="name"
              placeholder="Name of country"
              size="md"
            />

            <InputNumber
              label="Number of Gold Medals"
              name="gold_medals"
              placeholder="Number of Gold Medals"
              size="md"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-2">
            <InputNumber
              label="Number of Silver Medals"
              name="silver_medals"
              placeholder="Number of Silver Medals"
              size="md"
            />

            <InputNumber
              label="Number of Bronze Medals"
              name="bronze_medals"
              placeholder="Number of Bronze Medals"
              size="md"
            />
          </div>

          <div className="flex w-full justify-end">
            <InputSubmit custom="primary">Add</InputSubmit>
          </div>
        </form>
      </FormProvider>
    </Card>
  );
};
