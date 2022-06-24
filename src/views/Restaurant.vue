<template>
	<div class="container py-5">
		<h1>餐廳描述頁</h1>
		<!-- 餐廳資訊頁 RestaurantDetail -->
		<RestaurantDetail :initial-restaurant="restaurant" />
		<hr />
		<!-- 餐廳評論 RestaurantComments -->
		<RestaurantComments
			:initial-restaurant-comments="restaurantComments"
			@child-delete-comment="rootDeleteComment"
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
const dummyData = {
	restaurant: {
		id: 1,
		name: 'Bianka Hagenes',
		tel: '(390) 804-3355',
		address: '0241 Leone Loaf',
		opening_hours: '08:00',
		description:
			'Non est soluta sit modi.\nUllam veritatis ut odit et eius.\nNihil cumque quaerat voluptatem eaque eum.',
		image:
			'https://loremflickr.com/320/240/restaurant,food/?random=65.0341626858032',
		viewCounts: 1,
		createdAt: '2022-05-03T09:04:29.000Z',
		updatedAt: '2022-05-20T06:11:33.362Z',
		CategoryId: 5,
		Category: {
			id: 5,
			name: '素食料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
		FavoritedUsers: [],
		LikedUsers: [],
		Comments: [
			{
				id: 51,
				text: 'Enim corporis rem.',
				UserId: 1,
				RestaurantId: 1,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				User: {
					id: 1,
					name: 'root',
					email: 'root@example.com',
					password:
						'$2a$10$sOmFvWTdbzoZNc3jhr/8.uRRj19E78r92/0zqaNfzpGtFyXUVeTWO',
					isAdmin: true,
					image: null,
					createdAt: '2022-05-03T09:04:28.000Z',
					updatedAt: '2022-05-03T09:04:28.000Z',
				},
			},
			{
				id: 1,
				text: 'Velit minima quae alias.',
				UserId: 2,
				RestaurantId: 1,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				User: {
					id: 2,
					name: 'user1',
					email: 'user1@example.com',
					password:
						'$2a$10$9Aa4YNz15hzrTpvyc9wwau0b61b002RBP0eY7FQ5bytaw.G6e1Fbq',
					isAdmin: false,
					image: null,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
				},
			},
			{
				id: 101,
				text: 'Expedita odio officia inventore.',
				UserId: 2,
				RestaurantId: 1,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				User: {
					id: 2,
					name: 'user1',
					email: 'user1@example.com',
					password:
						'$2a$10$9Aa4YNz15hzrTpvyc9wwau0b61b002RBP0eY7FQ5bytaw.G6e1Fbq',
					isAdmin: false,
					image: null,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
				},
			},
		],
	},
	isFavorited: false,
	isLiked: false,
}
const dummyUser = {
	currentUser: {
		id: 1,
		name: 'root',
		email: 'root@example.com',
		image: null,
		isAdmin: true,
	},
}
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
			currentUser: dummyUser.currentUser,
		}
	},
	created() {
		const { id } = this.$route.params
		this.fetchRestaurant(id)
	},
	methods: {
		fetchRestaurant: function (restaurantId) {
			console.log('id page', restaurantId)
			const {
				id,
				name,
				tel,
				address,
				opening_hours: openingHours,
				description,
				image,
				Category,
			} = dummyData.restaurant
			const { isFavorited, isLiked } = dummyData
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
			this.restaurantComments = dummyData.restaurant.Comments
		},
		rootDeleteComment: function (commentId) {
			console.log('rootDeleteComment', commentId)
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
