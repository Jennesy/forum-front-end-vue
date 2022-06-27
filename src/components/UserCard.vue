<template>
	<div class="col-3">
		<router-link :to="{ name: 'user', params: { id: user.id } }">
			<img :src="user.image | emptyAvatarFilter" width="140px" height="140px" />
		</router-link>
		<h2>{{ user.name }}</h2>
		<span class="badge badge-secondary"
			>追蹤人數：{{ user.FollowerCount }}</span
		>
		<p class="mt-3">
			<button
				type="button"
				class="btn btn-danger"
				v-if="user.isFollowed"
				@click.stop.prevent="deleteFollowing(user.id)"
			>
				取消追蹤
			</button>
			<button
				type="button"
				class="btn btn-primary"
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
			user: this.initialUser,
		}
	},
	methods: {
		addFollowing: async function (userId) {
			try {
				// 1. Call add-following api
				const { data } = await usersAPI.addFollowing(userId)
				// 2. Throw error if backend add-following fail
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				// 3. Update client-side data
				this.user.isFollowed = true
				this.user.FollowerCount++
			} catch (error) {
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法加入追蹤，請稍後再試',
				})
			}
		},
		deleteFollowing: async function (userId) {
			try {
				// 1. Call delete-following api
				const { data } = await usersAPI.deleteFollowing(userId)
				// 2. Throw error if backend delete-following fail
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				// 3. Update client-side data
				this.user.isFollowed = false
				this.user.FollowerCount--
			} catch (error) {
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
