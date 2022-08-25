<template>
	<div class="container py-5">
		<form class="w-100" @submit.stop.prevent="handleSubmit">
			<div class="text-center mb-4">
				<h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
			</div>

			<div class="form-label-group mb-3">
				<label for="name">Name</label>
				<input
					id="name"
					v-model="name"
					name="name"
					type="text"
					class="form-control"
					placeholder="name"
					autocomplete="username"
					required
				/>
			</div>

			<div class="form-label-group mb-2">
				<label for="email">Email</label>
				<input
					id="email"
					v-model="email"
					name="email"
					type="email"
					class="form-control"
					placeholder="email"
					autocomplete="username"
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
					autocomplete="new-password"
					required
				/>
			</div>

			<div class="form-label-group mb-5">
				<label for="password-check">Password Check</label>
				<input
					id="password-check"
					v-model="passwordCheck"
					type="password"
					name="passwordCheck"
					class="form-control"
					placeholder="Password"
					autocomplete="new-password"
					required
				/>
			</div>

			<button
				class="btn btn-lg btn-primary btn-block mb-3"
				type="submit"
				:disabled="isProcessing"
			>
				{{ isProcessing ? '處理中...' : 'Submit' }}
			</button>

			<div class="text-center mb-3">
				<p>
					<router-link to="/signin">Sign In</router-link>
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
			name: '',
			email: '',
			password: '',
			passwordCheck: '',
			isProcessing: false,
		}
	},
	methods: {
		handleSubmit: async function () {
			try {
				// 1. Form check
				if (!this.name) {
					Toast.fire({
						icon: 'warning',
						title: '請填寫名稱',
					})
					return
				} else if (!this.email) {
					Toast.fire({
						icon: 'warning',
						title: '請填寫信箱',
					})
					return
				} else if (!this.password) {
					Toast.fire({
						icon: 'warning',
						title: '請填寫密碼',
					})
					return
				} else if (!this.passwordCheck) {
					Toast.fire({
						icon: 'warning',
						title: '請填寫確認密碼',
					})
					return
				} else if (this.password !== this.passwordCheck) {
					Toast.fire({
						icon: 'warning',
						title: '密碼與確認密碼不同',
					})
					return
				}
				this.isProcessing = true
				const { data } = await authorizationAPI.signup({
					name: this.name,
					email: this.email,
					password: this.password,
					passwordCheck: this.passwordCheck,
				})
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				Toast.fire({
					icon: 'success',
					title: '成功建立帳號',
				})
				this.$router.push({ name: 'sign-in' })
			} catch (error) {
				this.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法建立帳號，請稍後再試',
				})
			}
		},
	},
}
</script>

<style scoped>
h1 {
	letter-spacing: 0.05rem;
}
.container {
	background-color: rgba(255, 255, 255, 0.5);
	backdrop-filter: blur(4px);
	padding: 3rem;
	border-radius: 0.25rem;
	transform: translateY(40px);
}
.container h1,
.container label,
.container p.text-muted {
	color: black !important;
	text-shadow: 0 0 7px rgba(255, 255, 255, 1);
}
button[type='submit'] {
	font-size: 16px;
}
button[type='submit']:hover {
	text-shadow: 0 0 7px rgba(255, 255, 255, 1);
}
button[type='submit'] + div a {
	text-shadow: 0 0 7px rgba(255, 255, 255, 1);
	font-size: 16px;
}
</style>
