<template>
	<div class="card">
		<div class="card-header">
			<strong>{{ favoritedRestaurants.length }}</strong> 收藏的餐廳
		</div>
		<div class="card-body">
			<router-link
				v-for="favoritedRestaurant in favoritedRestaurants"
				:key="favoritedRestaurant.id"
				:to="{ name: 'restaurant', params: { id: favoritedRestaurant.id } }"
				:data-name="favoritedRestaurant.name"
			>
				<img
					:src="favoritedRestaurant.image | emptyImageFilter"
					class="avatar w-100"
				/>
			</router-link>
		</div>
	</div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
export default {
	mixins: [emptyImageFilter],
	props: {
		favoritedRestaurants: {
			type: Array,
			required: true,
		},
	},
}
</script>
<style scoped>
.card-body {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
	gap: 5px;
}
.avatar {
	object-fit: cover;
	aspect-ratio: 1;
}
.card-body a {
	position: relative;
	overflow: hidden;
	outline: 4px solid transparent;
}
.card-body a:hover {
	outline-color: #bd2333;
}
.card-body a::after {
	content: attr(data-name);
	display: block;
	position: absolute;
	inset: auto 0 0 0;
	width: 100%;
	color: white;
	background-color: #bd2333;
	transform: translateY(100%);
	transition: transform 0.2s ease-out;
}
.card-body a:hover::after {
	transform: translateY(0);
}
</style>
