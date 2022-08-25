<template>
	<ul class="nav nav-pills mb-4">
		<li class="nav-item">
			<router-link
				:class="['nav-link', { active: categoryId === '' }]"
				:to="{ name: 'restaurants' }"
			>
				全部
			</router-link>
		</li>

		<li v-for="category in categories" :key="category.id" class="nav-item">
			<router-link
				:class="['nav-link', { active: category.id === categoryId }]"
				:to="{ name: 'restaurants', query: { categoryId: category.id } }"
			>
				{{ category.name }}
			</router-link>
		</li>
	</ul>
</template>
<script>
export default {
	props: {
		categories: {
			type: Array,
			required: true,
		},
		categoryId: {
			type: [String, Number],
			default: '',
		},
	},
}
</script>
<style scoped>
.nav-pills {
	display: flex;
	align-items: center;
	margin-bottom: 1rem !important;
}

.nav-pills .nav-link {
	margin-right: 7px;
	margin-bottom: 7px;
	padding: 5px 10px 3px;
	color: #4d4d4d;
	border: 1px solid #a1a1a1;
	transition: none;
	background-color: rgba(255, 255, 255, 0.8);
}
.nav-pills .nav-link:hover {
	background-color: white;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
	border-width: 2px;
	border-color: #bd2333;
}
</style>
