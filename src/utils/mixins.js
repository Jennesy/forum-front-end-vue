import moment from 'moment'

// fromNowFilter
// - Filter date-time into from-now format
export const fromNowFilter = {
	filters: {
		fromNow(datetime) {
			if (!datetime) {
				return '-'
			}
			return moment(datetime).fromNow()
		},
	},
}

// emptyImageFilter
// - Filter empty image with placeholder image from 'Placeholder.com'
export const emptyImageFilter = {
	filters: {
		emptyImageFilter(src) {
			return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
		},
	},
}

// defaultAvatars
// - Filter empty avatar with a avatar from 'defaultAvatars' list
const defaultAvatars = [
	'./images/avatar01.png',
	'./images/avatar02.png',
	'./images/avatar03.png',
]
export const emptyAvatarFilter = {
	filters: {
		emptyAvatarFilter(src, userId) {
			return (
				src ||
				(userId
					? defaultAvatars[userId % defaultAvatars.length]
					: defaultAvatars[0])
			)
		},
	},
}
