import request from '@/utils/request'

// 视频分类列表
// export const getCategoryList = (params: ICategoryData) => {
// 	return request({
// 		url: '/admin/category/index',
// 		method: 'get',
// 		params
// 	})
// }

// 视频列表
export const getVideoList = (data) => {
	return request('/api/index/index', 'post', data)
}

// 视频详情
export const getVideo = (params) => {
  return request('/admin/Video/videoInfo', 'get', params)
}
