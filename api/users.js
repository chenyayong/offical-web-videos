import request from '@/utils/request.js'

// 注册 
export const register = (params) => {
	return request('/api/login/reg', 'post', params)
}

// 登录
export const login = (params) => {
	return request('/api/login/index', 'post', params)
}

// 验证码
export const sendSms = (params) => {
	return request('/api/sms_api/send_sms', 'get', params)
}

// 用户信息
export const getUserInfo = (params) => {
	return request('/api/user/getUserInfo', 'get', params)
}

// 退出
export const logout = (params) => {
	return request('/api/login/logout', 'get', params)
}
