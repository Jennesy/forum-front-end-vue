<template>
	<div class="container py-5">
		<div>
			<h1>{{ restaurant.name }}</h1>
			<span class="badge badge-secondary mt-1 mb-3">
				{{ restaurant.categoryName }}
			</span>
		</div>

		<hr />

		<ul>
			<li>評論數： {{ restaurant.commentsLength }} }</li>
			<li>瀏覽次數： {{ restaurant.viewCounts }} }</li>
		</ul>

		<button type="button" class="btn btn-link" @click="$router.back()">
			回上一頁
		</button>
	</div>
</template>
<script>
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
		viewCounts: 2,
		createdAt: '2022-05-03T09:04:29.000Z',
		updatedAt: '2022-05-30T13:25:16.752Z',
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
export default {
	data() {
		return {
			restaurant: '',
		}
	},
	methods: {
		fetchRestaurant: function (id) {
			console.log('restaurantId:', id)
			this.restaurant = {
				name: dummyData.restaurant.name,
				categoryName: dummyData.restaurant.Category.name,
				commentsLength: dummyData.restaurant.Comments.length,
				viewCounts: dummyData.restaurant.viewCounts,
			}
		},
	},
	created() {
		this.fetchRestaurant(this.$route.params.id)
	},
}
</script>
