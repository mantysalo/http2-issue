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

## Extracting logs

To extract logs from the containers, you can run the following commands:

`npm run logs`

I have included logs from a single reproduction run in the `logs` directory as well as logs where the socket is destroyed as expected.
