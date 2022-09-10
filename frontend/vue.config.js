const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  outputDir: path.resolve(__dirname, "../backend/src/main/webapp"),
});
