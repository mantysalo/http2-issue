import { got } from "got";
import { setTimeout } from "node:timers/promises";
import process from "node:process"

const retryLimit = Number(process.argv[2]) ?? 1

console.log("retryLimit:", retryLimit)

const timeout = 1000;
while (true) {
  (async () => {
    try {
      const request = await got("https://http2-server:3001", {
        https: {
          rejectUnauthorized: false,
        },
        retry: {
          limit: retryLimit,
        },
        http2: true,
        method: "GET",
        timeout: { request: timeout },
      });
      console.log(`got body (retry limit ${retryLimit}):`, request.body);
    } catch (error) {
      console.error(`got error (retry limit ${retryLimit}):`, error.name);
    }
  })();
  await setTimeout(timeout + 100);
}
