import arcjet, { shield, detectBot, tokenBucket} from "@arcjet/node";
import { ARCJET_KEY } from "./env.js";

const isDev = process.env.NODE_ENV === "development";

const aj = arcjet({

  key: ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),

     detectBot({
      mode: isDev ? "DRY_RUN" : "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),


    tokenBucket({
      mode: "LIVE",
      refillRate: 5, // Refill 5 tokens per interval
      interval: 10, // Refill every 10 seconds
      capacity: 10, // Bucket capacity of 10 tokens
    }),
  ],
});


export default aj;