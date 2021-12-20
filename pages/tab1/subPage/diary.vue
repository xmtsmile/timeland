<template>
	<view class="diary">
		<view class="section">
			<textarea maxlength="-1" @input="bindDiaryTextBlur" placeholder="请输入" />
		</view>
		<!-- <view>
			<image @click="uploadPic" class="upload-image" src="../../../static/addPic.png"></image>
		</view> -->
		<view class="btn-area">
			<view><button style="background:#C0C0E0" size="mini" type="primary" @click="sureNewDiary">确 定</button>
			</view>
			<view style="margin-right:20rpx"><button size="mini" type="default">取 消</button></view>
		</view>
	</view>
</template>

<script>
	const http = require('../../../utils/http')
	export default {
		data() {
			return {
				diaryText: ''
			}
		},
		methods: {
			// uploadPic() {
			// 	http.uploadFile('', {}).then(res => {

			// 	})
			// },
			bindDiaryTextBlur(e) {
				console.log('e', e)
				this.diaryText = e.detail.value
			},
			sureNewDiary() {
				console.log('diaryText', this.diaryText)
				http.post('addNote', {text: this.diaryText}).then(res => {
					console.log('res', res)
					
				})
			}
		}
	}
</script>

<style>
	.diary {
		margin: 20rpx 20rpx;
	}

	.btn-area {
		display: flex;
		flex-direction: row-reverse;
	}

	.section {
		width: 100%;
		height: 250rpx;
	}

	.section textarea {
		width: 100%;
		height: 250rpx;
		overflow-y: auto;
	}

	.upload-image {
		width: 100rpx;
		height: 100rpx;
	}
</style>
