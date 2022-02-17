const createListenerCollection = require("./shared/listenerCollection");
const EventEmitter = require("events");

class Reporter extends EventEmitter {
  constructor(extensionsList = []) {
    console.log("Reporter");
    super();
    this.setMaxListeners(Infinity);

    // 插件列表
    this.extensionsList = extensionsList.map(name => ({
      path: `./extensions/${name}`,
      main: require(`./extensions/${name}/index.js`)
    }));

    this.initializeListeners = createListenerCollection("initialize");
   
  }

  init() {
    // 加载插件
    this.extensionsList.forEach((extension) => {
      extension.main(this);
    });

    this.initializeListeners.fire();
  }
}

module.exports = Reporter;
