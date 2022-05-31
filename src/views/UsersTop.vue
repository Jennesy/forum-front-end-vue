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
const dummyData = {
	users: [
		{
			id: 1,
			name: 'root',
			email: 'root@example.com',
			password: '$2a$10$sOmFvWTdbzoZNc3jhr/8.uRRj19E78r92/0zqaNfzpGtFyXUVeTWO',
			isAdmin: true,
			image: null,
			createdAt: '2022-05-03T09:04:28.000Z',
			updatedAt: '2022-05-03T09:04:28.000Z',
			Followers: [],
			FollowerCount: 0,
			isFollowed: false,
		},
		{
			id: 2,
			name: 'user1',
			email: 'user1@example.com',
			password: '$2a$10$9Aa4YNz15hzrTpvyc9wwau0b61b002RBP0eY7FQ5bytaw.G6e1Fbq',
			isAdmin: false,
			image: null,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			Followers: [],
			FollowerCount: 0,
			isFollowed: false,
		},
		{
			id: 3,
			name: 'user2',
			email: 'user2@example.com',
			password: '$2a$10$dHDYUB9LfDjCLjPanIFNV.DzVgkfA5pzFWa6g8kCBRXxZaTgSlQXe',
			isAdmin: false,
			image: null,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			Followers: [],
			FollowerCount: 0,
			isFollowed: false,
		},
	],
}
export default {
	data() {
		return {
			users: [],
		}
	},
	methods: {
		fetchUsers: function () {
			this.users = [...this.users, ...dummyData.users]
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
