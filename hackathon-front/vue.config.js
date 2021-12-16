module.exports = {
  transpileDependencies: ["vuetify"],
  css:{
    loaderOptions: {
      sass: {
         prependData: ' @import "@/assets/styles.scss"; '
      }
    }
  }
};
