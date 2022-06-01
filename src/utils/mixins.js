import moment from 'moment'

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

export const emptyImageFilter = {
	filters: {
		emptyImage(src) {
			return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
		},
	},
}

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
export const emptyAvatarFilter = {
	filters: {
		emptyAvatarFilter(src) {
			const index = Math.floor(Math.random() * defaultAvatars.length)
			return src || defaultAvatars[index]
		},
	},
}
