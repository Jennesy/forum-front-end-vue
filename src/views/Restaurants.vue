<template>
	<div class="container py-5">
		<NavTabs />
		<!-- 餐廳類別標籤 RestaurantsNavPills -->
		<RestaurantsNavPills :categories="categories" />
		<div class="row">
			<!-- 餐廳卡片 RestaurantCard-->
			<RestaurantCard
				v-for="restaurant in restaurants"
				:key="restaurant.id"
				:initial-restaurant="restaurant"
			/>
		</div>
		<RestaurantsPagination
			v-if="totalPage.length > 1"
			:current-page="currentPage"
			:total-page="totalPage"
			:category-id="categoryId"
			:previous-page="previousPage"
			:next-page="nextPage"
		/>

		<!-- 分頁標籤 RestaurantPagination -->
	</div>
</template>
<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantsPagination from '../components/RestaurantsPagination.vue'
const dummyData = {
	restaurants: [
		{
			id: 1,
			name: 'Bianka Hagenes',
			tel: '(390) 804-3355',
			address: '0241 Leone Loaf',
			opening_hours: '08:00',
			description: 'Non est soluta sit modi.\nUllam veritatis ut odit e',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=65.0341626858032',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 5,
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
			isFavorited: false,
			isLiked: false,
		},
		{
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
			isFavorited: false,
			isLiked: false,
		},
		{
			id: 3,
			name: 'Kenny Robel',
			tel: '647.473.0086',
			address: '53669 Maggio Manors',
			opening_hours: '08:00',
			description: 'labore perspiciatis quis',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=73.40530438406606',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 4,
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
			isFavorited: false,
			isLiked: false,
		},
		{
			id: 4,
			name: 'Mariam Blanda',
			tel: '591.692.0930 x624',
			address: '491 Imelda Valleys',
			opening_hours: '08:00',
			description: 'modi et distinctio',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=96.30459475740184',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 4,
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
			isFavorited: false,
			isLiked: false,
		},
		{
			id: 5,
			name: 'Johnathan Effertz II',
			tel: '(434) 474-4702',
			address: '2529 Bauch Knoll',
			opening_hours: '08:00',
			description: 'Officiis voluptatem a suscipit. Animi praesentium ',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=83.92664881398255',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 5,
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
			isFavorited: false,
			isLiked: false,
		},
		{
			id: 6,
			name: 'Maegan Beer',
			tel: '553-817-3726',
			address: '555 Martina Islands',
			opening_hours: '08:00',
			description: 'Voluptas accusamus aliquam ipsa cumque sed et poss',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=5.0785066904685205',
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
			isFavorited: false,
			isLiked: false,
		},
		{
			id: 7,
			name: 'Nicklaus Kautzer V',
			tel: '1-181-992-6523 x77309',
			address: '354 Jordon Haven',
			opening_hours: '08:00',
			description: 'praesentium',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=10.610241557513',
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
			isFavorited: false,
			isLiked: false,
		},
		{
			id: 8,
			name: 'Maiya Hirthe',
			tel: '1-272-512-8795 x1769',
			address: '3814 Powlowski Stream',
			opening_hours: '08:00',
			description: 'Voluptatem velit rem similique magni quaerat commo',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=23.701688205555183',
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
			isFavorited: false,
			isLiked: false,
		},
		{
			id: 9,
			name: 'Elenora Ebert',
			tel: '1-455-042-6683',
			address: '79722 Freda Oval',
			opening_hours: '08:00',
			description: 'Cupiditate neque architecto.\nExpedita repellendus ',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=8.659204515238494',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 4,
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
			isFavorited: false,
			isLiked: false,
		},
		{
			id: 10,
			name: 'Amina Lowe',
			tel: '462-047-2398 x4196',
			address: '62749 Cooper Park',
			opening_hours: '08:00',
			description: 'Numquam quis veritatis quo hic nobis consequatur.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=3.4534531976471383',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 1,
			Category: {
				id: 1,
				name: '中式料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
			isFavorited: false,
			isLiked: false,
		},
	],
	categories: [
		{
			id: 1,
			name: '中式料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
		{
			id: 2,
			name: '日本料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
		{
			id: 3,
			name: '義大利料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
		{
			id: 4,
			name: '墨西哥料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
		{
			id: 5,
			name: '素食料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
		{
			id: 6,
			name: '美式料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
		{
			id: 7,
			name: '複合式料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
	],
	categoryId: '',
	page: 1,
	totalPage: [1, 2, 3, 4, 5],
	prev: 1,
	next: 2,
}
export default {
	components: {
		NavTabs,
		RestaurantCard,
		RestaurantsNavPills,
		RestaurantsPagination,
	},
	data() {
		return {
			restaurants: [],
			categories: [],
			categoryId: -1,
			currentPage: 1,
			totalPage: [],
			previousPage: -1,
			nextPage: -1,
		}
	},
	created() {
		this.fetchRestaurants()
	},
	methods: {
		fetchRestaurants: function () {
			const {
				restaurants,
				categories,
				categoryId,
				page,
				totalPage,
				prev,
				next,
			} = dummyData
			this.restaurants = restaurants
			this.categories = categories
			this.categoryId = categoryId
			this.currentPage = page
			this.totalPage = totalPage
			this.previousPage = prev
			this.nextPage = next
		},
	},
}
</script>
