<template>
	<form @submit.stop.prevent="handleSummit">
		<div class="form-group mb-4">
			<label for="text">留下評論：</label>
			<textarea v-model="text" class="form-control" rows="3" name="text" />
		</div>
		<div class="d-flex align-items-center justify-content-between">
			<button type="button" class="btn btn-link" @click="$router.back()">
				回上一頁
			</button>
			<button type="submit" class="btn btn-primary mr-0">Submit</button>
		</div>
	</form>
</template>
<script>
import { v4 as uuidv4 } from 'uuid'
export default {
	name: 'CreateComment',
	props: {
		restaurantId: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			text: '',
		}
	},
	methods: {
		handleSummit() {
			//TODO: 透過API向伺服器請求新增一筆comment...
			// 得到commentId
			this.$emit('after-create-comment', {
				commentId: uuidv4(),
				restaurantId: this.restaurantId,
				text: this.text,
			})
			this.text = ''
		},
	},
}
</script>
