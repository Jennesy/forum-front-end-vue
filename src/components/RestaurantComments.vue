<template>
	<div>
		<h2 class="my-4">所有評論：</h2>

		<div v-for="comment in restaurantComments" :key="comment.id">
			<blockquote class="blockquote mb-0">
				<button
					type="button"
					class="btn btn-danger float-right"
					v-if="currentUser.isAdmin"
					@click.stop.prevent="childDeleteComment(comment.id)"
				>
					Delete
				</button>
				<h3>
					<router-link :to="{ name: 'user', params: { id: comment.User.id } }">
						{{ comment.User.name }}
					</router-link>
				</h3>
				<p>{{ comment.text }}</p>
				<footer class="blockquote-footer">
					{{ comment.createdAt | fromNow }}
				</footer>
			</blockquote>
			<hr />
		</div>
	</div>
</template>
<script>
import restaurantsAPI from '@/apis/restaurants'
import { Toast } from '@/utils/helpers'
import { fromNowFilter } from '../utils/mixins'

export default {
	mixins: [fromNowFilter],
	props: {
		initialRestaurantComments: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			restaurantComments: this.initialRestaurantComments,
		}
	},
	watch: {
		initialRestaurantComments(newValue) {
			this.restaurantComments = newValue
		},
	},
	methods: {
		async childDeleteComment(commentId) {
			try {
				const { data } = await restaurantsAPI.comments.delete({ commentId })
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				this.$emit('child-delete-comment', commentId)
			} catch (error) {
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法刪除評論，請稍後再試',
				})
			}
		},
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
}
</script>
