import Vue from 'vue'
import Vuex from 'vuex'
// import {
// 	request
// } from '@/common/js/request'
import {
	getUserInfo,
	logout
} from '@/api/users.js';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: '',
		userInfo: {}
	},
	getters: {
		hasLogin(state) {
			return !!state.token;
		}
	},
	mutations: {
		//更新state数据
		setStateAttr(state, param) {

			if (param instanceof Array) {
				for (let item of param) {
					state[item.key] = item.val;
				}
			} else {
				state[param.key] = param.val;
			}
			console.log('setStateAttr', state)
		},
		//更新token
		setToken(state, data) {
			const {
				token,
				tokenExpired
			} = data;
			state.token = token;
			uni.setStorageSync('uniIdToken', token);
			uni.setStorageSync('tokenExpired', tokenExpired);
			this.dispatch('getUserInfo'); //更新用户信息
		},
		//退出登录
		logout(state) {
			state.token = '';
			uni.removeStorageSync('uniIdToken');
			uni.removeStorageSync('sessionid');
			state.userInfo = {};
		},
	},
	actions: {
		//更新用户信息
		async getUserInfo({
			state,
			commit
		}) {
			const res = await getUserInfo()
			if (res.code === 20000) {
				const userInfo = res.data;
				commit('setStateAttr', {
					key: 'userInfo',
					val: userInfo
				})
				if (userInfo.token) {
					commit('setStateAttr', {
						key: 'token',
						val: userInfo.token
					})
					uni.setStorageSync('uniIdToken', userInfo.token)
				}
			}
		},
		async logout({
			commit
		}) {
			const res = await logout()
			if (res.code === 20000) {
				commit('logout')
			}
			return res
		}
	}
})


export default store
