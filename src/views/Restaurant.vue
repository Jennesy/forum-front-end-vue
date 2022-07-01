<template>
	<div class="container py-5">
		<h1>餐廳描述頁</h1>
		<!-- 餐廳資訊頁 RestaurantDetail -->
		<RestaurantDetail :initial-restaurant="restaurant" />
		<hr />
		<!-- 餐廳評論 RestaurantComments -->
		<RestaurantComments
			:initial-restaurant-comments="restaurantComments"
			@child-delete-comment="afterDeleteComment"
		/>
		<!-- 新增評論 CreateComment -->
		<CreateComment
			@after-create-comment="afterCreateComment"
			:restaurant-id="restaurant.id"
		/>
	</div>
</template>
<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'
import restaurantsAPI from '@/apis/restaurants'
import { Toast } from '@/utils/helpers'

export default {
	name: 'Restaurant',
	components: {
		RestaurantDetail,
		RestaurantComments,
		CreateComment,
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
				categoryName: '',
				isFavorited: false,
				isLiked: false,
			},
			restaurantComments: [],
		}
	},
	computed: {
		currentUser() {
			return {
				id: -1,
				name: '',
				email: '',
				image: '',
				isAdmin: false,
				...this.$store.state.currentUser,
			}
		},
	},
	created() {
		const { id } = this.$route.params
		this.fetchRestaurant(id)
	},
	beforeRouteUpdate(to, from, next) {
		this.fetchRestaurant(to.params.id)
		next()
	},
	methods: {
		fetchRestaurant: async function (restaurantId) {
			try {
				// fetch data from backend
				const { data } = await restaurantsAPI.getRestaurant({ restaurantId })
				const {
					id,
					name,
					tel,
					address,
					opening_hours: openingHours,
					description,
					image,
					Category,
				} = data.restaurant
				const { isFavorited, isLiked } = data

				// save data to component
				this.restaurant = {
					id,
					name,
					tel,
					address,
					openingHours,
					description,
					image,
					categoryName: Category ? Category.name : '未分類',
					isFavorited,
					isLiked,
				}
				this.restaurantComments = data.restaurant.Comments
			} catch (error) {
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法取得餐廳資料，請稍後再試',
				})
			}
		},
		afterDeleteComment: function (commentId) {
			console.log('afterDeleteComment', commentId)
			this.restaurantComments = this.restaurantComments.filter(
				(comment) => comment.id !== commentId
			)
		},
		afterCreateComment: function (payload) {
			const { commentId, restaurantId, text } = payload
			this.restaurantComments.push({
				id: commentId,
				text,
				RestaurantId: restaurantId,
				createdAt: new Date(),
				User: {
					id: this.currentUser.id,
					name: this.currentUser.name,
				},
			})
		},
	},
}
</script>
