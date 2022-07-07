<template>
	<div class="album py-5 bg-light">
		<div class="container">
			<UserProfileCard :profile="user.profile" />
			<div class="row">
				<div class="col-md-4">
					<UserFollowingsCard :followings="user.followings" />
					<br />
					<UserFollowersCard :followers="user.followers" />
				</div>
				<div class="col-md-8">
					<UserCommentsCard :comments="user.comments" />
					<br />
					<UserFavoritedRestaurantsCard
						:favorited-restaurants="user.favoritedRestaurants"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import UserProfileCard from '../components/UserProfileCard.vue'
import UserFollowingsCard from '../components/UserFollowingsCard.vue'
import UserFollowersCard from '../components/UserFollowersCard.vue'
import UserCommentsCard from '../components/UserCommentsCard.vue'
import UserFavoritedRestaurantsCard from '../components/UserFavoritedRestaurantsCard.vue'
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'

export default {
	components: {
		UserProfileCard,
		UserFollowingsCard,
		UserFollowersCard,
		UserCommentsCard,
		UserFavoritedRestaurantsCard,
	},
	data() {
		return {
			user: {
				profile: {},
				followings: [],
				followers: [],
				comments: [],
				favoritedRestaurants: [],
			},
		}
	},
	methods: {
		fetchProfile: async function (userId) {
			try {
				const { data } = await usersAPI.get({ userId })
				this.user.profile = {
					id: data.profile.id,
					name: data.profile.name,
					email: data.profile.email,
					image: data.profile.image,
					commentsLength: data.profile.Comments.length,
					favoritedCounts: data.profile.FavoritedRestaurants.length,
					followingsCounts: data.profile.Followings.length,
					followersCounts: data.profile.Followers.length,
				}
				console.log(data.profile)
				this.user.followings = data.profile.Followings
				this.user.followers = data.profile.Followers
				this.user.comments = data.profile.Comments.filter(
					(comment) => comment.RestaurantId
				)
				this.user.favoritedRestaurants = data.profile.FavoritedRestaurants
			} catch (error) {
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法取得使用者資料，請稍後再試',
				})
			}
		},
	},
	created() {
		this.fetchProfile(this.$route.params.id)
	},
	beforeRouteUpdate(to, from, next) {
		this.fetchProfile(to.params.id)
		next()
	},
}
</script>
