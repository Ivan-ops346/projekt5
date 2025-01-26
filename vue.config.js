const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    historyApiFallback: true,
    publicPath: process.env.NODE_ENV === 'production' ? '/ime-aplikacije/' : '/',
  },
};
