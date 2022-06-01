<template>
	<form @submit.stop.prevent="handleSubmit">
		<div class="form-group">
			<label for="name">Name</label>
			<input
				id="name"
				v-model="restaurant.name"
				type="text"
				class="form-control"
				name="name"
				placeholder="Enter name"
				required
			/>
		</div>

		<div class="form-group">
			<label for="categoryId">Category</label>
			<select
				id="categoryId"
				class="form-control"
				name="categoryId"
				v-model="restaurant.categoryId"
				required
			>
				<option value="" selected disabled>--請選擇--</option>
				<option
					v-for="category in categories"
					:key="category.id"
					:value="category.id"
				>
					{{ category.name }}
				</option>
			</select>
		</div>

		<div class="form-group">
			<label for="tel">Tel</label>
			<input
				id="tel"
				v-model="restaurant.tel"
				type="text"
				class="form-control"
				name="tel"
				placeholder="Enter telephone number"
			/>
		</div>

		<div class="form-group">
			<label for="address">Address</label>
			<input
				id="address"
				v-model="restaurant.address"
				type="text"
				class="form-control"
				placeholder="Enter address"
				name="address"
			/>
		</div>

		<div class="form-group">
			<label for="opening-hours">Opening Hours</label>
			<input
				id="opening-hours"
				v-model="restaurant.openingHours"
				type="time"
				class="form-control"
				name="opening_hours"
			/>
		</div>

		<div class="form-group">
			<label for="description">Description</label>
			<textarea
				id="description"
				v-model="restaurant.description"
				class="form-control"
				rows="3"
				name="description"
			/>
		</div>

		<div class="form-group">
			<label for="image">Image</label>
			<img
				v-if="restaurant.image"
				:src="restaurant.image"
				class="d-block img-thumbnail mb-3"
				width="200"
				height="200"
			/>
			<input
				id="image"
				type="file"
				name="image"
				accept="image/*"
				class="form-control-file"
				@change="handleFileChange"
			/>
		</div>

		<button type="submit" class="btn btn-primary">送出</button>
	</form>
</template>
<script>
const dummyData = {
	categories: [
		{
			id: 1,
			name: '中式料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
		{
			id: 2,
			name: '日本料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
		{
			id: 3,
			name: '義大利料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
		{
			id: 4,
			name: '墨西哥料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
		{
			id: 5,
			name: '素食料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
		{
			id: 6,
			name: '美式料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
		{
			id: 7,
			name: '複合式料理',
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
		},
	],
}
export default {
	name: 'AdminRestaurantForm',
	props: {
		initialRestaurant: {
			type: Object,
			default: () => {
				return {
					id: -1,
					name: '',
					tel: '',
					address: '',
					openingHours: '',
					description: '',
					image: '',
					categoryId: '',
				}
			},
		},
	},
	data() {
		return {
			restaurant: this.initialRestaurant,
			categories: [],
		}
	},
	methods: {
		fetchCategories: function () {
			this.categories = dummyData.categories
		},
		handleFileChange: function (event) {
			const { files } = event.target
			if (files.length === 0) {
				this.restaurant.image = ''
				return
			}
			this.restaurant.image = window.URL.createObjectURL(files[0])
		},
		handleSubmit: function (event) {
			const form = event.target
			const formData = new FormData(form)
			this.$emit('after-submit', formData)
		},
	},
	created() {
		this.fetchCategories()
	},
}
</script>
