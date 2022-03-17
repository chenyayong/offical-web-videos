<template>
	<view class="nav-bar">
		<div class="header-wrap">
			<div class="header-logo"><image src="../../static/msapplication-icon-144x144.png" mode=""></image></div>
			<div class="header-aside">
				<div class="header-aside-item" v-if="userInfo && userInfo.mobile">
					<div>{{ userInfo.mobile }} |</div>
					<div class="item-label" @click="logout">退出</div>
				</div>
				<div class="header-aside-item" v-else>
					<div><image src="../../static/header-userImg-default-dark.png" mode=""></image></div>
					<div class="item-label" @click="login">登录</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		userInfo() {
			return this.$store.state.userInfo;
		}
	},
	methods: {
		login() {
			this.$emit('login');
		},
		async logout() {
			const res = await this.$store.dispatch('logout');
			if(res.code === 20000){
				uni.showToast({
					title: res.msg || '退出成功',
					icon: 'none'
				})
			}
		}
	}
};
</script>

<style scoped lang="scss">
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
		display: flex;
		align-items: center;
		svg {
			height: 100%;
			width: 170rpx;
			fill: #00cc4c;
		}
		image {
			width: 80rpx;
			height: 80rpx;
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
</style>
