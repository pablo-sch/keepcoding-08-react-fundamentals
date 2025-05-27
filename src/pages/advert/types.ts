/* export interface Advert {
  id: number;
  name: string;
  price: number;
  sale: boolean;
  tags: string[];
  photo?: string;
} */

import { z } from "zod";

const UserSchema = z.object({
  name: z.number(),
  username: z.string(),
});

//export type User = z.infer<typeof UserSchema>;

export const AdvertSchema = z.object({
  id: z.number(),
  //userId: z.number(),
  name: z.string(),
  price: z.number(),
  sale: z.boolean(),
  tags: z.array(z.string()),
  photo: z.string().optional(),
  //likes: z.array(z.unknown()),
  //user: UserSchema,
});

export type Advert = z.infer<typeof AdvertSchema>;
