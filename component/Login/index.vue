<template>
	<view class="login-wrap" v-if="visible">
		<view class="login-container">
			<uni-icons type="closeempty" size="16" class="login-close-icon" @click="loginClose"></uni-icons>
			<uni-forms key="login" :modelValue="loginFormData" :label-width="50" v-if="loginStatus">
				<uni-forms-item label="手机" name="name"><uni-easyinput type="text" v-model="loginFormData.name" placeholder="请输入手机" /></uni-forms-item>
				<uni-forms-item label="密码" name="password">
					<uni-easyinput type="password" v-model="loginFormData.password" placeholder="请输入密码" />
				</uni-forms-item>
				<view class="register-item"><text @click="loginStatus = !loginStatus" class="keyworld">注册</text></view>
				<view class=""><button type="primary" @click="login">登录</button></view>
			</uni-forms>
			<uni-forms key="register" :modelValue="registerFormData" :label-width="50" v-else>
				<uni-forms-item label="手机" name="name"><uni-easyinput type="text" v-model="registerFormData.name" placeholder="请输入手机" /></uni-forms-item>
				<uni-forms-item label="密码" name="password">
					<uni-easyinput type="password" v-model="registerFormData.password" placeholder="请输入密码" />
				</uni-forms-item>
				<uni-forms-item label="验证码" name="verfy">
					<view class="verfy-item">
						<uni-easyinput maxlength="6" type="text" v-model="registerFormData.verfy" placeholder="请输入验证码" />
						<view class="verfy">
							<text v-if="verfyCodeStatus">{{ time }}</text>
							<text v-else @click="getVerfyCode">获取验证码</text>
						</view>
					</view>
				</uni-forms-item>
				<view class="register-item"><text @click="loginStatus = !loginStatus" class="keyworld">登录</text></view>
				<view class=""><button type="primary" @click="register">注册</button></view>
			</uni-forms>
		</view>
	</view>
</template>

<script>
import { login, register, sendSms } from '@/api/users.js';
export default {
	name: 'login',
	props: {
		visible: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			loginStatus: true,
			verfyCodeStatus: false,
			time: 60,
			loginFormData: {
				name: '',
				password: ''
			},
			registerFormData: {
				name: '',
				password: '',
				verfy: ''
			}
		};
	},
	watch: {
		visible: {
			handler(value) {
				if (value) {
					this.loginStatus = true;
					this.verfyCodeStatus = false;
					this.time = 60;
					this.loginFormData = {
						name: '',
						password: ''
					};
					this.registerFormData = {
						name: '',
						password: '',
						verfy: ''
					};
				}
			}
		}
	},
	methods: {
		verfyFields() {
			if (this.loginStatus) {
				// 登录状态
				if (!this.loginFormData.name) {
					uni.showToast({
						title: '请输入手机号码',
						icon: 'none'
					});
					return false;
				}
				if (!this.loginFormData.password) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					});
					return false;
				}
			} else {
				// 注册状态
				if (!this.registerFormData.name) {
					uni.showToast({
						title: '请输入手机号码',
						icon: 'none'
					});
					return false;
				}
				if (!this.registerFormData.password) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					});
					return false;
				}
				if (!this.registerFormData.verfy) {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none'
					});
					return false;
				}
			}

			return true;
		},
		async login() {
			const res = await login({
				mobile: this.loginFormData.name,
				password: this.loginFormData.password
			});
			if (res.code === 20000) {
				uni.showToast({
					title: res.msg,
					icon: 'none'
				});
				this.loginClose();
				this.$store.dispatch('getUserInfo');
			}
		},
		async register() {
			if (this.verfyFields()) {
				const res = await register({
					mobile: this.registerFormData.name,
					password: this.registerFormData.password,
					mobile_code: this.registerFormData.verfy
				});
				if (res.code === 20000) {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
					this.loginStatus = true;
				}
			}
		},
		loginClose() {
			this.$emit('update:visible', false);
		},
		async getVerfyCode() {
			if (!this.registerFormData.name) {
				uni.showToast({
					title: '请输入手机号码',
					icon: 'none'
				});
				return false;
			}
			uni.showLoading();
			const res = await sendSms({
				mobile: this.registerFormData.name
			});
			uni.hideLoading();

			if (res.code === 20000) {
				this.verfyCodeStatus = true;
				this.timer = setInterval(() => {
					this.time--;
					if (this.time <= 0) {
						this.verfyCodeStatus = false;
						this.time = 60;
						clearInterval(this.timer);
					}
				}, 1000);
			}
		}
	}
};
</script>

<style scoped lang="scss">
.login-container {
	padding: 60rpx;
	background-color: #fff;
	border-radius: 8rpx;
	position: absolute;
	width: 600rpx;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.keyworld{
	color: #007aff;
}
.login-close-icon {
	position: absolute;
	right: 20rpx;
	top: 20rpx;
}
.register-item {
	/* margin-top: -20rpx; */
	font-size: 28rpx;
	margin-bottom: 10rpx;
}
.verfy-item {
	display: flex;
	align-items: center;
	.verfy {
		color: #007aff;
		font-size: 28rpx;
		margin-left: 10rpx;
		width: 150rpx;
		text-align: center;
	}
}
.login-wrap {
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 999;
}
</style>
