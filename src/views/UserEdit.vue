<template>
	<div class="container py-5">
		<form @submit.stop.prevent="handleSubmit">
			<div class="form-group">
				<label for="name">Name</label>
				<input
					id="name"
					v-model="user.name"
					type="text"
					name="name"
					class="form-control"
					placeholder="Enter Name"
					required
				/>
			</div>

			<div class="form-group">
				<label for="image">Image</label>
				<img
					v-if="user.image"
					:src="user.image"
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

			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</template>
<script>
const dummyData = {
	profile: {
		id: 2,
		name: 'user1',
		email: 'user1@example.com',
		password: '$2a$10$9Aa4YNz15hzrTpvyc9wwau0b61b002RBP0eY7FQ5bytaw.G6e1Fbq',
		isAdmin: false,
		image: 'https://i.imgur.com/58ImzMM.png',
		createdAt: '2022-05-03T09:04:29.000Z',
		updatedAt: '2022-05-03T09:04:29.000Z',
		Comments: [
			{
				id: 1,
				text: 'Velit minima quae alias.',
				UserId: 2,
				RestaurantId: 1,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 1,
					name: 'Bianka Hagenes',
					tel: '(390) 804-3355',
					address: '0241 Leone Loaf',
					opening_hours: '08:00',
					description:
						'Non est soluta sit modi.\nUllam veritatis ut odit et eius.\nNihil cumque quaerat voluptatem eaque eum.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=65.0341626858032',
					viewCounts: 2,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-30T13:25:16.000Z',
					CategoryId: 5,
				},
			},
			{
				id: 3,
				text: 'Illo dolores perspiciatis voluptatem.',
				UserId: 2,
				RestaurantId: 3,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 3,
					name: 'Kenny Robel',
					tel: '647.473.0086',
					address: '53669 Maggio Manors',
					opening_hours: '08:00',
					description: 'labore perspiciatis quis',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=73.40530438406606',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 4,
				},
			},
			{
				id: 7,
				text: 'Architecto id recusandae molestiae delectus ex corrupti aperiam.',
				UserId: 2,
				RestaurantId: 7,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 7,
					name: 'Nicklaus Kautzer V',
					tel: '1-181-992-6523 x77309',
					address: '354 Jordon Haven',
					opening_hours: '08:00',
					description: 'praesentium',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=10.610241557513',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 3,
				},
			},
			{
				id: 9,
				text: 'Quaerat ut voluptatem placeat.',
				UserId: 2,
				RestaurantId: 9,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 9,
					name: 'Elenora Ebert',
					tel: '1-455-042-6683',
					address: '79722 Freda Oval',
					opening_hours: '08:00',
					description:
						'Cupiditate neque architecto.\nExpedita repellendus ducimus sit ipsam quasi laudantium.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=8.659204515238494',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 4,
				},
			},
			{
				id: 12,
				text: 'Eligendi dolor iusto natus quam blanditiis qui dicta in.',
				UserId: 2,
				RestaurantId: 12,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 12,
					name: 'Derick Kuhlman',
					tel: '271-240-1975',
					address: '65848 Cole Viaduct',
					opening_hours: '08:00',
					description:
						'Nulla qui sed in et. Temporibus maxime quod aut ratione. Nulla omnis sequi deserunt rerum repellendus. Et animi quibusdam et perspiciatis. Exercitationem qui aliquid similique necessitatibus id cum fugiat deleniti blanditiis. Ad voluptate voluptatem sed.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=94.22797620834085',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 5,
				},
			},
			{
				id: 16,
				text: 'Numquam iure odio.',
				UserId: 2,
				RestaurantId: 16,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 16,
					name: 'Ms. Layla Hartmann',
					tel: '230.051.9040 x0584',
					address: '61027 Rodriguez Manor',
					opening_hours: '08:00',
					description:
						'Quia et non odit aut pariatur velit sit dolorem. Quia sed et ut voluptatem dolorem quis ea cumque aliquid. Facilis error voluptas laudantium dolorum rerum repellendus magni ut.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=27.289709885652158',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 1,
				},
			},
			{
				id: 21,
				text: 'Praesentium aut cum fugit maxime rerum delectus qui unde.',
				UserId: 2,
				RestaurantId: 21,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 21,
					name: 'Adelia Renner',
					tel: '206-346-4795 x38586',
					address: '2298 Dooley Crescent',
					opening_hours: '08:00',
					description:
						'Beatae sequi et qui eveniet et est. Est fuga sit odit aut qui. Magni nostrum perferendis qui sed dicta facilis fuga. Ut alias reiciendis. Occaecati corporis et eligendi nesciunt velit.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=82.98414056736492',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 1,
				},
			},
			{
				id: 26,
				text: 'Eos nulla odit.',
				UserId: 2,
				RestaurantId: 26,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 26,
					name: 'Jamison Stokes Sr.',
					tel: '516-159-9966',
					address: '037 David Burg',
					opening_hours: '08:00',
					description:
						'Dolor quia veritatis officiis impedit aut debitis. Veniam odit debitis illo hic culpa expedita. Dolores ab qui autem sequi autem unde et.\n \rExpedita officia consectetur eum aut laboriosam possimus. Molestias omnis enim. Voluptatem et quia provident.\n \rQui velit voluptates voluptatum. Doloribus ut hic reprehenderit alias. Aut aspernatur voluptatum eum. Est pariatur officia odit est est. Est veniam architecto porro aut sunt quo cupiditate nisi.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=64.05052678425108',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 4,
				},
			},
			{
				id: 27,
				text: 'Autem voluptas quod blanditiis fugiat dolores voluptatum amet aperiam.',
				UserId: 2,
				RestaurantId: 27,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 27,
					name: 'Tyshawn Haley',
					tel: '1-770-138-7231 x88047',
					address: '69960 Fredrick Isle',
					opening_hours: '08:00',
					description: 'dolorem ratione sit',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=85.80509241733292',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 5,
				},
			},
			{
				id: 31,
				text: 'Et nam ratione ducimus rerum quis ex.',
				UserId: 2,
				RestaurantId: 31,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 31,
					name: 'Eden Bauch',
					tel: '1-015-143-5542 x3548',
					address: '8458 Quinton Plains',
					opening_hours: '08:00',
					description:
						'Perferendis omnis autem doloribus enim ipsam delectus dignissimos eius. Porro et fugit et et omnis. Quo aut enim. Laudantium dolorem est ab inventore id illum. Quisquam eum blanditiis qui non aliquam ipsum consectetur. Cupiditate dolorum aut aperiam aut.\n \rQuo nam porro sint sunt dolorem. Aut cumque eveniet distinctio. Voluptate iusto aut quisquam. Nesciunt architecto labore eaque. Aut porro nulla quam in voluptatem. Iusto eius accusantium similique distinctio ducimus neque nostrum est.\n \rOmnis nesciunt voluptatum sint sunt sequi minima. Hic et dolorem. Corrupti accusamus qui et. Molestias dolorem fugiat nihil sed nihil id dicta et eius. Eum facilis incidunt est molestiae in a quod fugiat. Rem rerum natus omnis non voluptas voluptatem.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=59.552353997882676',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 5,
				},
			},
			{
				id: 36,
				text: 'Ipsa alias quo molestias quam sit.',
				UserId: 2,
				RestaurantId: 36,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 36,
					name: 'Mikayla Osinski',
					tel: '(316) 355-4831 x290',
					address: '46931 Donnelly Courts',
					opening_hours: '08:00',
					description:
						'Vero inventore aspernatur ratione ea. Et consequatur voluptates ad. Ut reiciendis debitis. Animi aut aliquid aut quaerat vel. Eius nostrum sed est suscipit consectetur sed quis.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=43.24545050757671',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 1,
				},
			},
			{
				id: 38,
				text: 'Aut quia quia aut enim voluptatem.',
				UserId: 2,
				RestaurantId: 38,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 38,
					name: 'Jamir Torp',
					tel: '956-840-9629',
					address: '0547 Tina Burg',
					opening_hours: '08:00',
					description: 'sed',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=75.6137991087338',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 3,
				},
			},
			{
				id: 39,
				text: 'Dolor ut eligendi.',
				UserId: 2,
				RestaurantId: 39,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 39,
					name: 'Arnaldo Hartmann IV',
					tel: '787.493.0547 x7665',
					address: '23621 Mayer Route',
					opening_hours: '08:00',
					description: 'totam',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=20.743686624786918',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 4,
				},
			},
			{
				id: 41,
				text: 'Praesentium odit sed.',
				UserId: 2,
				RestaurantId: 41,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 41,
					name: 'Mr. Columbus Bruen',
					tel: '1-581-814-8261 x59480',
					address: '1932 Purdy Crossroad',
					opening_hours: '08:00',
					description:
						'Enim quod quo in cum. Praesentium consequatur illum porro nostrum rem magni et. Repellat temporibus velit voluptate sunt rem aut ipsa sint. Laudantium totam et minima.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=84.49252179258994',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 4,
				},
			},
			{
				id: 47,
				text: 'Est enim ipsam.',
				UserId: 2,
				RestaurantId: 47,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 47,
					name: 'Edward Padberg',
					tel: '923-230-7051 x03774',
					address: '68596 Violet Avenue',
					opening_hours: '08:00',
					description: 'mollitia',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=53.66194589305873',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 1,
				},
			},
			{
				id: 48,
				text: 'Laboriosam dolor iste numquam unde accusantium eum deleniti neque et.',
				UserId: 2,
				RestaurantId: 48,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 48,
					name: 'Dejuan Bins I',
					tel: '1-505-093-9682 x610',
					address: '7706 Graham Bypass',
					opening_hours: '08:00',
					description:
						'Natus tempore voluptates voluptate id nostrum eaque voluptatem ut. Nisi perspiciatis qui error. Rerum nesciunt corporis sit autem possimus quasi. Voluptatum nemo magnam quia esse quisquam maxime autem eveniet. Exercitationem atque illum excepturi itaque. Quo architecto optio quo ducimus aperiam quod placeat.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=91.43211241611363',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 4,
				},
			},
			{
				id: 49,
				text: 'Sequi error omnis commodi modi.',
				UserId: 2,
				RestaurantId: 49,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 49,
					name: 'Colby Morissette',
					tel: '(625) 858-1021 x6818',
					address: '0474 Greg Valley',
					opening_hours: '08:00',
					description: 'laborum',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=65.56942394338911',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 2,
				},
			},
			{
				id: 50,
				text: 'Sed molestiae provident alias tenetur ducimus quam.',
				UserId: 2,
				RestaurantId: 50,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 50,
					name: 'Margarett Walker',
					tel: '1-469-205-7005',
					address: '32260 Paxton Spur',
					opening_hours: '08:00',
					description:
						'Qui laudantium deserunt qui velit aut repellendus omnis totam in.\nFuga fugit consequuntur quas neque nisi.\nAut est quae ipsa repellendus dignissimos qui illo voluptatem est.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=17.44821972591255',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 5,
				},
			},
			{
				id: 61,
				text: 'Voluptatem impedit nulla autem in nulla ea nesciunt ipsa.',
				UserId: 2,
				RestaurantId: 11,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 11,
					name: 'Haleigh Jaskolski',
					tel: '(799) 423-3894 x56693',
					address: '152 Gutmann Mall',
					opening_hours: '08:00',
					description: 'Ipsa et iusto quod odio.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=90.29689933298182',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 4,
				},
			},
			{
				id: 66,
				text: 'Qui aut consequatur quia ut debitis quia optio.',
				UserId: 2,
				RestaurantId: 16,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 16,
					name: 'Ms. Layla Hartmann',
					tel: '230.051.9040 x0584',
					address: '61027 Rodriguez Manor',
					opening_hours: '08:00',
					description:
						'Quia et non odit aut pariatur velit sit dolorem. Quia sed et ut voluptatem dolorem quis ea cumque aliquid. Facilis error voluptas laudantium dolorum rerum repellendus magni ut.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=27.289709885652158',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 1,
				},
			},
			{
				id: 67,
				text: 'Nam culpa qui qui.',
				UserId: 2,
				RestaurantId: 17,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 17,
					name: 'Loraine Gottlieb',
					tel: '969-313-9960',
					address: '550 Mackenzie Lake',
					opening_hours: '08:00',
					description: 'Voluptatem pariatur est nam enim omnis eveniet.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=74.13030861415997',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 5,
				},
			},
			{
				id: 71,
				text: 'Modi qui laborum quasi officia animi voluptates rerum.',
				UserId: 2,
				RestaurantId: 21,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 21,
					name: 'Adelia Renner',
					tel: '206-346-4795 x38586',
					address: '2298 Dooley Crescent',
					opening_hours: '08:00',
					description:
						'Beatae sequi et qui eveniet et est. Est fuga sit odit aut qui. Magni nostrum perferendis qui sed dicta facilis fuga. Ut alias reiciendis. Occaecati corporis et eligendi nesciunt velit.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=82.98414056736492',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 1,
				},
			},
			{
				id: 73,
				text: 'Sed vero esse deleniti.',
				UserId: 2,
				RestaurantId: 23,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 23,
					name: 'Tia Olson',
					tel: '948-474-0536 x10980',
					address: '3724 Ortiz Glen',
					opening_hours: '08:00',
					description:
						'Fugiat aliquam sit repudiandae nostrum ratione doloremque ipsam. Sint quisquam vitae. Adipisci deserunt aut deleniti fugiat itaque est in sit.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=36.51208222226438',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 1,
				},
			},
			{
				id: 76,
				text: 'Quaerat enim reprehenderit rerum ut voluptas a voluptatem.',
				UserId: 2,
				RestaurantId: 26,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 26,
					name: 'Jamison Stokes Sr.',
					tel: '516-159-9966',
					address: '037 David Burg',
					opening_hours: '08:00',
					description:
						'Dolor quia veritatis officiis impedit aut debitis. Veniam odit debitis illo hic culpa expedita. Dolores ab qui autem sequi autem unde et.\n \rExpedita officia consectetur eum aut laboriosam possimus. Molestias omnis enim. Voluptatem et quia provident.\n \rQui velit voluptates voluptatum. Doloribus ut hic reprehenderit alias. Aut aspernatur voluptatum eum. Est pariatur officia odit est est. Est veniam architecto porro aut sunt quo cupiditate nisi.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=64.05052678425108',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 4,
				},
			},
			{
				id: 82,
				text: 'Unde ducimus rerum provident.',
				UserId: 2,
				RestaurantId: 32,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 32,
					name: 'Clement Schmidt V',
					tel: '(478) 931-0876 x1274',
					address: '37703 Rau Cliff',
					opening_hours: '08:00',
					description:
						'Quidem et ipsam ab velit voluptatem. Alias aut est aut voluptatum accusamus qui aspernatur. Recusandae et placeat impedit. Est est fuga consequuntur rerum dolorem est. Beatae mollitia inventore accusamus.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=79.53846070909569',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 2,
				},
			},
			{
				id: 91,
				text: 'Quaerat voluptas quasi officia quia autem magnam dignissimos distinctio.',
				UserId: 2,
				RestaurantId: 41,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 41,
					name: 'Mr. Columbus Bruen',
					tel: '1-581-814-8261 x59480',
					address: '1932 Purdy Crossroad',
					opening_hours: '08:00',
					description:
						'Enim quod quo in cum. Praesentium consequatur illum porro nostrum rem magni et. Repellat temporibus velit voluptate sunt rem aut ipsa sint. Laudantium totam et minima.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=84.49252179258994',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 4,
				},
			},
			{
				id: 93,
				text: 'Quis praesentium qui placeat alias ut facere.',
				UserId: 2,
				RestaurantId: 43,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 43,
					name: 'Kale Parker',
					tel: '206.478.7459 x51173',
					address: '955 Mia Branch',
					opening_hours: '08:00',
					description:
						'Qui porro officia perferendis ab aspernatur tempora enim. Dolorum rerum reiciendis molestias omnis. Unde non in sequi. Cumque hic cupiditate dolorum. Expedita ipsa quod rerum distinctio voluptatem placeat omnis eaque.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=86.06492128059125',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 5,
				},
			},
			{
				id: 96,
				text: 'Voluptates non est.',
				UserId: 2,
				RestaurantId: 46,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 46,
					name: 'Jess Dibbert',
					tel: '1-553-406-8016',
					address: '5334 Klocko Mill',
					opening_hours: '08:00',
					description: 'et',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=2.907356307650155',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 4,
				},
			},
			{
				id: 97,
				text: 'Consequatur pariatur illum necessitatibus atque commodi maiores.',
				UserId: 2,
				RestaurantId: 47,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 47,
					name: 'Edward Padberg',
					tel: '923-230-7051 x03774',
					address: '68596 Violet Avenue',
					opening_hours: '08:00',
					description: 'mollitia',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=53.66194589305873',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 1,
				},
			},
			{
				id: 101,
				text: 'Expedita odio officia inventore.',
				UserId: 2,
				RestaurantId: 1,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 1,
					name: 'Bianka Hagenes',
					tel: '(390) 804-3355',
					address: '0241 Leone Loaf',
					opening_hours: '08:00',
					description:
						'Non est soluta sit modi.\nUllam veritatis ut odit et eius.\nNihil cumque quaerat voluptatem eaque eum.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=65.0341626858032',
					viewCounts: 2,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-30T13:25:16.000Z',
					CategoryId: 5,
				},
			},
			{
				id: 104,
				text: 'Alias qui iure alias illum voluptas sit id voluptates nulla.',
				UserId: 2,
				RestaurantId: 4,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 4,
					name: 'Mariam Blanda',
					tel: '591.692.0930 x624',
					address: '491 Imelda Valleys',
					opening_hours: '08:00',
					description: 'modi et distinctio',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=96.30459475740184',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 4,
				},
			},
			{
				id: 116,
				text: 'Fuga aliquam voluptatibus blanditiis cumque voluptas in distinctio aliquam non.',
				UserId: 2,
				RestaurantId: 16,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 16,
					name: 'Ms. Layla Hartmann',
					tel: '230.051.9040 x0584',
					address: '61027 Rodriguez Manor',
					opening_hours: '08:00',
					description:
						'Quia et non odit aut pariatur velit sit dolorem. Quia sed et ut voluptatem dolorem quis ea cumque aliquid. Facilis error voluptas laudantium dolorum rerum repellendus magni ut.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=27.289709885652158',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 1,
				},
			},
			{
				id: 117,
				text: 'Maiores expedita sed dolore.',
				UserId: 2,
				RestaurantId: 17,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 17,
					name: 'Loraine Gottlieb',
					tel: '969-313-9960',
					address: '550 Mackenzie Lake',
					opening_hours: '08:00',
					description: 'Voluptatem pariatur est nam enim omnis eveniet.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=74.13030861415997',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 5,
				},
			},
			{
				id: 119,
				text: 'Ad dolor et aliquid et voluptate.',
				UserId: 2,
				RestaurantId: 19,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 19,
					name: 'Brycen Trantow',
					tel: '1-461-778-8514',
					address: '4632 German Points',
					opening_hours: '08:00',
					description:
						'Omnis explicabo possimus non.\nDeserunt ea asperiores occaecati nemo rem.\nSint reiciendis velit laborum aliquam aliquid.\nTenetur reprehenderit cupiditate ut deleniti non et asperiores assumenda ex.\nEst consequatur sed et.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=79.89596483688825',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 1,
				},
			},
			{
				id: 125,
				text: 'Blanditiis quae quod at odit cupiditate voluptatum rerum repellendus.',
				UserId: 2,
				RestaurantId: 25,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 25,
					name: 'Shanon Marvin',
					tel: '760-674-9296',
					address: '063 Scot Walk',
					opening_hours: '08:00',
					description:
						'Perspiciatis molestias aut debitis qui quos adipisci ad doloremque. Veniam nemo omnis culpa est doloribus consectetur possimus earum illum. Sint ut ipsam vitae laudantium omnis. Mollitia molestiae sit.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=62.374592863878235',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 4,
				},
			},
			{
				id: 132,
				text: 'Expedita voluptatum laboriosam eos.',
				UserId: 2,
				RestaurantId: 32,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 32,
					name: 'Clement Schmidt V',
					tel: '(478) 931-0876 x1274',
					address: '37703 Rau Cliff',
					opening_hours: '08:00',
					description:
						'Quidem et ipsam ab velit voluptatem. Alias aut est aut voluptatum accusamus qui aspernatur. Recusandae et placeat impedit. Est est fuga consequuntur rerum dolorem est. Beatae mollitia inventore accusamus.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=79.53846070909569',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 2,
				},
			},
			{
				id: 135,
				text: 'Laudantium in deleniti earum dolor ut aut eos voluptatibus.',
				UserId: 2,
				RestaurantId: 35,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 35,
					name: 'Jeanie Erdman',
					tel: '(148) 542-5593 x2544',
					address: '023 Alice Trafficway',
					opening_hours: '08:00',
					description:
						'Dolorum provident voluptas qui odio quas inventore quibusdam nihil. Ullam aut quia et et. Et ducimus ad nihil atque.\n \rAdipisci numquam voluptates minima. Et voluptatem voluptas quos rem illum. Voluptatem blanditiis praesentium doloremque culpa quaerat ullam recusandae. Eius mollitia sint sit aliquam voluptatem quas quis cupiditate enim. Praesentium ut dignissimos tenetur aliquam optio laboriosam rem accusamus. Quasi eos ut et dolore delectus vel ducimus nam asperiores.\n \rSit iure asperiores. Cumque minima non dolores. Sit vel dolores. Nesciunt dolor et provident atque molestiae voluptatem omnis eveniet.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=50.327992268945735',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 4,
				},
			},
			{
				id: 137,
				text: 'Necessitatibus sit rerum voluptatem quos eveniet quidem.',
				UserId: 2,
				RestaurantId: 37,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 37,
					name: 'Virginia Marquardt',
					tel: '1-718-001-4774',
					address: '66263 Jast Curve',
					opening_hours: '08:00',
					description: 'cumque',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=69.24231973193625',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 2,
				},
			},
			{
				id: 138,
				text: 'Commodi adipisci sapiente consequatur aut.',
				UserId: 2,
				RestaurantId: 38,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 38,
					name: 'Jamir Torp',
					tel: '956-840-9629',
					address: '0547 Tina Burg',
					opening_hours: '08:00',
					description: 'sed',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=75.6137991087338',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 3,
				},
			},
			{
				id: 144,
				text: 'Sed eius laudantium voluptates dolores.',
				UserId: 2,
				RestaurantId: 44,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 44,
					name: 'Alessandra Nader',
					tel: '(039) 185-7599',
					address: '6017 Holden Corner',
					opening_hours: '08:00',
					description:
						'Et expedita non. Minima repudiandae voluptate labore quaerat aliquid ipsum. Ullam est aut illum rerum et dolorum qui omnis corrupti.',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=48.51209339364202',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 5,
				},
			},
			{
				id: 149,
				text: 'Voluptate laboriosam provident quia sint in nemo aliquid.',
				UserId: 2,
				RestaurantId: 49,
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
				Restaurant: {
					id: 49,
					name: 'Colby Morissette',
					tel: '(625) 858-1021 x6818',
					address: '0474 Greg Valley',
					opening_hours: '08:00',
					description: 'laborum',
					image:
						'https://loremflickr.com/320/240/restaurant,food/?random=65.56942394338911',
					viewCounts: 0,
					createdAt: '2022-05-03T09:04:29.000Z',
					updatedAt: '2022-05-03T09:04:29.000Z',
					CategoryId: 2,
				},
			},
		],
		FavoritedRestaurants: [],
		Followers: [],
		Followings: [],
	},
	isFollowed: false,
}
export default {
	name: 'UserEdit',
	data() {
		return {
			user: {
				id: -1,
				name: '',
				email: '',
				isAdmin: false,
				image: '',
			},
		}
	},
	methods: {
		fetchUser: function (userId) {
			//TODO: 向後端取得使用者資料
			const { id, name, email, isAdmin, image } = dummyData.profile
			this.user = {
				...this.user,
				id,
				name,
				email,
				isAdmin,
				image,
			}
		},
		handleFileChange: function (event) {
			const files = event.target.files
			if (files.length === 0) {
				this.user.image = ''
				return
			}
			this.user.image = window.URL.createObjectURL(files[0])
		},
		handleSubmit: function (event) {
			const formData = new FormData(event.target)
			// TODO: 傳表單結果到後端
			for (let [name, value] of formData.entries()) {
				console.log(name + ': ' + value)
			}
		},
	},
	created() {
		this.fetchUser()
	},
}
</script>
