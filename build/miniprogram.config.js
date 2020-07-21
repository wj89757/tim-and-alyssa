/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */
const path = require('path')
module.exports = {
    origin: 'https://test.miniprogram.com',
    entry: '/',
    router: {
        home: [
            '/(home|index)?',
            '/(side|index)?',
            '/(me|index)?',
            '/index.html'
        ],
    },
    redirect: {
        notFound: 'home',
        accessDenied: 'home',
    },
    generate: {
        autoBuildNpm: 'npm',
        tabBar: {
            color: '#000000',
            selectedColor: '#07c160',
            backgroundColor: '#ffffff',
            list: [{
                pageName: 'home',
                text: '主页',
                iconPath: path.resolve(__dirname, '../src/img/page1.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/page1-sel.png'),
            }, {
                pageName: 'side',
                text: '日常',
                iconPath: path.resolve(__dirname, '../src/img/page2.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/page2-sel.png'),
            },  {
                pageName: 'memory',
                text: '纪念日',
                iconPath: path.resolve(__dirname, '../src/img/jinianri.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/jinianri_selected.png'),
            }, {
                pageName: 'me',
                text: '我的',
                iconPath: path.resolve(__dirname, '../src/img/center.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/center-sel.png'),
            }],
        },
    },
    app: {
        navigationStyle: "custom",
        backgroundTextStyle: 'light',
        navigationBarTextStyle: 'white',
        navigationBarTitleText: '小刘和小王的日常',
    },
	appExtraConfig: {
        sitemapLocation: 'sitemap.json',
	},
    global: {
        share: true,
        windowScroll: false,
        backgroundColor: '#F7F7F7',
    },
    pages: {},
    optimization: {
		domSubTreeLevel: 10,

		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,

		styleValueReduce: 5000,
		attrValueReduce: 5000,
	},
    projectConfig: {
        projectname: 'kbone-template-vue',
        appid: 'wxa8e8ef66689baee4',
    },
}
