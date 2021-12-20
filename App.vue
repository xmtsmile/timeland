<script>
	export default {
		onLaunch: function() {},
		onShow: function() {
			// console.log('bbbbb', uni.getStorageSync('token'))
			// if (!uni.getStorageSync('token')) {
			// 	uni.reLaunch({
			// 		url: '/pages/login/login'
			// 	})
			// }
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			userInfo: {}
		},
	}
</script>

<style>
	/*每个页面公共css */
	.clearfix:after {
		visibility: hidden;
		display: block;
		font-size: 0;
		content: " ";
		clear: both;
		height: 0;
	}
	.theme-color {
		color:#C0C0E0;
	}
	.theme-bg {
		background-color: #C0C0E0;
	}
</style>
