class HelloAsyncPlugin {
    apply(compiler) {
      // emit： webpack 打包完资源了
      compiler.hooks.emit.tap('CommentClear', compilation => {
       let assets = compilation.assets;
       Object.keys(assets).forEach((key) => {
           let content = assets[key].source();
           console.log(content);
           content = content.replace(/\/\*\*\*\*\*\*\//g, '');
           assets[key]['source'] = () => {
               return content;
           }
       })
      });
    }
  }
  // 单元测试: mocha jest ...
  // e2e:     puppeteer selenium
  // 拆包： extenals dll SplitChunk
  module.exports = HelloAsyncPlugin;