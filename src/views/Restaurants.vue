<template>
	<div class="container py-5">
		<NavTabs />
		<Spinner v-if="isLoading" />
		<template v-else>
			<!-- 餐廳類別標籤 RestaurantsNavPills -->
			<RestaurantsNavPills :categories="categories" :category-id="categoryId" />
			<div class="row">
				<!-- 餐廳卡片 RestaurantCard-->
				<RestaurantCard
					v-for="restaurant in restaurants"
					:key="restaurant.id"
					:initial-restaurant="restaurant"
				/>
			</div>
			<div v-if="restaurants.length < 1">此類別目前無餐廳資料</div>
			<!-- 分頁標籤 RestaurantPagination -->
			<RestaurantsPagination
				v-if="totalPage.length > 1"
				:current-page="currentPage"
				:total-page="totalPage"
				:category-id="categoryId"
				:previous-page="previousPage"
				:next-page="nextPage"
			/>
		</template>
	</div>
</template>
<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantsPagination from '../components/RestaurantsPagination.vue'
import restaurantsAPI from '@/apis/restaurants.js'
import Spinner from '@/components/Spinner.vue'
import { Toast } from '@/utils/helpers'

export default {
	components: {
		NavTabs,
		RestaurantCard,
		RestaurantsNavPills,
		RestaurantsPagination,
		Spinner,
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
			isLoading: true,
		}
	},
	created() {
		const { page = '', categoryId = '' } = this.$route.query
		this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
	},
	beforeRouteUpdate(to, from, next) {
		const { page = '', categoryId = '' } = to.query
		this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
		next()
	},
	methods: {
		fetchRestaurants: async function ({ queryPage, queryCategoryId }) {
			try {
				this.isLoading = true
				const response = await restaurantsAPI.getRestaurants({
					page: queryPage,
					categoryId: queryCategoryId,
				})
				const {
					restaurants,
					categories,
					categoryId,
					page,
					totalPage,
					prev,
					next,
				} = response.data
				this.restaurants = restaurants
				this.categories = categories
				this.categoryId = categoryId
				this.currentPage = page
				this.totalPage = totalPage
				this.previousPage = prev
				this.nextPage = next
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
	},
}
</script>
