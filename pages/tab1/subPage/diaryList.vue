<template>
	<view class="diary-list">
		<view v-for="item in diaryList" class="diary-item" @click="goDiaryDetail">
			<view class="item-border">
				<view class="title">{{item.time}}</view>
				<view class="content">{{item.content}}</view>
			</view>
		</view>
		<view class="add-btn" @click="addDiary">
			<image style="width:80rpx;height:80rpx;" src="../../../static/add.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				diaryList: [{
						time: '2020-09-10',
						content: '今天天气真不错呀'
					},
					{
						time: '2020-10-10',
						content: '今天下雨了'
					},
					{
						time: '2021-11-18',
						content: '今天中午没下雨，和丁大哥出去别的园区吃了一个饭，走了很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久很久'
					},
					{
						time: '2020-09-10',
						content: '今天天气真不错呀'
					},
					{
						time: '2020-10-10',
						content: '今天下雨了'
					},
					{
						time: '2020-09-10',
						content: '今天天气真不错呀'
					},
					{
						time: '2020-10-10',
						content: '今天下雨了'
					},
					{
						time: '2020-09-10',
						content: '今天天气真不错呀'
					},
					{
						time: '2020-10-10',
						content: '今天下雨了'
					}
				]
			}
		},
		methods: {
			goDiaryDetail() {
				uni.navigateTo({
					url: './diaryDetail'
				});
			},
			addDiary() {
				uni.navigateTo({
					url: './diary'
				});
			}
		}
	}
</script>

<style>
	.diary-list {
		margin: 20rpx 20rpx;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		min-height: 96vh;
	}

	.diary-item {
		padding: 20rpx 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.title {
		font-weight: 700;
		font-size: 34rpx;
		padding-bottom: 10rpx;
	}

	.content {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-height: 40rpx;
		font-size: 27rpx;
	}

	.item-border {
		padding-bottom: 30rpx;
		border-bottom: 1px solid #ededed;
	}

	.add-btn {
		position: fixed;
		bottom: 40rpx;
		z-index: 1000;
		right: 30rpx;
	}
</style>
