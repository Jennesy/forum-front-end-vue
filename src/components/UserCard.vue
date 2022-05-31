<template>
	<div class="col-3">
		<router-link :to="{ name: 'user', params: { id: user.id } }">
			<img :src="user.image || defaultAvatar" width="140px" height="140px" />
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
const defaultAvatars = [
	'https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg',
	'https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg',
	'https://images.freeimages.com/images/large-previews/7e8/man-avatar-1632965.jpg',
	'https://images.freeimages.com/images/large-previews/cd5/lady-avatar-1632969.jpg',
	'https://images.freeimages.com/images/large-previews/d66/woman-avatar-1632963.jpg',
	'https://images.freeimages.com/images/large-previews/971/basic-shape-avatar-1632968.jpg',
	'https://images.freeimages.com/images/large-previews/fdd/man-avatar-1632964.jpg',
	'https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg',
]
export default {
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
		generateAvatar: function () {
			const index = Math.floor(Math.random() * defaultAvatars.length)
			this.defaultAvatar = defaultAvatars[index]
		},
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
