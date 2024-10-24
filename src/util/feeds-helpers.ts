import z from "zod";

/**
 * These definitions are generated with `zod`, a parsing library that we
 * apply liberally throughout our tooling at Transit.
 *
 * If you're familiar with its idioms, great! If not, their documentation is pretty awesome.
 *
 * https://zod.dev/
 *
 * For the purposes of this exercise, you'll probably want to take a look at the
 * `parse` or `safeParse` functions.
 */

export const feedParser = z.object({
  feed_id: z.number(),
  feed_code: z.string(),
  feed_name: z.string(),
  bounds: z
    .object({
      min_lat: z.number().nullable(),
      min_lon: z.number().nullable(),
      max_lat: z.number().nullable(),
      max_lon: z.number().nullable(),
    })
    .optional(),
  feed_location: z.string().nullable(),
});

export type Feed = z.infer<typeof feedParser>;

export const feedsResponse = z.object({
  feeds: z.array(feedParser),
});

export type FeedsResponse = z.infer<typeof feedsResponse>;
