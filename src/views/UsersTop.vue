<template>
	<div class="container py-5">
		<NavTabs />
		<h1 class="mt-5">美食達人</h1>
		<hr />
		<Spinner v-if="isLoading" />
		<div class="card-wrapper text-center" v-else>
			<!-- user cards -->
			<UserCard v-for="user in users" :initial-user="user" :key="user.id" />
		</div>
	</div>
</template>
<script>
import NavTabs from '../components/NavTabs.vue'
import UserCard from '../components/UserCard.vue'
import usersAPI from '@/apis/users'
import Spinner from '@/components/Spinner.vue'
import { Toast } from '@/utils/helpers'

export default {
	name: 'UsersTop',
	components: {
		NavTabs,
		UserCard,
		Spinner,
	},
	data() {
		return {
			users: [],
			isLoading: true,
		}
	},
	methods: {
		fetchUsers: async function () {
			try {
				this.isLoading = true
				const { data } = await usersAPI.getTopUsers()
				this.users = data.users.map((user) => ({
					id: user.id,
					name: user.name,
					image: user.image,
					FollowerCount: user.FollowerCount,
					isFollowed: user.isFollowed,
				}))
				this.isLoading = false
			} catch (error) {
				this.isLoading = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法取得美食達人，請稍後再試',
				})
			}
		},
	},
	created() {
		this.fetchUsers()
	},
}
</script>

<style scoped>
.card-wrapper {
	display: grid;
	gap: 16px;
}
@media (min-width: 480px) {
	.card-wrapper {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
}
</style>
