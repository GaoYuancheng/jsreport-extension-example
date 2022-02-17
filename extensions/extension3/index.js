module.exports = (reporter) => {
  console.log("Using extension3");
  reporter.initializeListeners.insert(
    {
      after: "extension1-initialize",
    },
    "extension3-initialize",
    () => {
      console.log("extension3-initialize");
    }
  );


  // 插件增加接口
  reporter.on('express-configure',(app) => {
    app.get('/extension3', (req, res) => {
        res.send('这是extension3插入的接口')
    })
  })
  
  
  return;
};
