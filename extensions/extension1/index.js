

module.exports = (reporter) => {
  console.log('Using extension1')
  reporter.initializeListeners.add('extension1-initialize', () => {
    // 插件逻辑
    console.log('extension1-initialize')
  })
  return 
}