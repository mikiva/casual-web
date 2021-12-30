module.exports = {
    chainWebpack: config => {
      config.plugin("html").tap(args => {
        args[0].title = "Casual";
        return args;
      });
    },
    //  publicPath: process.env.NODE_ENV === 'production' ? "/console/" : "/"
    devServer: {
      host: "localhost",
  
      proxy: {
        "/casual": {
          target: "http://localhost:8080"
        }
      }
    }
  };
  