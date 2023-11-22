# Logs

This directory contains logs from two runs:

One with the large header `x-header` included in the request, leading to Send-Q being full and another without the header, leading to a recovery for HTTP2 wrapper.

In the `wrapper-noheader.txt` we can see the following debug logs:

```NET 1: destroy
NET 1: close
NET 1: close handle
HTTP2 1: Http2Session <invalid>: socket error [read ETIMEDOUT]
HTTP2 1: Http2Session client: destroying
HTTP2 1: Http2Session client: start closing/destroying Error: read ETIMEDOUT
    at TLSWrap.onStreamRead (node:internal/stream_base_commons:217:20) {
  errno: -110,
  code: 'ETIMEDOUT',
  syscall: 'read'
}
```

and a while after that:

```
HTTP2 1: Http2Session client: start closing/destroying Error: connect ECONNREFUSED 143.244.220.150:3001
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1595:16) {
  errno: -111,
  code: 'ECONNREFUSED',
  syscall: 'connect',
  address: '143.244.220.150',
  port: 3001
}
```

as the previous socket was closed and a new one was opened. Eventually the connectivity is restored and the "Hello, World" starts streaming in once again.
