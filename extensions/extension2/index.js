

module.exports = (reporter) => {
  console.log('Using extension2')
  reporter.initializeListeners.add('extension2-initialize', () => {
    // 插件逻辑
    console.log('extension2-initialize')
  })
  return 
}