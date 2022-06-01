<template>
	<div class="col-3">
		<router-link :to="{ name: 'user', params: { id: user.id } }">
			<img :src="user.image | emptyAvatarFilter" width="140px" height="140px" />
		</router-link>
		<h2>User</h2>
		<span class="badge badge-secondary"
			>追蹤人數：{{ user.FollowerCount }}</span
		>
		<p class="mt-3">
			<button
				type="button"
				class="btn btn-danger"
				v-if="user.isFollowed"
				@click.stop.prevent="toggleFollowed"
			>
				取消追蹤
			</button>
			<button
				type="button"
				class="btn btn-primary"
				v-else
				@click.stop.prevent="toggleFollowed"
			>
				追蹤
			</button>
		</p>
	</div>
</template>
<script>
import { emptyAvatarFilter } from './../utils/mixins'
export default {
	mixins: [emptyAvatarFilter],
	data() {
		return {
			user: this.initialUser,
			defaultAvatar: '',
		}
	},
	created() {
		this.generateAvatar()
	},
	methods: {
		toggleFollowed: function () {
			this.user.isFollowed = !this.user.isFollowed
		},
	},
	props: {
		initialUser: {
			type: Object,
			required: true,
		},
	},
}
</script>
