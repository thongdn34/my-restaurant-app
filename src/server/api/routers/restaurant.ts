import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const favoriteSchema = z.object({ id: z.string(), isFavorite: z.boolean() });

export const restaurantRouter = createTRPCRouter({
  getRestaurants: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({ orderBy: { rating: 'desc' } });
  }),
  addFavorite: publicProcedure
    .input(favoriteSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.post.update({
        where: { id: input.id },
        data: { isFavorite: input.isFavorite },
      });
    }),
});
