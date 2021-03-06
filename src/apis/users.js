import { apiHelper } from '@/utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
	getTopUsers() {
		return apiHelper.get('/users/top', {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
	addFavorite(restaurantId) {
		return apiHelper.post(`/favorite/${restaurantId}`, null, {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
	deleteFavorite(restaurantId) {
		return apiHelper.delete(`/favorite/${restaurantId}`, {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
	addLike(likeId) {
		return apiHelper.post(`/like/${likeId}`, null, {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
	deleteLike(likeId) {
		return apiHelper.delete(`/like/${likeId}`, {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
	addFollowing(userId) {
		return apiHelper.post(`/following/${userId}`, null, {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
	deleteFollowing(userId) {
		return apiHelper.delete(`/following/${userId}`, {
			headers: { Authorization: `Bearer ${getToken()}` },
		})
	},
}
