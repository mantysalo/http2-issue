import { got } from "got";
import { setTimeout } from "node:timers/promises";

const timeout = 1000;
while (true) {
  (async () => {
    try {
      const request = await got("https://http2-server:3001", {
        https: {
          rejectUnauthorized: false,
        },
        retry: {
          limit: 1,
        },
        http2: true,
        method: "GET",
        timeout: { request: timeout },
      });
      console.log("got body:", request.body);
    } catch (error) {
      console.error("got error:", error.name);
    }
  })();
  await setTimeout(timeout + 100);
}
