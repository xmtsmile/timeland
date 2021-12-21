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
	const http = require('../../../utils/http')
	export default {
		data() {
			return {
				diaryList: [],
				pageNum: 1
			}
		},
		onLoad() {
			this.queryList(this.pageNum)
		},
		methods: {
			queryList(pageNum) {
				http.post('queryNoteList', {pageNum: pageNum}).then(res => {
					console.log('res', res)
					
				})
			},
			goDiaryDetail() {
				uni.navigateTo({
					url: '/pages/tab1/subPage/diaryDetail'
				});
			},
			addDiary() {
				uni.navigateTo({
					url: '/pages/tab1/subPage/diary'
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
