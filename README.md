# Reproduction of a TCP socket issue when using HTTP2

This repo contains a reproduction of an issue that happens when a TCP socket times out.

## Requirements:

- Docker & Docker compose
- Optional: VSCode for using the `launch.json` for running a debugger inside the docker containers.

## How to run

```bash
docker compose up --build
```

To simulate a disconnect, run the following command:

`docker network disconnect http2-issue_public http2-issue-client-1 && docker network disconnect http2-issue_public http2-issue-got-client-1 && date -u`

The issue happens consistently after ~16 minutes of going offline.

To reconnect, run the following command:

`docker network connect http2-issue_public http2-issue-client-1 && docker network connect http2-issue_public http2-issue-got-client-1 && date -u`

You will observe that requests originating from `got-client` keep timing out, while the `http2-wrapper` client recovers from the TCP socket timeout.

If you set `options.retry.limit` to `0` in `got-client.js` you will observe that both clients recover from the TCP socket timeout.

## Extracting logs

To extract logs from the containers, you can run the following commands:

`docker compose logs --no-log-prefix --timestamps got-client > got.txt`
`docker compose logs --no-log-prefix --timestamps client > http2-wrapper.txt`

I have included logs from a single reproduction run in the `logs` directory.
