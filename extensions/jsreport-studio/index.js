const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const fs = require('fs')
const path = require('path')

const config = require('./webpack.config.js');
const compiler = webpack(config);


module.exports = (reporter) => {
  console.log("Using jsreport-studio");

  fs.writeFileSync(path.join(__dirname, './scripts/extensions_dev.js'), reporter.extensionsList.map((e) => {

    try {
      fs.statSync(path.join(e.path, '/components/index.js'))

      const extensionPath = path.join(e.path, '/components/index.js')
 
      return `import '${path.relative(path.join(__dirname, './scripts'), extensionPath).replace(/\\/g, '/')}'`
    } catch (e) {
      return ''
    }
  }).join('\n'))

  reporter.on("express-configure", (app) => {
    app.use(
      middleware(compiler, {
        // webpack-dev-middleware options
      })
    );
  });

  return;
};
