import http2 from "node:http2";
import { setTimeout } from "node:timers/promises";
import crypto from "node:crypto";

const client = http2.connect("https://http2-server:3001", { rejectUnauthorized: false });
const timeout = 1000;

client.socket.on("error", (err) => console.error("Socket error:", err));
client.socket.on("close", () => console.log("Socket closed"));

const randomBytes = crypto.randomBytes(10000).toString("hex");
function http2Request(timeoutMs) {
  return new Promise((resolve, reject) => {
    client.setTimeout(timeoutMs, () => {
      console.error("http2 timeout");
      reject(new Error("http2 timeout"));
    });
    const request = client.request({
      ":method": "GET",
      ":path": "/",
      "x-header": randomBytes, // Comment this line out and the socket will fail as expected
    });

    let data = "";

    request.on("data", (chunk) => {
      data += chunk.toString();
    });

    request.on("end", () => {
      client.setTimeout(0);
      resolve(data);
    });

    request.on("error", (err) => {
      reject(err);
    });

    request.end();
  });
}

while (true) {
  http2Request(timeout)
    .then((data) => console.log("node http2 body:", data))
    .catch((error) => console.error("node http2 error:", error));
  await setTimeout(timeout + 100);
}
