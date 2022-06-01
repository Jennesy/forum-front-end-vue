<template>
	<div class="card mb-3">
		<div class="row no-gutters">
			<div class="col-md-4">
				<img
					:src="profile.image | emptyAvatarFilter"
					width="300px"
					height="300px"
				/>
			</div>
			<div class="col-md-8">
				<div class="card-body">
					<h5 class="card-title">{{ profile.name }}</h5>
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
					<p>
						<a href="/users/1/edit"
							><button type="submit" class="btn btn-primary">edit</button></a
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
}
</script>
