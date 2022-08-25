<template>
	<div class="card">
		<div class="card-header">
			<strong>{{ comments.length }}</strong> 已評論餐廳
		</div>
		<div class="card-body">
			<router-link
				v-for="comment in comments"
				:key="comment.id"
				:to="{ name: 'restaurant', params: { id: comment.Restaurant.id } }"
				:data-name="comment.Restaurant.name"
			>
				<img
					:src="comment.Restaurant.image | emptyImageFilter"
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
		comments: {
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
