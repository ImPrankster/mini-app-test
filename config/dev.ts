module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  mini: {},
  h5: {
    router: {
      mode: "browser",
      customRoutes: {
        "/pages/index/index": "/",
        "/pages/landing/index": "/landing",
      },
    },
  },
};
