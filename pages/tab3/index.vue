<template>
	<view class="my-center">
		<view class='my-center-top theme-bg'>
			<view style="margin-right:40rpx">
				<open-data type="userAvatarUrl" class="userinfo-avatar"></open-data>
			</view>
			<view>{{userInfo.nickName}}</view>
		</view>
		<view class="my-center-table-view">
			<view class="my-center-li">基本信息</view>
			<view class="my-center-li">我的积分</view>
		</view>
	</view>
</template>

<script>
	let global = getApp().globalData
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		onLoad() {
			this.userInfo = global.userInfo
		},
		methods: {

		}
	}
</script>

<style>
	.my-center-top {
		padding: 50rpx 60rpx 30rpx 60rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.userinfo-avatar {
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
		overflow: hidden;
		display: block;
	}
	
	.my-center-table-view {
	  padding: 35rpx 60rpx 50rpx 60rpx;
	}
	
	.my-center-li {
	/*  display: flex;
	  flex-direction: row;
	  align-items: center; */
	  line-height: 100rpx;
	  border-bottom: 1rpx solid #f5f5f5;
	}
</style>
