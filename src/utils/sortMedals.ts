import type { OlympicMedals } from "@prisma/client";

export const sortMedals = (data: OlympicMedals[]): OlympicMedals[] => {
  return data.sort((a, b) => {
    if (b.gold_medals !== a.gold_medals) {
      return b.gold_medals - a.gold_medals;
    } else if (b.silver_medals !== a.silver_medals) {
      return b.silver_medals - a.silver_medals;
    } else {
      return b.bronze_medals - a.bronze_medals;
    }
  });
};
