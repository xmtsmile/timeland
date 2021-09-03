<template>
	<view class="home">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true">
			<swiper-item v-for="item in imgList" :key="item">
				<view class="swiper-item">
					<image class="swiper-img" :src="item"></image>
				</view>
			</swiper-item>
		</swiper>
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

		}
	}
</script>

<style>
	.swiper-img {
		width: 100%
	}
</style>
