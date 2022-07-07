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
							@click.stop.prevent="toggleUserRole(user)"
							:disabled="user.isProcessing"
						>
							{{ !user.isAdmin | currentRole | settingBtn(user.isProcessing) }}
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import AdminNav from '@/components/AdminNav'
import adminAPI from '@/apis/admin'
import { Toast } from '@/utils/helpers'

export default {
	components: { AdminNav },
	name: 'AdminUsers',
	data() {
		return {
			users: [],
		}
	},
	computed: {
		currentUser() {
			return {
				id: -1,
				name: '',
				email: '',
				image: '',
				isAdmin: false,
				...this.$store.state.currentUser,
			}
		},
	},
	methods: {
		fetchUsers: async function () {
			try {
				const { data } = await adminAPI.users.get()
				this.users = data.users.map((user) => ({
					id: user.id,
					name: user.name,
					email: user.email,
					image: user.image,
					isAdmin: user.isAdmin,
					isProcessing: false,
				}))
			} catch (error) {
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法取得使用者資料，請稍後再試',
				})
			}
		},
		toggleUserRole: async function (user) {
			try {
				user.isProcessing = true
				console.log(user)
				const { data } = await adminAPI.users.edit({
					userId: user.id,
					isAdmin: !user.isAdmin,
				})
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				user.isAdmin = !user.isAdmin
				user.isProcessing = false
			} catch (error) {
				user.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法更新使用者資料，請稍後再試',
				})
			}
		},
	},
	filters: {
		currentRole: function (isAdmin) {
			return isAdmin ? 'admin' : 'user'
		},
		settingBtn: function (role, isProcessing) {
			if (isProcessing) return '處理中...'
			return `set as ${role}`
		},
	},
	created() {
		this.fetchUsers()
	},
}
</script>
