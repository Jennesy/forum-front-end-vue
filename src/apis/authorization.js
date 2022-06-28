import { apiHelper } from '@/utils/helpers'

export default {
	signin({ email, password }) {
		return apiHelper.post('/signin', {
			email,
			password,
		})
	},
	signup({ name, email, password, passwordCheck }) {
		return apiHelper.post('/signup', { name, email, password, passwordCheck })
	},
}
