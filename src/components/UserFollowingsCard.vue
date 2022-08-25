<template>
	<div class="card">
		<div class="card-header">
			<strong>{{ followings.length }}</strong> followings (追蹤者)
		</div>
		<div class="card-body">
			<router-link
				v-for="following in followings"
				:key="following.id"
				:to="{ name: 'user', params: { id: following.id } }"
				:data-username="following.name"
			>
				<img
					:src="following.image | emptyAvatarFilter(following.id)"
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
		followings: {
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
	position: relative;
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
