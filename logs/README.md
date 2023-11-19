# Logs

This directory contains logs from a single reproduction.

Interesting timestamps:

Disconnection triggered at: 2023-11-19T21:42:40Z

ETIMEDOUT from `client` container: 2023-11-19T21:58:34.458789375Z

Reconnection triggered at: 2023-11-19T21:58:51Z

## Socket Statistic

Files `got-container-socket-stats.txt` and `http2-wrapper-container-socket-stats.txt` contain output of `ss -i` command during offline period and after connectivity was restored. Both files also contain notes of the localPort that the underlying socket was using at the time.

## Excerpts from the logs

### got.txt

```
2023-11-19T21:42:34.123526291Z Debugger listening on ws://0.0.0.0:9229/5da622ad-5551-47bd-b0cb-1eb54eb7e609
2023-11-19T21:42:34.123567041Z For help, see: https://nodejs.org/en/docs/inspector
2023-11-19T21:42:34.194680708Z NET 1: _read - n 16384 isConnecting? false hasHandle? true
2023-11-19T21:42:34.194983583Z NET 1: Socket._handle.readStart
2023-11-19T21:42:34.207639625Z TLS 1: client _init handle? true
2023-11-19T21:42:34.213105708Z TLS 1: client _init handle? true
2023-11-19T21:42:34.213362666Z NET 1: pipe false undefined
2023-11-19T21:42:34.214754375Z NET 1: connect: find host http2-server
2023-11-19T21:42:34.215317791Z NET 1: connect: dns options { family: undefined, hints: 32 }
2023-11-19T21:42:34.215334833Z NET 1: connect: autodetecting
2023-11-19T21:42:34.215556708Z TLS 1: client initRead handle? true buffered? 0
2023-11-19T21:42:34.215732791Z NET 1: _read - n 16384 isConnecting? false hasHandle? true
2023-11-19T21:42:34.215824375Z TLS 1: client initRead handle? true buffered? false
2023-11-19T21:42:34.215828583Z NET 1: _read - n 16384 isConnecting? true hasHandle? true
2023-11-19T21:42:34.215830250Z NET 1: _read wait for connection
2023-11-19T21:42:34.216200541Z NET 1: connect/multiple: only one address found, switching back to single connection
2023-11-19T21:42:34.216207333Z NET 1: connect: attempting to connect to 172.21.0.2:3001 (addressType: 4)
2023-11-19T21:42:34.216409000Z NET 1: afterConnect
2023-11-19T21:42:34.216414500Z TLS 1: client _start handle? true connecting? false requestOCSP? false
2023-11-19T21:42:34.216604875Z NET 1: _read - n 16384 isConnecting? false hasHandle? true
2023-11-19T21:42:34.216614958Z NET 1: Socket._handle.readStart
2023-11-19T21:42:34.219207583Z TLS 1: client onhandshakedone
2023-11-19T21:42:34.219215333Z TLS 1: client _finishInit handle? true alpn h2 servername http2-server
2023-11-19T21:42:34.219268208Z TLS 1: client emit secureConnect. rejectUnauthorized: false, authorizationError: DEPTH_ZERO_SELF_SIGNED_CERT
2023-11-19T21:42:34.220017375Z HTTP2 1: Http2Session client: setting up session handle
2023-11-19T21:42:34.220042083Z HTTP2 1: Http2Session client: sending settings
2023-11-19T21:42:34.220044583Z HTTP2 1: Http2Session client: submitting settings
2023-11-19T21:42:34.220311208Z HTTP2 1: Http2Session client: created
2023-11-19T21:42:34.220646666Z (node:1) Warning: Setting the NODE_DEBUG environment variable to 'http2' can expose sensitive data (such as passwords, tokens and authentication headers) in the resulting log.
2023-11-19T21:42:34.220654333Z (Use `node --trace-warnings ...` to show where the warning was created)
2023-11-19T21:42:34.221752416Z TLS 1: client emit session
2023-11-19T21:42:34.221828708Z TLS 1: client emit session
2023-11-19T21:42:34.221869625Z HTTP2 1: Http2Session client: new settings received
2023-11-19T21:42:34.222189625Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:34.222515083Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:34.222523875Z HTTP2 1: Http2Stream 1 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:34.222666541Z HTTP2 1: Http2Session client: settings received
2023-11-19T21:42:34.224702291Z HTTP2 1: Http2Stream 1 [Http2Session client]: headers received
2023-11-19T21:42:34.224711041Z HTTP2 1: Http2Stream 1 [Http2Session client]: emitting stream 'response' event
2023-11-19T21:42:34.225547833Z HTTP2 1: Http2Stream 1 [Http2Session client]: destroying stream
2023-11-19T21:42:34.226203416Z got body: Hello, World!
2023-11-19T21:42:35.217938917Z NET 1: _onTimeout
2023-11-19T21:42:35.313462459Z TLS 1: client _init handle? true
2023-11-19T21:42:35.313516000Z NET 1: pipe false undefined
2023-11-19T21:42:35.313522334Z NET 1: connect: find host http2-server
2023-11-19T21:42:35.313924209Z NET 1: connect: dns options { family: undefined, hints: 32 }
2023-11-19T21:42:35.313947375Z NET 1: connect: autodetecting
2023-11-19T21:42:35.314338834Z HTTP2 1: Http2Session client: created
2023-11-19T21:42:35.314359000Z TLS 1: client initRead handle? true buffered? false
2023-11-19T21:42:35.314364292Z NET 1: _read - n 16384 isConnecting? true hasHandle? true
2023-11-19T21:42:35.314368875Z NET 1: _read wait for connection
2023-11-19T21:42:35.314924459Z NET 1: connect/multiple: only one address found, switching back to single connection
2023-11-19T21:42:35.314942250Z NET 1: connect: attempting to connect to 172.21.0.2:3001 (addressType: 4)
2023-11-19T21:42:35.315344834Z NET 1: afterConnect
2023-11-19T21:42:35.315361959Z TLS 1: client _start handle? true connecting? false requestOCSP? false
2023-11-19T21:42:35.315909542Z NET 1: _read - n 16384 isConnecting? false hasHandle? true
2023-11-19T21:42:35.315947667Z NET 1: Socket._handle.readStart
2023-11-19T21:42:35.320923250Z TLS 1: client onhandshakedone
2023-11-19T21:42:35.320973209Z TLS 1: client _finishInit handle? true alpn h2 servername http2-server
2023-11-19T21:42:35.320978667Z TLS 1: client emit secureConnect. rejectUnauthorized: false, authorizationError: DEPTH_ZERO_SELF_SIGNED_CERT
2023-11-19T21:42:35.320983042Z HTTP2 1: Http2Session client: setting up session handle
2023-11-19T21:42:35.321055084Z HTTP2 1: Http2Session client: sending settings
2023-11-19T21:42:35.321069000Z HTTP2 1: Http2Session client: submitting settings
2023-11-19T21:42:35.322536292Z TLS 1: client emit session
2023-11-19T21:42:35.322581084Z TLS 1: client emit session
2023-11-19T21:42:35.322722292Z HTTP2 1: Http2Session client: new settings received
2023-11-19T21:42:35.322950500Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:35.323812584Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:35.323906125Z HTTP2 1: Http2Stream 1 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:35.324783500Z HTTP2 1: Http2Session client: settings received
2023-11-19T21:42:35.326502667Z HTTP2 1: Http2Stream 1 [Http2Session client]: headers received
2023-11-19T21:42:35.326533417Z HTTP2 1: Http2Stream 1 [Http2Session client]: emitting stream 'response' event
2023-11-19T21:42:35.327991625Z HTTP2 1: Http2Stream 1 [Http2Session client]: destroying stream
2023-11-19T21:42:35.329056209Z got body: Hello, World!
...
2023-11-19T21:42:40.829326628Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:40.829455295Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:40.829632878Z HTTP2 1: Http2Stream 11 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:41.832097045Z HTTP2 1: Http2Stream 11 [Http2Session client]: destroying stream
2023-11-19T21:42:41.931089878Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:41.931251878Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:41.931263587Z HTTP2 1: Http2Stream 13 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:42.939643171Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:42.939765254Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:42.939774171Z HTTP2 1: Http2Stream 15 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:42.939778504Z HTTP2 1: Http2Stream 13 [Http2Session client]: destroying stream
2023-11-19T21:42:43.041923671Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:43.042365462Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:43.042411962Z HTTP2 1: Http2Stream 17 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:43.938904963Z HTTP2 1: Http2Stream 15 [Http2Session client]: destroying stream
2023-11-19T21:42:43.941462463Z got error: TimeoutError
2023-11-19T21:42:43.964201254Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:43.964264463Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:43.964547213Z HTTP2 1: Http2Stream 19 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:44.046657338Z HTTP2 1: Http2Stream 17 [Http2Session client]: destroying stream
2023-11-19T21:42:44.144467088Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:44.144603504Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:44.144982588Z HTTP2 1: Http2Stream 21 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:44.970257713Z HTTP2 1: Http2Stream 19 [Http2Session client]: destroying stream
2023-11-19T21:42:44.972537755Z got error: TimeoutError
2023-11-19T21:42:45.050501338Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:45.050556630Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:45.050662672Z HTTP2 1: Http2Stream 23 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:45.150553630Z HTTP2 1: Http2Stream 21 [Http2Session client]: destroying stream
2023-11-19T21:42:45.249082380Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:45.249179672Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:45.249184380Z HTTP2 1: Http2Stream 25 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:46.052449130Z HTTP2 1: Http2Stream 23 [Http2Session client]: destroying stream
2023-11-19T21:42:46.053539505Z got error: TimeoutError
...
2023-11-19T22:04:03.685810680Z HTTP2 1: Http2Session client: initiating request
2023-11-19T22:04:03.685914847Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T22:04:03.685924472Z HTTP2 1: Http2Stream 4415 [Http2Session client]: shutting down writable on _final
2023-11-19T22:04:03.746338597Z HTTP2 1: Http2Stream 4413 [Http2Session client]: destroying stream
2023-11-19T22:04:03.847155597Z HTTP2 1: Http2Session client: initiating request
2023-11-19T22:04:03.847259055Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T22:04:03.847270847Z HTTP2 1: Http2Stream 4417 [Http2Session client]: shutting down writable on _final
2023-11-19T22:04:04.688393000Z HTTP2 1: Http2Stream 4415 [Http2Session client]: destroying stream
2023-11-19T22:04:04.690159958Z got error: TimeoutError
# System never recovers
```

