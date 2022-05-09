const config = {
  webpackBarName: 'amis-admin-vue',
  productionGzipExtensions: ['html', 'js', 'css', 'svg'],
  webpackBanner: ' build: amis-admin-vue \n copyright: h7ml (h7ml@qq.com)'
}
const path = require('path')
const WebpackBar = require('webpackbar')
const resolve = dir => {
  return path.join(__dirname, dir)
}
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const Webpack = require('webpack')
module.exports = {
  devServer: {
    proxy: {
      '/amis': {
        target: 'https://aisuda.bce.baidu.com/',
        changeOrigin: true
      }
    }
  },
  configureWebpack() {
    return {
      resolve: {
        alias: {
          '~': resolve('.'),
          '@': resolve('src')
        }
      },
      plugins: [
        new Webpack.ProvidePlugin({}),
        new WebpackBar({
          name: config.webpackBarName
        })
      ]
    }
  },
  chainWebpack(config) {
    config.resolve.symlinks(true)
    config.when(process.env.NODE_ENV === 'development', config => {
      config.devtool('source-map')
    })
    config.when(process.env.NODE_ENV === 'production', config => {
      config.performance.set('hints', false)
      config.devtool('none')
      config.optimization.splitChunks({
        automaticNameDelimiter: '-',
        chunks: 'all',
        cacheGroups: {
          chunk: {
            name: 'vab-chunk',
            test: /[\\/]node_modules[\\/]/,
            minSize: 131072,
            maxSize: 524288,
            chunks: 'async',
            minChunks: 2,
            priority: 10
          },
          vue: {
            name: 'vue',
            test: /[\\/]node_modules[\\/](vue(.*)|core-js)[\\/]/,
            chunks: 'initial',
            priority: 20
          },
          elementUI: {
            name: 'element-ui',
            test: /[\\/]node_modules[\\/]element-ui(.*)[\\/]/,
            priority: 30
          }
        }
      })
      config
        .plugin('banner')
        .use(Webpack.BannerPlugin, [`${config.webpackBanner}`])
      config.plugin('compression').use(CompressionWebpackPlugin, [
        {
          filename: '[path][base].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(
            '\\.(' + config.productionGzipExtensions.join('|') + ')$'
          ),
          threshold: 8192,
          minRatio: 0.8
        }
      ])
    })
  },
  runtimeCompiler: true,
  productionSourceMap: false
}
