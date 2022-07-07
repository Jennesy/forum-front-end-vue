<template>
	<div class="container py-5">
		<form @submit.stop.prevent="handleSubmit">
			<div class="form-group">
				<label for="name">Name</label>
				<input
					id="name"
					v-model="user.name"
					type="text"
					name="name"
					class="form-control"
					placeholder="Enter Name"
					required
				/>
			</div>

			<div class="form-group">
				<label for="image">Image</label>
				<img
					v-if="user.image"
					:src="user.image"
					class="d-block img-thumbnail mb-3"
					width="200"
					height="200"
				/>
				<input
					id="image"
					type="file"
					name="image"
					accept="image/*"
					class="form-control-file"
					@change="handleFileChange"
				/>
			</div>

			<button type="submit" class="btn btn-primary" :disabled="isProcessing">
				{{ isProcessing ? '處理中...' : 'Submit' }}
			</button>
		</form>
	</div>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'

export default {
	name: 'UserEdit',
	data() {
		return {
			user: {
				id: -1,
				name: '',
				email: '',
				isAdmin: false,
				image: '',
			},
			isProcessing: false,
		}
	},
	methods: {
		fetchUser: async function () {
			try {
				const { data } = await usersAPI.getCurrentUser()
				const { id, name, email, isAdmin, image } = data
				this.user = {
					...this.user,
					id,
					name,
					email,
					isAdmin,
					image,
				}
			} catch (error) {
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法取得資料，請稍後再試',
				})
			}
		},
		handleFileChange: function (event) {
			const files = event.target.files
			if (files.length === 0) {
				this.user.image = ''
				return
			}
			this.user.image = window.URL.createObjectURL(files[0])
		},
		handleSubmit: async function (event) {
			try {
				this.isProcessing = true
				const formData = new FormData(event.target)
				const { data } = await usersAPI.editUser({
					userId: this.user.id,
					formData,
				})

				// Backend update failed
				if (data.status !== 'success') {
					throw new Error(data.message)
				}

				// Backend update succeeded
				Toast.fire({
					icon: 'success',
					title: '成功更新個人資料',
				})
				this.$router.push({
					name: 'user',
					params: {
						id: this.user.id,
					},
				})
			} catch (error) {
				this.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法更新個人資料，請稍後再試',
				})
			}
		},
	},
	created() {
		// Note: I tried "Number(this.$route.params.id)" here but failed to convert String to Number. Don't yet know the reason
		if (+this.$route.params.id !== this.$store.state.currentUser.id) {
			Toast.fire({
				icon: 'error',
				title: '您沒有編輯權限',
			})
			this.$router.push({
				name: 'user',
				params: {
					id: this.$route.params.id,
				},
			})
		}
		this.fetchUser()
	},
	beforeRouteUpdate(to, from, next) {
		if (to.params.id !== this.$store.state.currentUser.id) {
			Toast.fire({
				icon: 'error',
				title: '您沒有編輯權限',
			})
			this.$router.push({
				name: 'user',
				params: {
					id: to.params.id,
				},
			})
		}
		this.fetchUser()
		next()
	},
}
</script>
