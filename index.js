const Reporter = require("./reporter");

const extendsList = [
  "extension1",
  "extension2",
  "jsreport-express",
  "extension3",
  "jsreport-studio",
];

// TODO: sorter 插件排序

const reporter = new Reporter(extendsList);

reporter.init();
