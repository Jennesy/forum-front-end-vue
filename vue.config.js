const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath:
		process.env.NODE_ENV === 'production' ? '/forum-front-end-vue/' : '/',
	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = '餐廳評論網'
			return args
		})
	},
})
