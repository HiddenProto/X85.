self.__uv$config = {
  prefix: '/service/',
  bare: 'https://uv.tls.b64.captain/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/uv.handler.js',
  bundle: '/uv.bundle.js',
  config: '/uv.config.js',
  sw: '/uv.sw.js',
  client: '/uv.client.js'
};
