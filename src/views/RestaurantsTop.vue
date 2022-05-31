<template>
	<div class="container py-5">
		<NavTabs />
		<h1 class="mt-5">人氣餐廳</h1>

		<hr />
		<!-- Top Restaurant Cards -->
		<div
			class="card mb-3"
			style="max-width: 540px; margin: auto"
			v-for="restaurant in restaurants"
			:key="restaurant.id"
		>
			<div class="row no-gutters">
				<div class="col-md-4">
					<router-link
						:to="{ name: 'restaurant', params: { id: restaurant.id } }"
					>
						<img class="card-img" :src="restaurant.image" />
					</router-link>
				</div>
				<div class="col-md-8">
					<div class="card-body">
						<h5 class="card-title">{{ restaurant.name }}</h5>
						<span class="badge badge-secondary"
							>收藏數：{{ restaurant.FavoriteCount }}</span
						>
						<p class="card-text">
							{{ restaurant.description }}
						</p>
						<router-link
							class="btn btn-primary mr-2"
							:to="{
								name: 'restaurant-dashboard',
								params: { id: restaurant.id },
							}"
							>Show
						</router-link>

						<button
							type="button"
							class="btn btn-danger mr-2"
							v-if="restaurant.isFavorited"
						>
							移除最愛
						</button>
						<button type="button" class="btn btn-primary" v-else>
							加到最愛
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import NavTabs from '../components/NavTabs.vue'
const dummyData = {
	restaurants: [
		{
			id: 50,
			name: 'Margarett Walker',
			tel: '1-469-205-7005',
			address: '32260 Paxton Spur',
			opening_hours: '08:00',
			description: 'Qui laudantium deserunt qui velit aut repellendus ',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=17.44821972591255',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 5,
			FavoritedUsers: [],
			isFavorited: false,
			FavoriteCount: 0,
		},
		{
			id: 49,
			name: 'Colby Morissette',
			tel: '(625) 858-1021 x6818',
			address: '0474 Greg Valley',
			opening_hours: '08:00',
			description: 'laborum',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=65.56942394338911',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 2,
			FavoritedUsers: [],
			isFavorited: false,
			FavoriteCount: 0,
		},
		{
			id: 48,
			name: 'Dejuan Bins I',
			tel: '1-505-093-9682 x610',
			address: '7706 Graham Bypass',
			opening_hours: '08:00',
			description: 'Natus tempore voluptates voluptate id nostrum eaqu',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=91.43211241611363',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 4,
			FavoritedUsers: [],
			isFavorited: false,
			FavoriteCount: 0,
		},
		{
			id: 47,
			name: 'Edward Padberg',
			tel: '923-230-7051 x03774',
			address: '68596 Violet Avenue',
			opening_hours: '08:00',
			description: 'mollitia',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=53.66194589305873',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 1,
			FavoritedUsers: [],
			isFavorited: false,
			FavoriteCount: 0,
		},
		{
			id: 46,
			name: 'Jess Dibbert',
			tel: '1-553-406-8016',
			address: '5334 Klocko Mill',
			opening_hours: '08:00',
			description: 'et',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=2.907356307650155',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 4,
			FavoritedUsers: [],
			isFavorited: false,
			FavoriteCount: 0,
		},
		{
			id: 45,
			name: 'Kaylah Gaylord',
			tel: '958.571.4950',
			address: '5785 Janiya Divide',
			opening_hours: '08:00',
			description: 'quia',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=40.782153488503866',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 5,
			FavoritedUsers: [],
			isFavorited: false,
			FavoriteCount: 0,
		},
		{
			id: 44,
			name: 'Alessandra Nader',
			tel: '(039) 185-7599',
			address: '6017 Holden Corner',
			opening_hours: '08:00',
			description: 'Et expedita non. Minima repudiandae voluptate labo',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=48.51209339364202',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 5,
			FavoritedUsers: [],
			isFavorited: false,
			FavoriteCount: 0,
		},
		{
			id: 43,
			name: 'Kale Parker',
			tel: '206.478.7459 x51173',
			address: '955 Mia Branch',
			opening_hours: '08:00',
			description: 'Qui porro officia perferendis ab aspernatur tempor',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=86.06492128059125',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 5,
			FavoritedUsers: [],
			isFavorited: false,
			FavoriteCount: 0,
		},
		{
			id: 42,
			name: 'Stacey Mayer',
			tel: '080-679-9227 x48805',
			address: '23241 Hickle Square',
			opening_hours: '08:00',
			description: 'Facilis adipisci ullam maxime voluptate nostrum. I',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=92.57518689528037',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 5,
			FavoritedUsers: [],
			isFavorited: false,
			FavoriteCount: 0,
		},
		{
			id: 41,
			name: 'Mr. Columbus Bruen',
			tel: '1-581-814-8261 x59480',
			address: '1932 Purdy Crossroad',
			opening_hours: '08:00',
			description: 'Enim quod quo in cum. Praesentium consequatur illu',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=84.49252179258994',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 4,
			FavoritedUsers: [],
			isFavorited: false,
			FavoriteCount: 0,
		},
	],
}

export default {
	components: {
		NavTabs,
	},
	data() {
		return {
			restaurants: [],
		}
	},
	methods: {
		fetchRestaurants: function () {
			this.restaurants = dummyData.restaurants
		},
	},
	created() {
		this.fetchRestaurants()
	},
}
</script>
