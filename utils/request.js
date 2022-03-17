// import store from '@/store'
import config from '@/config.js'
import {
	msg
} from './index.js'


/**
 * @param {String} url  
 * @param {String} method  
 * @param {Object} data 请求参数
 */

const request = (url, method = 'get', data = {}) => {
	return new Promise((resolve, reject) => {
		// url = `${config.domian}${url}`
		uni.request({
			url,
			method,
			data,
			// #ifdef MP-WEIXIN
			header: {
				cookie: uni.getStorageSync("sessionid")
			},
			// #endif

			success(res) {
				// #ifdef MP-WEIXIN
				const cookie = res.header["Set-Cookie"];
				if (cookie) {
					uni.setStorageSync("sessionid", cookie);
				}
				// #endif

				// 未登录状态
				if (res.data.code === 40004) {
					// store.commit('logout');
					// uni.navigateTo({
					// 	url: '/pages/auth/login'
					// })
					reject();
				} else if(res.data.code !== 20000) {
					msg(res.data.msg || '系统错误')
					resolve(res.data);
				}else {
					resolve(res.data);
				}

				 
			},
			fail(err) {
				reject(err);
			}
		})
	})
}
export default request
