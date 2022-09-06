const path = require("path");
const webpack = require("webpack");

module.exports = {
	publicPath: "/",
	lintOnSave: false,
	css: {
		loaderOptions: {
			sass: {
				sassOptions: {
					includePaths: ["./node_modules", "./src/assets"],
				},
			},
		},
	},
	configureWebpack: {
		resolve: {
			alias: {
				"@themeConfig": path.resolve(__dirname, "themeConfig.js"),
				"@siteConfig": path.resolve(__dirname, "siteConfig.js"),
				"@core": path.resolve(__dirname, "src/@core"),
				"@validations": path.resolve(__dirname, "src/@core/utils/validations/validations.js"),
				"@axios": path.resolve(__dirname, "src/libs/axios"),
			},
		},
		plugins: [
			//...
			new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
			//...
		],
	},
	chainWebpack: (config) => {
		config.module
			.rule("vue")
			.use("vue-loader")
			.loader("vue-loader")
			.tap((options) => {
				// eslint-disable-next-line no-param-reassign
				options.transformAssetUrls = {
					img: "src",
					image: "xlink:href",
					"b-avatar": "src",
					"b-img": "src",
					"b-img-lazy": ["src", "blank-src"],
					"b-card": "img-src",
					"b-card-img": "src",
					"b-card-img-lazy": ["src", "blank-src"],
					"b-carousel-slide": "img-src",
					"b-embed": "src",
				};
				return options;
			});
	},
	transpileDependencies: ["vue-echarts", "resize-detector"],
};
