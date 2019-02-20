module.exports = {
  presets: [
    '@vue/app'
    // ['env',            //添加 babel-preset-env 配置 // env项是借助插件babel-preset-env，下面这个配置说的是babel对es6,es7,es8进行转码，并且设置amd,commonjs这样的模块化文件，不进行转码
    //   {
    //     'modules': false
    //   }
    // ]
  ],
  plugins: [ // //需要npm install babel-plugin-component -D//官网：http://element-cn.eleme.io/#/zh-CN/component/quickstart
    [
      'component',
      {
        'libraryName': 'element-ui', // 按需引用element-ui插件
        'styleLibraryName': 'theme-chalk' // 按需引用element-ui主题
      }
    ]
  ]
}
