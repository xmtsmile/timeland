<template>
	<view class="diary">
		<view class="section">
			<textarea maxlength="-1" placeholder="请输入" />
		</view>
		<view>
			<image @click="uploadPic" class="upload-image" src="../../../static/addPic.png"></image>
		</view>
		<view class="btn-area">
			<view><button style="background:#C0C0E0" size="mini" type="primary">确 定</button></view>
			<view style="margin-right:20rpx"><button size="mini" type="default">取 消</button></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			uploadPic() {
				http.uploadFile('', {}).then(res => {
					
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
