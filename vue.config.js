const path = require('path')

module.exports = {
  baseUrl: './',
  assetsDir: 'assets',
  // filenameHashing: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '/src'),
        '@c': path.join(__dirname, '/src/components')
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/core.sass";`
      }
    }
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://noidea-xyz.herokuapp.com',
        ws: true,
        changeOrigin: true
      },
    }
  }
}
