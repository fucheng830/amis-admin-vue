const config = {
  webpackBarName: 'amis-admin-vue',
  webpackBanner: ' build: amis-admin-vue \n copyright: h7ml (h7ml@qq.com)'
}
const productionGzipExtensions = [
  'html',
  'js',
  'css',
  'svg',
  'ttf',
  'woff',
  'woff2',
  'eot',
  'png',
  'jpg',
  'jpeg',
  'gif',
  'ico',
  'webp',
  'json'
]
const path = require('path')
const WebpackBar = require('webpackbar')
const resolve = dir => {
  return path.join(__dirname, dir)
}

const { ESBuildMinifyPlugin } = require('esbuild-loader')
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
      ],
      output: {
        filename: `output/assets/js/amis.[name].js`,
        chunkFilename: `output/assets/js/amis.[name].js`
      }
    }
  },
  chainWebpack(config) {
    const rule = config.module.rule('js')

    // 清理自带的 babel-loader
    rule.uses.clear()

    // 添加 esbuild-loader
    rule
      .use('esbuild-loader')
      .loader('esbuild-loader')
      .options({
        loader: 'ts', // 如果使用了 ts, 或者 vue 的 class 装饰器，则需要加上这个 option 配置， 否则会报错：ERROR: Unexpected "@"
        target: 'es2015',
        tsconfigRaw: require('./tsconfig.json')
      })
    // 删除底层 terser, 换用 esbuild-minimize-plugin
    config.optimization.minimizers.delete('terser')

    // 使用 esbuild 优化 css 压缩
    config.optimization
      .minimizer('esbuild')
      .use(ESBuildMinifyPlugin, [{ minify: true, css: true }])

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
            name: 'amis-chunk',
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
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 8192,
          minRatio: 0.8
        }
      ])
    })
  },
  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    extract: {
      filename: `output/assets/css/amis.[name].css`,
      chunkFilename: `output/assets/css/amis.[name].css`
    }
  }
}
