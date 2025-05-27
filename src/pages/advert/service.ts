import { client } from "../../api/client";
//import type { Advert } from "./types";
import { AdvertSchema, type Advert } from "./types";

const ADVERTS_URL = "/api/adverts";

export const getAdverts = async () /* : Promise<Advert[]> */ => {
  const response = await client.get</* Advert[] */ unknown>(ADVERTS_URL);

  /*   const parsedData = AdvertSchema.array().safeParse(response.data);
  if (parsedData.success) {
    return parsedData.data;
  } */

  return AdvertSchema.array().parse(response.data);
  /*return response.data;*/
};

export const getAdvert = async (id: string): Promise<Advert> => {
  const response = await client.get<Advert>(`${ADVERTS_URL}/${id}`);
  return response.data;
};

export const createAdvert = async (advert: Omit<Advert, "id">): Promise<Advert> => {
  const response = await client.post<Advert>("/api/adverts", advert);
  return response.data;
};
