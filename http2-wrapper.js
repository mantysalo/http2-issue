import http2 from "http2-wrapper";
import { setTimeout } from "node:timers/promises";
import crypto from "node:crypto";

const randomBytes = crypto.randomBytes(10000).toString("hex");
const timeout = 1000;
while (true) {
  (async () => {
    try {
      const request = await http2.auto(
        "https://http2-server:3001",
        {
          rejectUnauthorized: false,
          method: "GET",
          timeout,
          headers: {
            "x-header": randomBytes, // Comment this line out and the socket will fail as expected.
          },
        },
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
