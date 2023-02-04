import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const olympicMedalSchema = z.object({
  name: z.string(),
  medals: z.number(),
  gold_medals: z.number(),
  silver_medals: z.number(),
  bronze_medals: z.number(),
});

export const olympicMedalsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.olympicMedals.findMany();
  }),
  getById: publicProcedure
    .input(z.object({ olympicMedalId: z.string() }))
    .query(async ({ input, ctx }) => {
      const olympicMedal = await ctx.prisma.olympicMedals.findFirst({
        where: {
          id: input.olympicMedalId,
        },
      });

      if (!olympicMedal) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return olympicMedal;
    }),
  create: publicProcedure
    .input(olympicMedalSchema)
    .mutation(async ({ input, ctx }) => {
      const olympicMedal = await ctx.prisma.olympicMedals.create({
        data: {
          name: input.name,
          gold_medals: input.gold_medals,
          silver_medals: input.silver_medals,
          bronze_medals: input.bronze_medals,
        },
      });

      return olympicMedal;
    }),
  update: publicProcedure
    .input(
      z.object({
        olympicMedalId: z.string(),
        name: z.string(),
        medals: z.number().nullish(),
        gold_medals: z.number(),
        silver_medals: z.number(),
        bronze_medals: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const olympicMedal = await ctx.prisma.olympicMedals.update({
        where: {
          id: input.olympicMedalId,
        },
        data: {
          name: input.name,
          gold_medals: input.gold_medals,
          silver_medals: input.silver_medals,
          bronze_medals: input.bronze_medals,
        },
      });

      return olympicMedal;
    }),
  delete: publicProcedure
    .input(
      z.object({
        olympicMedalId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (!input.olympicMedalId)
        throw new TRPCError({ code: "NOT_FOUND", message: "NOT_FOUND" });

      const deleteOlympicMedal = await ctx.prisma.olympicMedals.delete({
        where: {
          id: input.olympicMedalId,
        },
      });

      return deleteOlympicMedal;
    }),
});
