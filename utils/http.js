let CONFIG = require('../config/config.js')

module.exports = class HTTP {
	static post(_url, _params) {
		console.log('_url', _url)
		console.log('_params', _params)
		return new Promise((resolve, reject) => { //  uni.hideLoading();
			uni.showLoading({
				title: '请求中'
			});
			uni.request({
				url: CONFIG.BASE_CONFIG.backServer + CONFIG.BASE_CONFIG_BACK_URL[_url].url, //仅为示例，并非真实接口地址。
				method: 'POST',
				data: _params,
				header: {
					'content-type': 'application/json', // 默认值
					token: uni.getStorageSync('token') ? uni.getStorageSync('token') : '',
				},
				success: (res) => {
					console.log('请求返回结果-----', res);
				},
				fail: (err) => {
					uni.hideLoading();
					reject(err)
				}
			});
		})
	}
}
