<template>
	<view class="diary">
		<view class="section">
			<textarea maxlength="-1" placeholder="请输入" />
		</view>
		<view>
			<image @click="uploadPic" class="upload-image" src="../../../static/addPic.png"></image>
		</view>
		<view class="btn-area">
			<button style="margin-right:10rpx;" size="mini" type="default">取 消</button>
			<button style="background-color: #A0B8EA;" size="mini" type="primary">确 定</button>
		</view>
		<view class="clearfix"></view>
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
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			}
		}
	}
</script>

<style>
	.diary {
		margin: 20rpx 20rpx;
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

	.btn-area {
		width: 250rpx;
		float: right;
	}
</style>
