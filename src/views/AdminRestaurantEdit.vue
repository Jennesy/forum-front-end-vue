<template>
	<div class="container py-5">
		<AdminRestaurantForm :initial-restaurant="restaurant" />
	</div>
</template>
<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'
const dummyData = {
	restaurant: {
		id: 2,
		name: 'Dexter Russel',
		tel: '675-272-8591',
		address: '22983 Mafalda Walk',
		opening_hours: '08:00',
		description: 'eum',
		image:
			'https://loremflickr.com/320/240/restaurant,food/?random=96.05272417065159',
		viewCounts: 0,
		createdAt: '2022-05-03T09:04:29.000Z',
		updatedAt: '2022-05-03T09:04:29.000Z',
		CategoryId: 3,
		Category: {
			id: 3,
			name: '義大利料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
	},
}
export default {
	name: 'AdminRestaurantEdit',
	components: {
		AdminRestaurantForm,
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
		}
	},
	methods: {
		fetchRestaurant: function (id) {
			//TODO: 從後端取得餐廳資料
			const {
				id,
				name,
				tel,
				address,
				opening_hours: openingHours,
				description,
				image,
				CategoryId: categoryId,
			} = dummyData.restaurant
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
		},
	},
	created() {
		const { id } = this.$route.params
		this.fetchRestaurant(id)
	},
}
</script>
