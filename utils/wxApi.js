function getUserProfile() {
	return new Promise((resolve, reject) => {
		wx.getUserProfile({
			desc: '获取您的昵称，头像',
			success: (res) => {
				resolve(res)
			}
		})
	})
}

function wxLogin() {
	return new Promise((resolve, reject) => {
		wx.login({
			success: (res) => {
				resolve(res.code)
			}
		})
	})
}

module.exports = {
	getUserProfile,
	wxLogin
}
