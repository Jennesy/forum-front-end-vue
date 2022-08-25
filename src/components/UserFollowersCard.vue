<template>
	<div class="card">
		<div class="card-header">
			<strong>{{ followers.length }}</strong> followers (追隨者)
		</div>
		<div class="card-body">
			<router-link
				v-for="follower in followers"
				:key="follower.id"
				:to="{ name: 'user', params: { id: follower.id } }"
				:data-username="follower.name"
			>
				<img
					:src="follower.image | emptyAvatarFilter(follower.id)"
					class="avatar w-100"
				/>
			</router-link>
		</div>
	</div>
</template>
<script>
import { emptyAvatarFilter } from './../utils/mixins'
export default {
	mixins: [emptyAvatarFilter],
	props: {
		followers: {
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
	content: attr(data-username);
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
