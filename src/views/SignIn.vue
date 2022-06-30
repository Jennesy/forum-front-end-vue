<template>
	<div class="container py-5">
		<form class="w-100" @submit.prevent.stop="handleSubmit">
			<div class="text-center mb-4">
				<h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
			</div>

			<div class="form-label-group mb-2">
				<label for="email">email</label>
				<input
					id="email"
					v-model="email"
					name="email"
					type="email"
					class="form-control"
					placeholder="email"
					autocomplete="email"
					required
					autofocus
				/>
			</div>

			<div class="form-label-group mb-3">
				<label for="password">Password</label>
				<input
					id="password"
					v-model="password"
					name="password"
					type="password"
					class="form-control"
					placeholder="Password"
					autocomplete="current-password"
					required
				/>
			</div>

			<button
				class="btn btn-lg btn-primary btn-block mb-3"
				type="submit"
				:disabled="isProcessing"
			>
				Submit
			</button>

			<div class="text-center mb-3">
				<p>
					<router-link to="/signup">Sign Up</router-link>
				</p>
			</div>

			<p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
		</form>
	</div>
</template>

<script>
import authorizationAPI from '@/apis/authorization'
import { Toast } from '@/utils/helpers'
export default {
	data() {
		return {
			email: '',
			password: '',
			isProcessing: false,
		}
	},
	methods: {
		handleSubmit: async function () {
			try {
				// Check email and password not empty
				if (!this.password || !this.email) {
					Toast.fire({
						icon: 'warning',
						title: '請填寫 email 和 password',
					})
					return
				}
				this.isProcessing = true
				// Post to backend api
				const response = await authorizationAPI.signin({
					email: this.email,
					// TODO: Encrypt password
					password: this.password,
				})
				const { data } = response
				// 1. check response message
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				// 2-1. save token to local storage
				localStorage.setItem('token', data.token)
				// 2-2. save data to vuex
				this.$store.commit('setCurrentUser', data.user)

				// 3. redirect to home page
				this.$router.push('/restaurants')
				// 4. success message on screen
				Toast.fire({
					icon: 'success',
					title: '成功登入',
				})
			} catch (error) {
				this.password = ''
				this.isProcessing = false
				Toast.fire({
					icon: 'warning',
					title: '你輸入的帳號密碼有誤',
				})
				console.log(error)
			}
		},
	},
}
</script>
