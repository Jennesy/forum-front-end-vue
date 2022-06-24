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
import { fromNowFilter } from '../utils/mixins'
const dummyUser = {
	currentUser: {
		id: 1,
		name: '管理者',
		email: 'root@example.com',
		image: 'https://i.pravatar.cc/300',
		isAdmin: true,
	},
	isAuthenticated: true,
}
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
			currentUser: dummyUser.currentUser,
			restaurantComments: this.initialRestaurantComments,
		}
	},
	methods: {
		childDeleteComment(commentId) {
			console.log('child-delete-comment', commentId)
			this.restaurantComments = this.restaurantComments.filter(
				(comment) => comment.id !== commentId
			)
			this.$emit('child-delete-comment', commentId)
		},
	},
}
</script>
