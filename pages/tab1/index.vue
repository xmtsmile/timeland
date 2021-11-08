<template>
	<view class="home">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true">
			<swiper-item v-for="item in imgList" :key="item">
				<view class="swiper-item">
					<image class="swiper-img" :src="item"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="home-menu-parent">
			<view class="home-menu" @click="goDiary">
				<image src="../../static/sugar.png"></image>
				<view>随记</view>
			</view>
			<view class="home-menu" @click="goTakePhotos">
				<image src="../../static/record.png"></image>
				<view>随拍</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [
					'../../static/banner1.jpg',
					'../../static/banner2.jpg'
				]
			}
		},
		methods: {
			goDiary() {
				uni.navigateTo({
					url: './subPage/diary'
				});
			},
			goTakePhotos() {
				uni.showModal({
					title: '提示',
					content: '功能暂未开放',
					showCancel: false
				});
			}
		}
	}
</script>

<style>
	.swiper-img {
		width: 100%
	}

	.home-menu-parent {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 10rpx 0rpx 10rpx 10rpx;
	}

	.home-menu {
		width: calc(50% - 15rpx);
		height: 200rpx;
		background-color: #C0C0E0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 10rpx 10rpx 10rpx 5rpx;
		color: #FFFFFF;
	}

	.home-menu image {
		width: 100rpx;
		height: 100rpx
	}
</style>
