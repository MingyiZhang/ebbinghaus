const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/login',
    createProxyMiddleware({
      target: "https://github.com",
      changeOrigin: true
    })
  );
  app.use(
    '/session',
    createProxyMiddleware({
      target: "https://github.com",
      changeOrigin: true
    })
  );
  app.use(
    '/api/problems/algorithms/',
    createProxyMiddleware({
      target: "https://leetcode.com",
      changeOrigin: true
    })
  );
}
