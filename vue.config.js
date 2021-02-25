module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  // proxy: {
  //   "/api": {
  //     target: "https://mallapi.duyiedu.com",
  //     changeOrigin: true,
  //     pathRewrite : {
  //       '^/api' : ''
  //     }
  //   }
  // }
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-sdp-app/'
    : '/',
};
