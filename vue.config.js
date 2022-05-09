module.exports = {
  devServer: {
    proxy: {
      "/amis": {
        target: "https://aisuda.bce.baidu.com/",
        changeOrigin: true,
      },
    },
  },
};
