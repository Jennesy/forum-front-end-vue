import { apiHelper } from '@/utils/helpers'

export default {
	categories: {
		get() {
			return apiHelper.get('/admin/categories')
		},
		post({ name }) {
			return apiHelper.post('/admin/categories', { name })
		},
		put({ categoryId, name }) {
			return apiHelper.put(`/admin/categories/${categoryId}`, { name })
		},
		delete({ categoryId }) {
			return apiHelper.delete(`/admin/categories/${categoryId}`)
		},
	},
	restaurants: {
		getDetail({ restaurantId }) {
			return apiHelper.get(`/admin/restaurants/${restaurantId}`)
		},
		get() {
			return apiHelper.get('/admin/restaurants')
		},
		create({ formData }) {
			return apiHelper.post('/admin/restaurants', formData)
		},
		update({ restaurantId, formData }) {
			return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
		},
	},
	users: {
		get() {
			return apiHelper.get('/admin/users')
		},
		edit({ userId, isAdmin }) {
			return apiHelper.put(`/admin/users/${userId}`, { isAdmin })
		},
	},
}
