<template>
	<view class="content">
		<view class="content-head">
			<NavBar @login="login" />
			<div class="swiper-wrap">
				<swiper
					class="swiper"
					:style="{ height: swiperHeight + 'px' }"
					:current="swiperCurrent"
					:indicator-dots="true"
					:circular="true"
					indicator-active-color="#007aff"
					@change="swiperChange"
				>
					<swiper-item v-for="(item, index) in swiperArray" :key="index">
						<image :draggable="false" @load="imageLoad($event, index)" :src="item.src" mode="widthFix"></image>
					</swiper-item>
				</swiper>
			</div>
		</view>

		<view class="content-body">
			<div class="videos-wrap">
				<div class="videos-block" v-for="(item, index) in videosData" :key="index">
					<div class="block-title">{{ item.category_name }}</div>
					<div class="block-content" :class="[model]">
						<div class="block-item" @click="palyVideo(e)" v-for="(e, i) in item.child" :key="i">
							<div class="block-item-header"><image :src="e.cover_path" mode=""></image></div>
							<div class="block-item-title">{{ e.title }}</div>
						</div>
					</div>
				</div>
			</div>
		</view>
		<Login :visible.sync="loginVisible" />
		<uni-popup ref="inputDialog" type="dialog">
			<uni-popup-dialog
				type="password"
				inputType="password"
				ref="inputClose"
				mode="input"
				placeholder="请输入密码"
				@confirm="dialogInputConfirm"
			></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
import NavBar from '@/component/NavBar/index.vue';
import Login from '@/component/Login/index.vue';
import { getVideoList } from '@/api/videos.js';
export default {
	components: {
		NavBar,
		Login
	},
	data() {
		return {
			loginVisible: false,
			windowWidth: 0,
			swiperCurrent: 0,
			swiperHeight: 180,
			swiperArray: [
				{ src: 'https://vc.qpic.cn/tpic/mtvivgVddPZWY/jcdr6377brrzx441/1680' },
				{ src: 'https://puui.qpic.cn/media_img/lena/PICk12f9m_580_1680/0' },
				{ src: 'https://puui.qpic.cn/media_img/lena/PIC13m296_580_1680/0' }
			],
			videosData: [],
			videoData: {},
			swiperImagesData: [],
			model: 'PC'
		};
	},
	onLoad() {
		this.getSystemInfo();
		this.getVideoList();
	},
	watch: {
		swiperImagesData: {
			deep: true,
			immediate: true,
			handler(value) {
				if (value.length === this.swiperArray.length) {
					const event = {
						detail: {
							current: 0
						}
					};
					this.swiperChange(event);
				}
			}
		}
	},
	methods: {
		dialogInputConfirm(value) {
			if (value == this.videoData.password) {
				uni.navigateTo({
					url: '/pages/video/video',
					success: res => {
						res.eventChannel.emit('onvideo', { ...this.videoData });
					}
				});
			} else {
				uni.showToast({
					title: '密码错误',
					icon: 'none'
				});
			}
		},
		async getVideoList() {
			const res = await getVideoList();
			const videosTemp = {};
			const videosArr = [];
			if (res.code === 20000) {
				res.data.items.map(item => {
					if (!videosTemp[item.category_id]) {
						videosTemp[item.category_id] = true;
						videosArr[videosArr.length] = {
							category_id: item.category_id,
							category_name: item.category_name,
							child: [item]
						};
					} else {
						const video = videosArr.find(e => e.category_id === item.category_id);
						video.child.push(item);
					}
				});
				this.videosData = videosArr;
			}
		},
		getSystemInfo() {
			const that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.windowWidth = res.windowWidth;
					that.model = res.model;
				}
			});
		},
		palyVideo(data) {
			this.videoData = data;
			if (data.type === 1) {
				uni.navigateTo({
					url: '/pages/video/video',
					success: res => {
						res.eventChannel.emit('onvideo', { ...this.videoData });
					}
				});
			} else {
				this.$refs.inputDialog.open();
			}
		},
		swiperChange(e) {
			this.swiperCurrent = e.detail.current;
			const data = this.swiperImagesData[this.swiperCurrent];
			const scale = this.windowWidth / data.width;
			this.swiperHeight = scale * data.height;
		},
		imageLoad(e, i) {
			this.$set(this.swiperImagesData, i, e.detail);
		},
		login() {
			this.loginVisible = true;
		}
	}
};
</script>

<style scoped lang="scss">
.content {
	padding-bottom: 60rpx;
	.content-head {
	}
	.content-body {
		max-width: 1200px;
		display: block;
		margin: auto;
	}
}
.header-wrap {
	position: relative;
	width: 100%;
	height: 128rpx;
	z-index: 1000;
	background-color: #191a20;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.header-logo {
		height: 100%;
		padding-left: 80rpx;
		svg {
			height: 100%;
			width: 170rpx;
			fill: #00cc4c;
		}
	}
	.header-aside {
		display: flex;
		align-items: center;
		color: #fff;
		padding-right: 80rpx;
		.header-aside-item {
			position: relative;
			display: flex;
			align-items: center;
			image {
				width: 56rpx;
				height: 56rpx;
				display: block;
			}
			.item-label {
				margin-left: 12rpx;
				font-size: 28rpx;
			}
		}
	}
}

.swiper-wrap {
	/deep/ .uni-swiper-dots-horizontal {
		bottom: 20px;
	}
	image {
		width: 100%;
	}
}
.videos-block {
	position: relative;
	margin-top: 40rpx;
	padding: 0 30rpx;
	.block-title {
		position: relative;
		color: #111;
		font-size: 40rpx;
		font-weight: 400;
		margin-bottom: 20rpx;
	}
	.block-content {
		.block-item {
			cursor: pointer;
			margin-bottom: 36rpx;
			.block-item-header {
				image {
					width: 100%;
					height: 400rpx;
					border-radius: 4px;
				}
			}
			.block-item-title {
				font-size: 28rpx;
				overflow: hidden;
				width: 100%;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
	.PC.block-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		.block-item {
			margin-right: 36rpx;
		}
		.block-item-header {
			image {
				width: 640rpx;
				height: 400rpx;
				border-radius: 4px;
			}
		}
		.block-item-title {
			width: 640rpx;
		}
	}
}
</style>
