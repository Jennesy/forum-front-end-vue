<template>
	<div class="container py-5">
		<Spinner v-if="isLoading" />
		<AdminRestaurantForm
			:initial-restaurant="restaurant"
			:is-processing="isProcessing"
			@after-submit="handleAfterSubmit"
			v-else
		/>
	</div>
</template>
<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'
import adminAPI from '@/apis/admin'
import Spinner from '@/components/Spinner.vue'
import { Toast } from '@/utils/helpers'

export default {
	name: 'AdminRestaurantEdit',
	components: {
		AdminRestaurantForm,
		Spinner,
	},
	data() {
		return {
			restaurant: {
				id: -1,
				name: '',
				tel: '',
				address: '',
				openingHours: '',
				description: '',
				image: '',
				categoryId: '',
			},
			isLoading: true,
			isProcessing: false,
		}
	},
	methods: {
		fetchRestaurant: async function (restaurantId) {
			try {
				this.isLoading = true
				const { data } = await adminAPI.restaurants.getDetail({ restaurantId })

				const {
					id,
					name,
					tel,
					address,
					opening_hours: openingHours,
					description,
					image,
					CategoryId: categoryId,
				} = data.restaurant

				this.restaurant = {
					...this.restaurant,
					id,
					name,
					tel,
					address,
					openingHours,
					description,
					image,
					categoryId,
				}
				this.isLoading = false
			} catch (error) {
				this.isLoading = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法取得餐廳資料，請稍後再試',
				})
			}
		},
		handleAfterSubmit: async function (formData) {
			try {
				this.isProcessing = true
				const { data } = await adminAPI.restaurants.update({
					restaurantId: this.restaurant.id,
					formData,
				})

				if (data.status !== 'success') {
					throw new Error(data.message)
				}

				this.$router.push({ name: 'admin-restaurants' })
			} catch (error) {
				this.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法更新餐廳資料，請稍後再試',
				})
			}
		},
	},
	beforeRouteUpdate(to, from, next) {
		this.fetchRestaurant(to.params.id)
		next()
	},
	created() {
		const { id } = this.$route.params
		this.fetchRestaurant(id)
	},
}
</script>
