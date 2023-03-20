const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    pluginOptions: {
        //复制resources下的文件到根目录
        extraResources: {
            form: 'resources/',
            to: './'
        },
        //引入electron-edge-js模块
        electronBuilder: {
            externals: ['electron-edge-js']
        }
    }
})
