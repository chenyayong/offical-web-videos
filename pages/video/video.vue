<template>
	<view class="content">
		<!-- <NavBar /> -->
		<view class="container_player">
			<view class="video-player"><video :src="videoData.video_path" controls></video></view>
			<view class="video-title">{{ videoData.title }}</view>
			<view class="video-details">{{videoData.details}}</view>
		</view>
	</view>
</template>

<script>
import NavBar from '@/component/NavBar/index.vue';
export default {
	name: 'video',
	data() {
		return {
			model: 'PC',
			videoData: {}
		};
	},
	components: {
		NavBar
	},
	onLoad() {
		const eventChannel = this.getOpenerEventChannel();
		eventChannel.on('onvideo', data => {
			this.videoData = data;
		});
	},
	methods: {
		getSystemInfo() {
			const that = this;
			uni.getSystemInfo({
				success: function(res) {
					// that.windowWidth = res.windowWidth;
					that.model = res.model;
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
.container_player {
	padding: 0;
	background: #191a20;
	position: relative;
	width: 100%;
	padding-bottom: 40rpx;
	.video-player {
		display: flex;
		justify-content: center;
		video {
			width: 100%;
			height: 450px;
			display: block;
		}
	}
	.video-title {
		position: relative;
		color: #ccc;
		font-size: 32rpx;
		font-weight: 400;
		cursor: default;
		padding: 30rpx 0;
		text-align: center;
		// margin: auto;
	}
	.video-details{
		font-size: 24rpx;
		text-align: center;
		color: #999;
	}
}
</style>
