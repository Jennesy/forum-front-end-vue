<template>
	<div class="container py-5">
		<!-- AdminNav Component -->
		<AdminNav />
		<table class="table">
			<thead class="thead-dark">
				<tr>
					<th scope="col">#</th>
					<th scope="col">Email</th>
					<th scope="col">Role</th>
					<th scope="col" width="140">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in users" :key="user.id">
					<th scope="row">{{ user.id }}</th>
					<td>{{ user.email }}</td>
					<td>{{ user.isAdmin | currentRole }}</td>
					<td>
						<button
							type="button"
							class="btn btn-link"
							v-show="user.id !== currentUser.id"
							@click.stop.prevent="toggleUserRole(user.id)"
						>
							set as {{ !user.isAdmin | currentRole }}
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import AdminNav from '@/components/AdminNav'
const dummyData = {
	currentUser: {
		id: 1,
		name: 'root',
		email: 'root@example.com',
		image: null,
		isAdmin: true,
	},
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
		},
	],
}
export default {
	components: { AdminNav },
	data() {
		return {
			currentUser: { id: -1, name: '', email: '', image: '', isAdmin: false },
			users: [],
		}
	},
	methods: {
		fetchCurrentUser: function () {
			//TODO: 串接 API 向後端取得 current user 資料
			this.currentUser = dummyData.currentUser
		},
		fetchUsers: function () {
			//TODO: 串接 API 向後端取得 users 資料
			this.users = dummyData.users
		},
		toggleUserRole: function (userId) {
			this.users = this.users.map((user) => {
				if (user.id === userId) {
					return {
						...user,
						isAdmin: !user.isAdmin,
					}
				}
				return user
			})
		},
	},
	filters: {
		currentRole: function (isAdmin) {
			return isAdmin ? 'admin' : 'user'
		},
	},
	created() {
		this.fetchUsers()
		this.fetchCurrentUser()
	},
}
</script>
