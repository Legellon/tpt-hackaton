module.exports = {
  transpileDependencies: ["vuetify"],
  css:{
    loaderOptions: {
      sass: {
         prependData: ' @import "@/assets/styles.scss"; '
      }
    }
  },
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8000'
  //     }
  //   }
  // }
};
