import http2 from "http2-wrapper";
import { setTimeout } from "node:timers/promises";

const timeout = 1000;
while (true) {
  (async () => {
    try {
      const request = await http2.auto(
        "https://http2-server:3001",
        { rejectUnauthorized: false, method: "GET", timeout },
        (response) => {
          const body = [];
          response.on("data", (chunk) => body.push(chunk));
          response.on("end", () => {
            console.log("http2-wrapper body:", Buffer.concat(body).toString());
          });
        }
      );

      request.on("error", console.error);
      request.on("timeout", () => {
        console.error("http2-wrapper timeout");
      });
      request.end();
    } catch (error) {
      console.error(error);
    }
  })();
  await setTimeout(timeout + 100);
}
