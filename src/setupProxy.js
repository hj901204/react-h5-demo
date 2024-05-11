// https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
// https://github.com/chimurai/http-proxy-middleware


const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: `http://localhost:3003`,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            },
            onProxyReq(proxyReq, req, res) {
                // add custom header to request
                // proxyReq.setHeader('Authorization', 'xxxxx');
                // console.log(req)
                // or log the req
            }
        })
    );
};
