const inspector = require("react-dev-inspector/plugins/webpack");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!dev && !isServer) {
      config.devServer = {
        ...{
          ...config.devServer,
          before: app => {
            app.use(inspector.launchEditorMiddleware);
          }
        },
        hot: true
      };
    }
    return config;
  }
};
