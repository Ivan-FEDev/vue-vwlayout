module.exports = {
    "plugins": {

        // 解决@import 引入路径问题
        "postcss-import": {},

        // 处理文件 字体等静态文件的饮用路径
        // vue-loader 具有类似功能
        "postcss-url": {},

        // 自动处理浏览器前缀的插件   postcss-cssnext cssnano 具有该功能
        //"autoprefixer": {},

        // vw 元素容器宽高比 
        "postcss-aspect-ratio-mini": {},
        
        // 处理 Rainte 屏 1px 边框解决方案 使用svg 图形
        "postcss-write-svg": {
            utf8: false
        },

        // 使用未来的css 语法
        "postcss-cssnext": {},

        // px to viewport  需要根据设计图配置更改viweport
        "postcss-px-to-viewport": {
            viewportWidth: 750,
            viewportHeight: 1134,
            unitPrecision: 3,
            viewportUnit: 'vw',
            selectorBlackList: [ '.ingore', '.hairlines'],
            minPixelValue: 1,
            mediaQuery: false
        },

        // 给CSS的属性添加content的属性  给vw vh 等做适配
        // 配合 Viewport Units Buggyfill 做适配 : Viewport Units Buggyfill 需要在页面引入
        
        "postcss-viewport-units": {},

        "cssnano": {
            preset: "advanced",
            //postcss-cssnext 具有 autoprefixer 这里关掉
            autoprefixer: false,
            // 一定要关掉 避免层级问题
            "postcss-zindex": false
        }

    }
}