import { createSecureServer } from "http2";
import { readFileSync } from "fs";

const server = createSecureServer({
  key: readFileSync("cert/server.key"),
  cert: readFileSync("cert/server.cert"),
  allowHTTP1: true,
});

server.on("stream", (stream, headers) => {
  stream.respond({
    ":status": 200,
    "content-type": "text/plain",
  });
  stream.end("Hello, World!");
});

server.on("request", (req, res) => {
  // Separate handling for HTTP/1.1 requests
  if (req.httpVersion !== "2.0") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World via HTTP/1.1!");
  }
});

server.listen(3001, () => {
  console.log("HTTP/2 server is running on port 3001");
});
