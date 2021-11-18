<template>
	<view class="login">
		<image class="logo" @click="login" src="/static/login-bg.jpg"></image>
	</view>
</template>

<script>
	let { getUserProfile, wxLogin } = require('../../utils/wxApi.js')
	const http = require('../../utils/http')
	let global = getApp().globalData
	export default {
		data() {
			return {}
		},
		methods: {
			login() {
				getUserProfile().then(data => {
					global.userInfo = data.userInfo
					wxLogin().then(code => {
						console.log('code----', code)
						// http.post('login', {code: code}).then(res => {
						// 	if (res.token) {
						// 		uni.setStorage({
						// 		    key: 'token',
						// 		    data: res.token,
						// 		    success: function () {
						// 		        uni.switchTab({
						// 		        	url:'../tab1/index'
						// 		        })
						// 		    }
						// 		});
						// 	}
						// })
						uni.switchTab({
							url:'../tab1/index'
						})
					})
				})
			}
		}
	}
</script>

<style>
	.logo {
		width: 100%;
		height: 100vh;
	}
</style>
