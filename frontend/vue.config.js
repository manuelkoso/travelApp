const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/webApp/" : "/",
  outputDir: path.resolve(__dirname, "../backend/src/main/webapp"),
});
