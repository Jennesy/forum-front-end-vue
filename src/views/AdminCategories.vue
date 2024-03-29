<template>
	<div class="container py-5">
		<AdminNav />

		<form class="my-4">
			<div class="form-row">
				<div class="col-auto">
					<input
						type="text"
						v-model="newCategoryName"
						class="form-control"
						placeholder="新增餐廳類別..."
					/>
				</div>
				<div class="col-auto">
					<button
						type="button"
						class="btn btn-primary"
						@click.stop.prevent="createCategory"
					>
						新增
					</button>
				</div>
			</div>
		</form>
		<Spinner v-if="isLoading" />
		<table class="table" v-else>
			<thead class="thead-dark">
				<tr>
					<th scope="col" width="60">#</th>
					<th scope="col">Category Name</th>
					<th scope="col" width="210">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="category in categories" :key="category.id">
					<th scope="row">
						{{ category.id }}
					</th>
					<td class="position-relative">
						<div v-show="!category.isEditing" class="category-name">
							{{ category.name }}
						</div>
						<input
							v-show="category.isEditing"
							v-model="category.name"
							type="text"
							class="form-control"
						/>
						<span
							v-show="category.isEditing"
							class="cancel"
							@click.stop.prevent="handleCancel(category.id)"
						>
							✕
						</span>
					</td>
					<td class="d-flex justify-content-between">
						<button
							v-show="!category.isEditing"
							type="button"
							class="btn btn-link mr-2"
							@click.stop.prevent="toggleIsEditing(category.id)"
						>
							Edit
						</button>
						<button
							v-show="category.isEditing"
							type="button"
							class="btn btn-link mr-2"
							@click.stop.prevent="updateCategory(category.id)"
						>
							Save
						</button>
						<button
							type="button"
							class="btn btn-link mr-2"
							@click.stop.prevent="deleteCategory(category.id)"
						>
							Delete
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<style scoped>
.category-name {
	padding: 0.375rem 0.75rem;
	border: 1px solid transparent;
	outline: 0;
	cursor: auto;
}

.btn-link {
	width: 62px;
}

.cancel {
	position: absolute;
	right: 20px;
	top: 50%;
	transform: translateY(-50%);
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 25px;
	height: 25px;
	border: 1px solid #aaaaaa;
	border-radius: 50%;
	user-select: none;
	cursor: pointer;
	font-size: 12px;
}
</style>
<script>
import AdminNav from '@/components/AdminNav'
import adminAPI from '@/apis/admin'
import Spinner from '@/components/Spinner.vue'
import { Toast } from '@/utils/helpers'

export default {
	components: {
		AdminNav,
		Spinner,
	},
	data() {
		return {
			categories: [],
			newCategoryName: '',
			isLoading: true,
		}
	},
	created() {
		this.fetchCategories()
	},
	methods: {
		async fetchCategories() {
			try {
				this.isLoading = true
				const { data } = await adminAPI.categories.get()
				console.log(data)
				this.categories = data.categories.map((category) => ({
					...category,
					isEditing: false,
					nameCached: '',
				}))
				this.isLoading = false
			} catch (error) {
				this.isLoading = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法取得餐廳類別，請稍後再試',
				})
			}
		},
		async createCategory() {
			try {
				// 1. Call api
				const { data } = await adminAPI.categories.post({
					name: this.newCategoryName,
				})
				// 2. Throw error when backend create-category fail
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				// 3. Update vue data
				this.categories.push({
					id: data.categoryId,
					name: this.newCategoryName,
				})
				this.newCategoryName = ''
			} catch (error) {
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法新增餐廳類別，請稍後再試',
				})
			}
		},
		async deleteCategory(categoryId) {
			try {
				const { data } = await adminAPI.categories.delete({ categoryId })

				if (data.status !== 'success') {
					throw new Error(data.message)
				}

				this.categories = this.categories.filter(
					(category) => category.id !== categoryId
				)
			} catch (error) {
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法刪除餐廳類別，請稍後再試',
				})
			}
		},
		toggleIsEditing(categoryId) {
			this.categories = this.categories.map((category) => {
				if (category.id === categoryId) {
					return {
						...category,
						isEditing: !category.isEditing,
						nameCached: category.name,
					}
				}
				return category
			})
		},
		async updateCategory(categoryId) {
			try {
				const category = this.categories.find(
					(_category) => _category.id === categoryId
				)
				const { data } = await adminAPI.categories.put({
					categoryId,
					name: category.name,
				})

				if (data.status !== 'success') {
					throw new Error(data.message)
				}

				this.toggleIsEditing(categoryId)
			} catch (error) {
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法變更餐廳類別，請稍後再試',
				})
			}
		},
		handleCancel(categoryId) {
			this.categories = this.categories.map((category) => {
				if (category.id === categoryId) {
					return {
						...category,
						name: category.nameCached,
					}
				}
				return category
			})
			this.toggleIsEditing(categoryId)
		},
	},
}
</script>
