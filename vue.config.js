// // vue.config.js
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'dist', // 打包生成的生产环境构建文件的目录
  assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启 生产环境的 source map?
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  css: {
    modules: false, // 启用 CSS modules
    extract: true, // 是否使用css分离插件
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {} // css预设器配置项
  },
  devServer: {
    port: 8080, // 端口
    proxy: 'https://www.easy-mock.com' // 设置代理
  }
}
// module.exports = {
//   // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
//   // 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本
//   // https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
//   // configureWebpack: {
//   //   plugins: [
//   //     new MyAwesomeWebpackPlugin()
//   //   ]
//   // },
//   // publicPath: //部署应用包时的基本 URL
//   publicPath: process.env.NODE_ENV === 'production' ? '/online/' : '/',
//   // outputDir  //构建文件的目录
//   // assetsDir  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
//   // indexPath  //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
//   // filenameHashing   默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
//   // 然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，
//   // 你可以通过将这个选项设为 false 来关闭文件名哈希
//   // pages   在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。其值应该是一个对象，对象的 key 是入口的名字，value 是：
//   // 一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)；
//   // 或一个指定其 entry 的字符串。
//   // lintOnSave   是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
//   // 设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
//   // 如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'error'。这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
//   // 或者，你也可以通过设置让浏览器 overlay 同时显示警告和错误
//   // 当 lintOnSave 是一个 truthy 的值时，eslint-loader 在开发和生产构建下都会被启用。如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置：
//   lintOnSave: process.env.NODE_ENV !== 'production',
//   // runtimeCompiler   是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右
//   // transpileDependencies  默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
//   // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
//   productionSourceMap: false,
//   // crossorigin  设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
//   // 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响
//   // integrity  在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
//   // 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
//   // 另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次
//   // chainWebpack  是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改
//   // css.modules  默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块
//   // css.extract  是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)
//   // css.sourceMap  是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
//   // css.loaderOptions
//   // css: {
//   //     loaderOptions: {
//   //       css: {
//   //         // 这里的选项会传递给 css-loader
//   //       },
//   //       postcss: {
//   //         // 这里的选项会传递给 postcss-loader
//   //       }
//   //     }
//   // },
//   // parallel   是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
//   // pluginOptions  这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项
//   devServer: {
//     port: 8085, // 端口号
//     host: 'localhost',
//     https: false, // https:{type:Boolean}
//     open: true, // 配置自动启动浏览器
//     // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
//     proxy: {
//       '/api': {
//         target: '<url>',
//         ws: true,
//         changeOrigin: true
//       },
//       '/foo': {
//         target: '<other_url>'
//       }
//     } // 配置多个代理
//   }
// }
