<template>
	<div class="container py-5">
		<NavTabs />
		<h1 class="mt-5">美食達人</h1>
		<hr />
		<div class="row text-center">
			<!-- user cards -->
			<UserCard v-for="user in users" :initial-user="user" :key="user.id" />
		</div>
	</div>
</template>
<script>
import NavTabs from '../components/NavTabs.vue'
import UserCard from '../components/UserCard.vue'
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'

export default {
	data() {
		return {
			users: [],
		}
	},
	methods: {
		fetchUsers: async function () {
			try {
				const { data } = await usersAPI.getTopUsers()
				this.users = data.users.map((user) => ({
					id: user.id,
					name: user.name,
					image: user.image,
					FollowerCount: user.FollowerCount,
					isFollowed: user.isFollowed,
				}))
			} catch (error) {
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
	components: {
		NavTabs,
		UserCard,
	},
}
</script>
