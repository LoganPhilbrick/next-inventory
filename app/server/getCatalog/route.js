"use server";
import { Client } from "square";

const { catalogApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: "sandbox",
});

export async function getCatalog() {
  try {
    const { result } = await catalogApi.listCatalog();

    return result.objects;
  } catch (error) {
    console.log(error);
  }
}
