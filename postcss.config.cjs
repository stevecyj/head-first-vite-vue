// postcss.config.cjs
module.exports = {
  plugins: {
    "@unocss/postcss": {},
    // autoprefixer
    autoprefixer: {
      // 指定目标浏览器
      overrideBrowserslist: ["last 2 versions", "> 1%"],
    },
  },
};
