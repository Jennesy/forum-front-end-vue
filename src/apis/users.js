import { apiHelper } from '@/utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
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
}
