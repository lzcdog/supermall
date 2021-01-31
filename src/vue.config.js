module.exports = {
  lintOnSave: false,
  configureWebpack:{
    resolve:{
      alias:{
        'assets': 'src/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@views'
      }
    }
  }
}