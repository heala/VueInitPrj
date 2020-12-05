//需要修改默认配置的时候在这里添加
module.exports = {
    devServer: {
        port: 8888,
        open: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                "components": "@/components"
            }
        }
    }
}