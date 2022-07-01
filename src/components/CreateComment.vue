<template>
	<form @submit.stop.prevent="handleSummit">
		<div class="form-group mb-4">
			<label for="text">留下評論：</label>
			<textarea v-model="text" class="form-control" rows="3" name="text" />
		</div>
		<div class="d-flex align-items-center justify-content-between">
			<button type="button" class="btn btn-link" @click="$router.back()">
				回上一頁
			</button>
			<button type="submit" class="btn btn-primary mr-0">Submit</button>
		</div>
	</form>
</template>
<script>
import restaurantsAPI from '@/apis/restaurants'
import { Toast } from '@/utils/helpers'

export default {
	name: 'CreateComment',
	props: {
		restaurantId: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			text: '',
		}
	},
	computed: {
		userId() {
			return this.$store.state.currentUser.id
		},
	},
	methods: {
		async handleSummit() {
			try {
				// Remove whitespace from both ends
				// Check empty string
				this.text = this.text.trim()
				if (this.text === '') {
					Toast.fire({
						icon: 'warning',
						title: '無法新增空白留言',
					})
					return
				}

				// Call comments-create api
				const { data } = await restaurantsAPI.comments.create({
					text: this.text,
					restaurantId: this.restaurantId,
					id: this.userId,
				})

				// Throw error when backend update fail
				if (data.status !== 'success') {
					throw new Error(data.message)
				}

				// Update parent data
				this.$emit('after-create-comment', {
					commentId: data.commentId,
					restaurantId: this.restaurantId,
					text: this.text,
				})

				this.text = ''
			} catch (error) {
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法新增留言，請稍後再試',
				})
			}
		},
	},
}
</script>
