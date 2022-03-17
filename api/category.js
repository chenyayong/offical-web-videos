import request from '@/utils/request'

// 视频分类列表
export const getCategoryList = (params: ICategoryData) => {
	return request({
		url: '/admin/category/index',
		method: 'get',
		params
	})
}