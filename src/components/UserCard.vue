<template>
	<div
		class="d-flex flex-row flex-sm-column align-items-center bg-light p-3 rounded"
	>
		<router-link :to="{ name: 'user', params: { id: user.id } }">
			<img
				class="rounded"
				:src="user.image | emptyAvatarFilter(user.id)"
				width="140px"
				height="140px"
			/>
		</router-link>
		<div>
			<h2>{{ user.name }}</h2>
			<span class="badge badge-secondary"
				>追蹤人數：{{ user.FollowerCount }}</span
			>
		</div>

		<p class="mt-3">
			<button
				type="button"
				class="btn btn-danger"
				:disabled="user.isProcessing"
				v-if="user.isFollowed"
				@click.stop.prevent="deleteFollowing(user.id)"
			>
				取消追蹤
			</button>
			<button
				type="button"
				class="btn btn-primary"
				:disabled="user.isProcessing"
				v-else
				@click.stop.prevent="addFollowing(user.id)"
			>
				追蹤
			</button>
		</p>
	</div>
</template>
<script>
import { emptyAvatarFilter } from './../utils/mixins'
import { Toast } from '@/utils/helpers'
import usersAPI from '@/apis/users'
export default {
	mixins: [emptyAvatarFilter],
	props: {
		initialUser: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			user: {
				...this.initialUser,
				isProcessing: false, // duplicate request handling
			},
		}
	},
	methods: {
		addFollowing: async function (userId) {
			try {
				this.user.isProcessing = true
				// 1. Call add-following api
				const { data } = await usersAPI.addFollowing(userId)
				// 2. Throw error if backend add-following fail
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				// 3. Update client-side data
				this.user.isFollowed = true
				this.user.FollowerCount++
				this.user.isProcessing = false
			} catch (error) {
				this.user.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法加入追蹤，請稍後再試',
				})
			}
		},
		deleteFollowing: async function (userId) {
			try {
				this.user.isProcessing = true
				// 1. Call delete-following api
				const { data } = await usersAPI.deleteFollowing(userId)
				// 2. Throw error if backend delete-following fail
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				// 3. Update client-side data
				this.user.isFollowed = false
				this.user.FollowerCount--
				this.user.isProcessing = false
			} catch (error) {
				this.user.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法取消追蹤，請稍後再試',
				})
			}
		},
	},
}
</script>
<style scoped>
.flex-row {
	justify-content: space-between;
}
img {
	object-fit: cover;
}
@media (min-width: 480px) {
	.flex-sm-column {
		flex-direction: column !important;
	}
}
</style>
