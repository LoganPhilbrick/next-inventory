"use server";
import { Client } from "square";
const crypto = require("crypto");

const { catalogApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: "sandbox",
});

export async function addCatalogItem(name, amount) {
  try {
    const response = await catalogApi.upsertCatalogObject({
      idempotencyKey: crypto.randomUUID(),
      object: {
        type: "ITEM",
        id: `#${name}Parent`,
        itemData: {
          name: name,
          variations: [
            {
              type: "ITEM_VARIATION",
              id: `#${name}`,
              itemData: {
                name: name,
                productType: "FOOD_AND_BEV",
              },
              itemVariationData: {
                pricingType: "FIXED_PRICING",
                priceMoney: {
                  amount: amount,
                  currency: "USD",
                },
              },
            },
          ],
          productType: "FOOD_AND_BEV",
        },
      },
    });

    console.log(response.result);
  } catch (error) {
    console.log(error);
  }
}
