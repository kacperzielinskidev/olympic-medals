import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import type { OlympicMedalType } from "../../../../types/olympicMedalType";
import { api } from "../../../../utils/api";
import { InputNumber } from "../../../common/Form/InputNumber";
import InputSubmit from "../../../common/Form/InputSubmit";
import { InputText } from "../../../common/Form/InputText";
import { olympicMedalSchema } from "../add/schema/olympicMedalSchema";
import { Notification } from "../../../common/Notification";
import { Card } from "../../../common/Card";

const OlympicMedalsEditForm = () => {
  const router = useRouter();
  const { olympicMedalId } = router.query;

  const { data } = api.olympicMedals.getById.useQuery({
    olympicMedalId: olympicMedalId as string,
  });

  const initial = {
    name: data?.name,
    gold_medals: data?.gold_medals,
    silver_medals: data?.silver_medals,
    bronze_medals: data?.bronze_medals,
  };

  const methods = useForm<OlympicMedalType>({
    resolver: zodResolver(olympicMedalSchema),
    defaultValues: { ...data },
  });

  useEffect(() => {
    if (initial) {
      methods.reset({ ...initial });
    }
  }, [data]);

  const onSuccess = async () => {
    Notification.success({ message: "Olympic Medal edit successfull" });
    await router.push(`/olympic-medals/${olympicMedalId as string}`);
  };

  const editOlympicMedalMutation = api.olympicMedals.update.useMutation({
    onSuccess,
    onError(error) {
      Notification.error({ message: error?.message });
    },
  });

  const onSubmit = (data: OlympicMedalType) => {
    editOlympicMedalMutation.mutate({
      ...data,
      olympicMedalId: olympicMedalId as string,
    });
  };

  return (
    <Card>
      <FormProvider {...methods}>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={methods.handleSubmit(onSubmit)}
          className="relative flex flex-col gap-4"
        >
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
              label="Number of bronze Medals"
              name="bronze_medals"
              placeholder="Number of Bronze Medals"
              size="md"
            />
          </div>

          <div className="flex w-full justify-end">
            <InputSubmit custom="primary">Save</InputSubmit>
          </div>
        </form>
      </FormProvider>
    </Card>
  );
};

export default OlympicMedalsEditForm;