### http2-wrapper.txt

```
2023-11-19T21:42:34.207354083Z Debugger listening on ws://0.0.0.0:9228/5c2e8162-6bb9-403c-9441-e8846e6ed788
2023-11-19T21:42:34.207377666Z For help, see: https://nodejs.org/en/docs/inspector
2023-11-19T21:42:34.255210000Z NET 1: _read - n 16384 isConnecting? false hasHandle? true
2023-11-19T21:42:34.255225791Z NET 1: Socket._handle.readStart
2023-11-19T21:42:34.268087625Z TLS 1: client _init handle? true
2023-11-19T21:42:34.272334000Z TLS 1: client _init handle? true
2023-11-19T21:42:34.272677000Z NET 1: pipe false undefined
2023-11-19T21:42:34.274643666Z NET 1: connect: find host http2-server
2023-11-19T21:42:34.275126916Z NET 1: connect: dns options { family: undefined, hints: 32 }
2023-11-19T21:42:34.275134583Z NET 1: connect: autodetecting
2023-11-19T21:42:34.275498208Z TLS 1: client initRead handle? true buffered? 0
2023-11-19T21:42:34.275635041Z NET 1: _read - n 16384 isConnecting? false hasHandle? true
2023-11-19T21:42:34.275640125Z TLS 1: client initRead handle? true buffered? false
2023-11-19T21:42:34.275641791Z NET 1: _read - n 16384 isConnecting? true hasHandle? true
2023-11-19T21:42:34.275650000Z NET 1: _read wait for connection
2023-11-19T21:42:34.275868416Z NET 1: connect/multiple: only one address found, switching back to single connection
2023-11-19T21:42:34.275873500Z NET 1: connect: attempting to connect to 172.21.0.2:3001 (addressType: 4)
2023-11-19T21:42:34.276075125Z NET 1: afterConnect
2023-11-19T21:42:34.276078958Z TLS 1: client _start handle? true connecting? false requestOCSP? false
2023-11-19T21:42:34.276228000Z NET 1: _read - n 16384 isConnecting? false hasHandle? true
2023-11-19T21:42:34.276232708Z NET 1: Socket._handle.readStart
2023-11-19T21:42:34.277685750Z TLS 1: client onhandshakedone
2023-11-19T21:42:34.277704208Z TLS 1: client _finishInit handle? true alpn h2 servername http2-server
2023-11-19T21:42:34.277706333Z TLS 1: client emit secureConnect. rejectUnauthorized: false, authorizationError: DEPTH_ZERO_SELF_SIGNED_CERT
2023-11-19T21:42:34.278238375Z HTTP2 1: Http2Session client: setting up session handle
2023-11-19T21:42:34.278257875Z HTTP2 1: Http2Session client: sending settings
2023-11-19T21:42:34.278264250Z HTTP2 1: Http2Session client: submitting settings
2023-11-19T21:42:34.278868000Z HTTP2 1: Http2Session client: created
2023-11-19T21:42:34.279307708Z (node:1) Warning: Setting the NODE_DEBUG environment variable to 'http2' can expose sensitive data (such as passwords, tokens and authentication headers) in the resulting log.
2023-11-19T21:42:34.279313625Z (Use `node --trace-warnings ...` to show where the warning was created)
2023-11-19T21:42:34.279831041Z TLS 1: client emit session
2023-11-19T21:42:34.279836666Z TLS 1: client emit session
2023-11-19T21:42:34.279861875Z HTTP2 1: Http2Session client: new settings received
2023-11-19T21:42:34.279988416Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:34.280170750Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:34.280191666Z HTTP2 1: Http2Stream 1 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:34.280472708Z HTTP2 1: Http2Session client: settings received
2023-11-19T21:42:34.281011916Z HTTP2 1: Http2Stream 1 [Http2Session client]: headers received
2023-11-19T21:42:34.281016791Z HTTP2 1: Http2Stream 1 [Http2Session client]: emitting stream 'response' event
2023-11-19T21:42:34.281498750Z HTTP2 1: Http2Stream 1 [Http2Session client]: destroying stream
2023-11-19T21:42:34.281503666Z http2-wrapper body: Hello, World!
2023-11-19T21:42:35.277315000Z NET 1: _onTimeout
2023-11-19T21:42:35.379871375Z TLS 1: client _init handle? true
2023-11-19T21:42:35.379984959Z NET 1: pipe false undefined
2023-11-19T21:42:35.379996250Z NET 1: connect: find host http2-server
2023-11-19T21:42:35.380305417Z NET 1: connect: dns options { family: undefined, hints: 32 }
2023-11-19T21:42:35.380336542Z NET 1: connect: autodetecting
2023-11-19T21:42:35.380997209Z HTTP2 1: Http2Session client: created
2023-11-19T21:42:35.381025542Z TLS 1: client initRead handle? true buffered? false
2023-11-19T21:42:35.381033000Z NET 1: _read - n 16384 isConnecting? true hasHandle? true
2023-11-19T21:42:35.381040125Z NET 1: _read wait for connection
2023-11-19T21:42:35.381886792Z NET 1: connect/multiple: only one address found, switching back to single connection
2023-11-19T21:42:35.381900375Z NET 1: connect: attempting to connect to 172.21.0.2:3001 (addressType: 4)
2023-11-19T21:42:35.382526209Z NET 1: afterConnect
2023-11-19T21:42:35.382611084Z TLS 1: client _start handle? true connecting? false requestOCSP? false
2023-11-19T21:42:35.383399334Z NET 1: _read - n 16384 isConnecting? false hasHandle? true
2023-11-19T21:42:35.383430250Z NET 1: Socket._handle.readStart
2023-11-19T21:42:35.389493250Z TLS 1: client onhandshakedone
2023-11-19T21:42:35.389542209Z TLS 1: client _finishInit handle? true alpn h2 servername http2-server
2023-11-19T21:42:35.389567875Z TLS 1: client emit secureConnect. rejectUnauthorized: false, authorizationError: DEPTH_ZERO_SELF_SIGNED_CERT
2023-11-19T21:42:35.389585750Z HTTP2 1: Http2Session client: setting up session handle
2023-11-19T21:42:35.389765292Z HTTP2 1: Http2Session client: sending settings
2023-11-19T21:42:35.389823000Z HTTP2 1: Http2Session client: submitting settings
2023-11-19T21:42:35.390975417Z TLS 1: client emit session
2023-11-19T21:42:35.391004834Z TLS 1: client emit session
2023-11-19T21:42:35.391137459Z HTTP2 1: Http2Session client: new settings received
2023-11-19T21:42:35.391530042Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:35.392348292Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:35.392428625Z HTTP2 1: Http2Stream 1 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:35.393393375Z HTTP2 1: Http2Session client: settings received
2023-11-19T21:42:35.394330667Z HTTP2 1: Http2Stream 1 [Http2Session client]: headers received
2023-11-19T21:42:35.394539459Z HTTP2 1: Http2Stream 1 [Http2Session client]: emitting stream 'response' event
2023-11-19T21:42:35.395406250Z HTTP2 1: Http2Stream 1 [Http2Session client]: destroying stream
2023-11-19T21:42:35.395413375Z http2-wrapper body: Hello, World!
...
2023-11-19T21:42:39.795094627Z HTTP2 1: Http2Stream 9 [Http2Session client]: destroying stream
2023-11-19T21:42:40.893541503Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:40.894202753Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:40.894226753Z HTTP2 1: Http2Stream 11 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:41.897164170Z http2-wrapper timeout
2023-11-19T21:42:41.996753253Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:41.996925670Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:41.996941420Z HTTP2 1: Http2Stream 13 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:43.000312379Z http2-wrapper timeout
2023-11-19T21:42:43.098554962Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:42:43.098940879Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:42:43.098961921Z HTTP2 1: Http2Stream 15 [Http2Session client]: shutting down writable on _final
2023-11-19T21:42:44.104687046Z http2-wrapper timeout
...
2023-11-19T21:58:33.029500180Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:58:33.029607388Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:58:33.029835430Z HTTP2 1: Http2Stream 1693 [Http2Session client]: shutting down writable on _final
2023-11-19T21:58:34.031955458Z http2-wrapper timeout
2023-11-19T21:58:34.129613250Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:58:34.129645916Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:58:34.129648875Z HTTP2 1: Http2Stream 1695 [Http2Session client]: shutting down writable on _final
2023-11-19T21:58:34.458237625Z NET 1: destroy
2023-11-19T21:58:34.458319291Z NET 1: close
2023-11-19T21:58:34.458327541Z NET 1: close handle
2023-11-19T21:58:34.458789375Z HTTP2 1: Http2Session <invalid>: socket error [read ETIMEDOUT]
2023-11-19T21:58:34.458844666Z HTTP2 1: Http2Session client: destroying
2023-11-19T21:58:34.460349833Z HTTP2 1: Http2Session client: start closing/destroying Error: read ETIMEDOUT
2023-11-19T21:58:34.460376916Z     at TLSWrap.onStreamRead (node:internal/stream_base_commons:217:20)
2023-11-19T21:58:34.460383208Z     at TLSWrap.callbackTrampoline (node:internal/async_hooks:130:17) {
2023-11-19T21:58:34.460387750Z   errno: -110,
2023-11-19T21:58:34.460457791Z   code: 'ETIMEDOUT',
2023-11-19T21:58:34.460463333Z   syscall: 'read'
2023-11-19T21:58:34.460467375Z }
2023-11-19T21:58:34.461983541Z HTTP2 1: Http2Stream 11 [Http2Session client]: destroying stream
2023-11-19T21:58:34.464002833Z HTTP2 1: Http2Stream 13 [Http2Session client]: destroying stream
2023-11-19T21:58:34.464058708Z HTTP2 1: Http2Stream 15 [Http2Session client]: destroying stream
2023-11-19T21:58:34.465508333Z HTTP2 1: Http2Stream 17 [Http2Session client]: destroying stream
...
2023-11-19T21:58:34.529020000Z HTTP2 1: Http2Stream 1695 [Http2Session client]: destroying stream
2023-11-19T21:58:34.555720083Z Error: read ETIMEDOUT
2023-11-19T21:58:34.555735541Z     at TLSWrap.onStreamRead (node:internal/stream_base_commons:217:20)
2023-11-19T21:58:34.555737208Z     at TLSWrap.callbackTrampoline (node:internal/async_hooks:130:17) {
2023-11-19T21:58:34.555738875Z   errno: -110,
2023-11-19T21:58:34.555740583Z   code: 'ETIMEDOUT',
2023-11-19T21:58:34.555742125Z   syscall: 'read'
2023-11-19T21:58:34.555743541Z }
2023-11-19T21:58:34.555852875Z Error: read ETIMEDOUT
2023-11-19T21:58:34.555862625Z     at TLSWrap.onStreamRead (node:internal/stream_base_commons:217:20)
2023-11-19T21:58:34.555864375Z     at TLSWrap.callbackTrampoline (node:internal/async_hooks:130:17) {
2023-11-19T21:58:34.555866166Z   errno: -110,
2023-11-19T21:58:34.555867708Z   code: 'ETIMEDOUT',
2023-11-19T21:58:34.555869166Z   syscall: 'read'
2023-11-19T21:58:34.555870583Z }
...
2023-11-19T21:58:34.654634625Z NET 1: emit close
2023-11-19T21:58:34.654688792Z HTTP2 1: Http2Session client: socket closed
2023-11-19T21:58:35.237266750Z TLS 1: client _init handle? true
2023-11-19T21:58:35.238482375Z NET 1: pipe false undefined
2023-11-19T21:58:35.238523583Z NET 1: connect: find host http2-server
2023-11-19T21:58:35.238714875Z NET 1: connect: dns options { family: undefined, hints: 32 }
2023-11-19T21:58:35.238734500Z NET 1: connect: autodetecting
2023-11-19T21:58:35.240184208Z HTTP2 1: Http2Session client: created
2023-11-19T21:58:35.240329792Z TLS 1: client initRead handle? true buffered? false
2023-11-19T21:58:35.240417458Z NET 1: _read - n 16384 isConnecting? true hasHandle? true
2023-11-19T21:58:35.240422542Z NET 1: _read wait for connection
2023-11-19T21:58:35.364287500Z NET 1: connect/multiple: only one address found, switching back to single connection
2023-11-19T21:58:35.364354042Z NET 1: connect: attempting to connect to 143.244.220.150:3001 (addressType: 4)
2023-11-19T21:59:50.371938674Z NET 1: afterConnect
2023-11-19T21:59:50.372832716Z NET 1: destroy
2023-11-19T21:59:50.372868841Z NET 1: close
2023-11-19T21:59:50.372872966Z NET 1: close handle
2023-11-19T21:59:50.373256007Z HTTP2 1: Http2Session <invalid>: socket error [connect ECONNREFUSED 143.244.220.150:3001]
2023-11-19T21:59:50.373271716Z HTTP2 1: Http2Session client: destroying
2023-11-19T21:59:50.373554049Z HTTP2 1: Http2Session client: start closing/destroying Error: connect ECONNREFUSED 143.244.220.150:3001
2023-11-19T21:59:50.373569132Z     at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1595:16)
2023-11-19T21:59:50.373572591Z     at TCPConnectWrap.callbackTrampoline (node:internal/async_hooks:130:17) {
2023-11-19T21:59:50.373576049Z   errno: -111,
2023-11-19T21:59:50.373579007Z   code: 'ECONNREFUSED',
2023-11-19T21:59:50.373583299Z   syscall: 'connect',
2023-11-19T21:59:50.373586466Z   address: '143.244.220.150',
2023-11-19T21:59:50.373589424Z   port: 3001
2023-11-19T21:59:50.373592299Z }
2023-11-19T21:59:50.373595424Z HTTP2 1: Http2Session client: finishSessionClose
2023-11-19T21:59:50.389795341Z Error: connect ECONNREFUSED 143.244.220.150:3001
2023-11-19T21:59:50.389864591Z     at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1595:16)
2023-11-19T21:59:50.389869591Z     at TCPConnectWrap.callbackTrampoline (node:internal/async_hooks:130:17) {
2023-11-19T21:59:50.389873049Z   errno: -111,
2023-11-19T21:59:50.389876007Z   code: 'ECONNREFUSED',
2023-11-19T21:59:50.389878882Z   syscall: 'connect',
2023-11-19T21:59:50.389881716Z   address: '143.244.220.150',
2023-11-19T21:59:50.389884632Z   port: 3001
2023-11-19T21:59:50.389887507Z }
...
2023-11-19T21:59:50.403901882Z Error: connect ECONNREFUSED 143.244.220.150:3001
2023-11-19T21:59:50.403904382Z     at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1595:16)
2023-11-19T21:59:50.403906841Z     at TCPConnectWrap.callbackTrampoline (node:internal/async_hooks:130:17) {
2023-11-19T21:59:50.403909341Z   errno: -111,
2023-11-19T21:59:50.403911632Z   code: 'ECONNREFUSED',
2023-11-19T21:59:50.403913966Z   syscall: 'connect',
2023-11-19T21:59:50.403916341Z   address: '143.244.220.150',
2023-11-19T21:59:50.403918716Z   port: 3001
2023-11-19T21:59:50.403922716Z }
2023-11-19T21:59:50.403925507Z NET 1: emit close
2023-11-19T21:59:51.389882383Z TLS 1: client _init handle? true
2023-11-19T21:59:51.390192674Z NET 1: pipe false undefined
2023-11-19T21:59:51.390221966Z NET 1: connect: find host http2-server
2023-11-19T21:59:51.390227133Z NET 1: connect: dns options { family: undefined, hints: 32 }
2023-11-19T21:59:51.390231549Z NET 1: connect: autodetecting
2023-11-19T21:59:51.391896216Z HTTP2 1: Http2Session client: created
2023-11-19T21:59:51.391947008Z TLS 1: client initRead handle? true buffered? false
2023-11-19T21:59:51.391951216Z NET 1: _read - n 16384 isConnecting? true hasHandle? true
2023-11-19T21:59:51.391954633Z NET 1: _read wait for connection
2023-11-19T21:59:51.393391799Z NET 1: connect/multiple: only one address found, switching back to single connection
2023-11-19T21:59:51.393483299Z NET 1: connect: attempting to connect to 172.21.0.2:3001 (addressType: 4)
2023-11-19T21:59:51.395945049Z NET 1: afterConnect
2023-11-19T21:59:51.396019424Z TLS 1: client _start handle? true connecting? false requestOCSP? false
2023-11-19T21:59:51.396023758Z NET 1: _read - n 16384 isConnecting? false hasHandle? true
2023-11-19T21:59:51.396027299Z NET 1: Socket._handle.readStart
2023-11-19T21:59:51.401519591Z TLS 1: client onhandshakedone
2023-11-19T21:59:51.401564841Z TLS 1: client _finishInit handle? true alpn h2 servername http2-server
2023-11-19T21:59:51.401654591Z TLS 1: client emit secureConnect. rejectUnauthorized: false, authorizationError: DEPTH_ZERO_SELF_SIGNED_CERT
2023-11-19T21:59:51.401782758Z HTTP2 1: Http2Session client: setting up session handle
2023-11-19T21:59:51.401946174Z HTTP2 1: Http2Session client: sending settings
2023-11-19T21:59:51.401964758Z HTTP2 1: Http2Session client: submitting settings
2023-11-19T21:59:51.403484299Z TLS 1: client emit session
2023-11-19T21:59:51.403521758Z TLS 1: client emit session
2023-11-19T21:59:51.403531174Z HTTP2 1: Http2Session client: new settings received
2023-11-19T21:59:51.403962258Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:59:51.404290841Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:59:51.404530799Z HTTP2 1: Http2Stream 1 [Http2Session client]: shutting down writable on _final
2023-11-19T21:59:51.404974466Z HTTP2 1: Http2Session client: settings received
2023-11-19T21:59:51.406658716Z HTTP2 1: Http2Stream 1 [Http2Session client]: headers received
2023-11-19T21:59:51.406696799Z HTTP2 1: Http2Stream 1 [Http2Session client]: emitting stream 'response' event
2023-11-19T21:59:51.407978299Z http2-wrapper body: Hello, World!
2023-11-19T21:59:51.408114549Z HTTP2 1: Http2Stream 1 [Http2Session client]: destroying stream
2023-11-19T21:59:52.489572300Z HTTP2 1: Http2Session client: initiating request
2023-11-19T21:59:52.490211300Z HTTP2 1: Http2Session client: connected, initializing request
2023-11-19T21:59:52.490875550Z HTTP2 1: Http2Stream 3 [Http2Session client]: shutting down writable on _final
2023-11-19T21:59:52.494268467Z HTTP2 1: Http2Stream 3 [Http2Session client]: headers received
2023-11-19T21:59:52.494356842Z HTTP2 1: Http2Stream 3 [Http2Session client]: emitting stream 'response' event
2023-11-19T21:59:52.495832092Z http2-wrapper body: Hello, World!
# System recovered
```
