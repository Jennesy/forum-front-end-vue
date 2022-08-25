<template>
	<div class="card mb-3">
		<div class="row g-3">
			<div class="col-4 col-sm-6 col-md-4 col-lg-3 my-sm-auto">
				<img
					class="w-100 m-3 rounded"
					:src="profile.image | emptyAvatarFilter(profile.id)"
				/>
			</div>
			<div class="col-8 col-sm-6 col-md-8 col-lg-9">
				<div class="card-body">
					<h4 class="card-title">{{ profile.name }}</h4>
					<p class="card-text">{{ profile.email }}</p>
					<ul class="list-unstyled list-inline">
						<li>
							<strong>{{ profile.commentsLength }}</strong> 已評論餐廳
						</li>
						<li>
							<strong>{{ profile.favoritedCounts }}</strong> 收藏的餐廳
						</li>
						<li>
							<strong>{{ profile.followingsCounts }}</strong> followings
							(追蹤者)
						</li>
						<li>
							<strong>{{ profile.followersCounts }}</strong> followers (追隨者)
						</li>
					</ul>
					<p v-if="profile.id === currentUser.id" class="m-0">
						<router-link :to="{ name: 'user-edit', params: { id: profile.id } }"
							><button type="submit" class="btn btn-primary">
								edit
							</button></router-link
						>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { emptyAvatarFilter } from './../utils/mixins'

export default {
	mixins: [emptyAvatarFilter],
	props: {
		profile: {
			type: Object,
			required: true,
		},
	},
	computed: {
		currentUser() {
			return { ...this.$store.state.currentUser }
		},
	},
}
</script>
<style scoped>
img {
	aspect-ratio: 1;
	object-fit: cover;
}
</style>
