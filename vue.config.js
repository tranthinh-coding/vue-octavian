module.exports = {
  devServer: {
    disableHostCheck: false,
  },
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
};
