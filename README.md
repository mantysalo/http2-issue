# Reproduction of a TCP socket issue when using HTTP2

This repo contains a reproduction of an issue that happens when a TCP socket times out.

## Requirements:

- Docker & Docker compose
- Optional: VSCode for using the `launch.json` for running a debugger inside the docker containers.

## How to run

```bash
npm start
```

To simulate a disconnect, run the following command:

`npm run disconnect`

Requests will begin timing out. Wait for 1 minute or so.

To reconnect, run the following command:

`npm run connect`

You will observe that neither the node-http2.js or the http2-wrapper.js clients recover from this, and keep timing out indefinitely.

If you remove the large header (`x-header`) from the requests, you will see that both clients error out once the TCP socket is terminated, and the http2-wrapper recovers from the network outage. (node-http2 client doesn't because the client in only created once and there is no recreation logic).

## Extracting logs

To extract logs from the containers, you can run the following commands:

`npm run logs:node`
`npm run logs:wrapper`

I have included logs from a single reproduction run in the `logs` directory.
