import { z } from "zod";

export const olympicMedalSchema = z.object({
  name: z.string(),
  gold_medals: z.number(),
  silver_medals: z.number(),
  bronze_medals: z.number(),
});
