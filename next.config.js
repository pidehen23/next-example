const withTM = require("next-transpile-modules")(["react-dev-inspector"]);
// const inspector = require("react-dev-inspector/plugins/webpack");
// const isDev = process.env.NODE_ENV !== "production";

module.exports = withTM({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 不会执行，config.devServer 始终为空
    // if (!isServer && isDev && config.devServer) {
    //   config.devServer = {
    //     ...{
    //       ...config.devServer,
    //       before: app => {
    //         app.use(inspector.launchEditorMiddleware);
    //       }
    //     },
    //     hot: true
    //   };
    // }
    return config;
  }
});
