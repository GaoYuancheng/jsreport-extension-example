const express = require("express");

module.exports = (reporter) => {
  console.log("Using jsreport-express");

  reporter.initializeListeners.insert(0, "express", () => {
    console.log("jsreport-express-initialize");
    const app = express();
    const port = 3000;

    // reporter.emit('express-configure', app)

    reporter.emit("express-configure", app);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  });

  return;
};
