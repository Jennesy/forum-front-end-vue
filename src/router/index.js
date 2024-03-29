import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'
import store from '@/store'

Vue.use(VueRouter)

const authorizeIsAdmin = (to, from, next) => {
	const currentUser = store.state.currentUser
	if (currentUser && !currentUser.isAdmin) {
		next('/404')
		return
	}
	next()
}

const routes = [
	{
		path: '/signin',
		name: 'sign-in',
		component: SignIn,
	},
	{
		path: '/signup',
		name: 'sign-up',
		component: () => import('../views/SignUp.vue'),
	},
	{
		path: '/',
		name: 'root',
		redirect: '/restaurants',
	},
	{
		path: '/restaurants',
		name: 'restaurants',
		component: Restaurants,
	},
	{
		path: '/restaurants/top',
		name: 'restaurants-top',
		component: () => import('../views/RestaurantsTop.vue'),
	},
	{
		path: '/restaurants/feeds',
		name: 'restaurants-feeds',
		component: () => import('../views/RestaurantsFeeds.vue'),
	},
	{
		path: '/restaurants/:id/dashboard',
		name: 'restaurant-dashboard',
		component: () => import('../views/RestaurantDashBoard.vue'),
	},
	{
		path: '/restaurants/:id',
		name: 'restaurant',
		component: () => import('../views/Restaurant.vue'),
	},
	{
		path: '/users/top',
		name: 'users-top',
		component: () => import('../views/UsersTop.vue'),
	},
	{
		path: '/users/:id/edit',
		name: 'user-edit',
		component: () => import('../views/UserEdit.vue'),
	},
	{
		path: '/users/:id',
		name: 'user',
		component: () => import('../views/User.vue'),
	},
	{
		path: '/admin',
		exact: true,
		redirect: '/admin/restaurants',
	},
	{
		path: '/admin/restaurants',
		name: 'admin-restaurants',
		component: () => import('../views/AdminRestaurants.vue'),
		beforeEnter: authorizeIsAdmin,
	},
	{
		path: '/admin/restaurants/new',
		name: 'admin-restaurants-new',
		component: () => import('../views/AdminRestaurantNew.vue'),
		beforeEnter: authorizeIsAdmin,
	},
	{
		path: '/admin/restaurants/:id/edit',
		name: 'admin-restaurant-edit',
		component: () => import('../views/AdminRestaurantEdit.vue'),
		beforeEnter: authorizeIsAdmin,
	},
	{
		path: '/admin/restaurants/:id',
		name: 'admin-restaurant',
		component: () => import('../views/AdminRestaurant.vue'),
		beforeEnter: authorizeIsAdmin,
	},
	{
		path: '/admin/users',
		name: 'admin-users',
		component: () => import('../views/AdminUsers.vue'),
		beforeEnter: authorizeIsAdmin,
	},
	{
		path: '/admin/categories',
		name: 'admin-categories',
		component: () => import('../views/AdminCategories.vue'),
		beforeEnter: authorizeIsAdmin,
	},
	{
		path: '*',
		name: 'not-found',
		component: NotFound,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	linkExactActiveClass: 'active',
	routes,
})

router.beforeEach(async (to, from, next) => {
	const tokenInLocalStorage = localStorage.getItem('token')
	const tokenInStore = store.state.token
	let isAuthenticated = store.state.isAuthenticated

	// Check token existence and token change
	if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
		isAuthenticated = await store.dispatch('fetchCurrentUser')
	}

	const pathsWithoutAuthentication = ['sign-in', 'sign-up']

	if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
		next('/signin')
		return
	}

	if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
		next('/restaurants')
		return
	}
	next()
})
export default router
