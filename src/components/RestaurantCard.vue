<template>
	<div class="col-md-6 col-lg-4">
		<div class="card mb-4">
			<img
				class="card-img-top"
				:src="restaurant.image | emptyImageFilter"
				alt="Card image cap"
				width="286px"
				height="180px"
			/>
			<div class="card-body">
				<p class="card-text title-wrap">
					<router-link
						:to="{ name: 'restaurant', params: { id: restaurant.id } }"
					>
						{{ restaurant.name }}
					</router-link>
				</p>
				<span class="badge badge-secondary">{{
					restaurant.Category ? restaurant.Category.name : '未分類'
				}}</span>
				<p class="card-text text-truncate">
					{{ restaurant.description }}
				</p>
			</div>
			<div class="card-footer">
				<button
					type="button"
					class="btn btn-danger btn-border favorite mr-2"
					v-if="restaurant.isFavorited"
					v-on:click.stop.prevent="toggleFavorite"
				>
					移除最愛
				</button>
				<button
					type="button"
					class="btn btn-primary btn-border favorite mr-2"
					v-else
					v-on:click.stop.prevent="toggleFavorite"
				>
					加到最愛
				</button>
				<button
					type="button"
					class="btn btn-danger like mr-2"
					v-if="restaurant.isLiked"
					v-on:click.stop.prevent="toggleLike"
				>
					Unlike
				</button>
				<button
					type="button"
					class="btn btn-primary like mr-2"
					v-else
					v-on:click.stop.prevent="toggleLike"
				>
					Like
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import { emptyImageFilter } from './../utils/mixins'
export default {
	mixins: [emptyImageFilter],
	props: {
		initialRestaurant: {
			type: Object,
			required: true,
		},
	},
	data: function () {
		return {
			restaurant: this.initialRestaurant,
		}
	},
	methods: {
		toggleFavorite: function () {
			this.restaurant.isFavorited = !this.restaurant.isFavorited
		},
		toggleLike: function () {
			this.restaurant.isLiked = !this.restaurant.isLiked
		},
	},
}
</script>
