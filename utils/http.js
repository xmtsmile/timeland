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
					uni.hideLoading();
					resolve(res.data)
				},
				fail: (err) => {
					uni.hideLoading();
					reject(err)
				}
			});
		})
	}
	static uploadFile(_url, _params) {
	    return new Promise((resolve, reject) => {
	      let url = CONFIG.BASE_CONFIG.backServer + CONFIG.BASE_CONFIG_BACK_URL[_url].url
	      uni.chooseImage({
	        count: 1, // 默认9
	        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
	        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
	        success: function (res) {
	          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
	          let tempFilePaths = res.tempFilePaths
	          uni.showLoading()
	          console.log('_params', _params)
	          uni.uploadFile({
	            url: url, //仅为示例，非真实的接口地址
	            header: {
	              "token": uni.getStorageSync('token') ? uni.getStorageSync('token') : ''
	            },
	            filePath: tempFilePaths[0],
	            name: 'file',
	            formData: _params,
	            success: function (res) {
	              console.log('res   ----->>>> success ', res)
				  uni.hideLoading()
	              resolve({ res: res, matUrl: tempFilePaths[0] })
	            },
	            fail: function (err) {
	              console.log('res  err ----->>>> ', err)
	              uni.hideLoading()
	              reject()
	            }
	          })
	        }
	      })
	    })
	  }
}