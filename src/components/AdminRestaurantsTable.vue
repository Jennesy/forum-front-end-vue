<template>
	<table class="table">
		<thead class="thead-dark">
			<tr>
				<th scope="col">#</th>
				<th scope="col">Category</th>
				<th scope="col">Name</th>
				<th scope="col" width="300">操作</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="restaurant in restaurants" :key="restaurant.id">
				<th scope="row">
					{{ restaurant.id }}
				</th>
				<td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
				<td>{{ restaurant.name }}</td>
				<td class="d-flex justify-content-between">
					<router-link
						:to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
						class="btn btn-link"
						>Show</router-link
					>

					<router-link
						:to="{
							name: 'admin-restaurant-edit',
							params: {
								id: restaurant.id,
							},
						}"
						class="btn btn-link"
						>Edit</router-link
					>

					<button
						type="button"
						class="btn btn-link"
						@click.stop.prevent="deleteRestaurant(restaurant.id)"
					>
						Delete
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
const dummyData = {
	restaurants: [
		{
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
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 2,
			name: 'Dexter Russel',
			tel: '675-272-8591',
			address: '22983 Mafalda Walk',
			opening_hours: '08:00',
			description: 'eum',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=96.05272417065159',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 3,
			Category: {
				id: 3,
				name: '義大利料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 5,
			name: 'Johnathan Effertz II',
			tel: '(434) 474-4702',
			address: '2529 Bauch Knoll',
			opening_hours: '08:00',
			description:
				'Officiis voluptatem a suscipit. Animi praesentium molestiae perspiciatis eum fuga similique. Labore dolores rem quos. Et sint voluptatum quia.\n \rTenetur voluptatem corrupti. Sed non amet. Rerum illo recusandae voluptatem excepturi ut dolore et. At tempora laborum repellendus quia consequatur iure. Quaerat totam eos sit velit. Accusantium et quibusdam qui.\n \rProvident animi quos harum qui sunt. Voluptate odio impedit enim veritatis et consequatur quia aliquam id. Blanditiis ducimus magni libero aspernatur ipsa qui voluptate natus. Quisquam velit sed provident cum alias quo laudantium.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=83.92664881398255',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 5,
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 6,
			name: 'Maegan Beer',
			tel: '553-817-3726',
			address: '555 Martina Islands',
			opening_hours: '08:00',
			description:
				'Voluptas accusamus aliquam ipsa cumque sed et possimus nisi harum. Eos a omnis. Itaque nobis similique quibusdam ea corporis molestiae. Necessitatibus iste ipsa quas autem perferendis quis enim et est. Animi odit enim architecto quisquam. Tenetur quaerat odio et reprehenderit et voluptas.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=5.0785066904685205',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 3,
			Category: {
				id: 3,
				name: '義大利料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 3,
				name: '義大利料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 8,
			name: 'Maiya Hirthe',
			tel: '1-272-512-8795 x1769',
			address: '3814 Powlowski Stream',
			opening_hours: '08:00',
			description: 'Voluptatem velit rem similique magni quaerat commodi aut.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=23.701688205555183',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 3,
			Category: {
				id: 3,
				name: '義大利料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 10,
			name: 'Amina Lowe',
			tel: '462-047-2398 x4196',
			address: '62749 Cooper Park',
			opening_hours: '08:00',
			description: 'Numquam quis veritatis quo hic nobis consequatur.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=3.4534531976471383',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 1,
			Category: {
				id: 1,
				name: '中式料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 13,
			name: 'Trystan Langosh',
			tel: '1-608-176-3729 x1090',
			address: '9631 Clarissa Valleys',
			opening_hours: '08:00',
			description:
				'Voluptas laborum quae omnis.\nPerferendis quo nisi eum maiores voluptates itaque dignissimos sint.\nEligendi dolorem eaque impedit aut.\nCorrupti deleniti quisquam suscipit quos.\nUt voluptatem cumque voluptas sit quia consequatur vitae quia.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=9.57714377221517',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 4,
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 14,
			name: 'Rowan Kohler',
			tel: '1-245-685-9862',
			address: '2209 Lowe Motorway',
			opening_hours: '08:00',
			description: 'sit',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=36.2426398722983',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 4,
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 15,
			name: 'Catalina White',
			tel: '259-969-9733 x2328',
			address: '47496 Raegan Meadows',
			opening_hours: '08:00',
			description: 'Ipsum qui deleniti consequatur est.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=42.08323938854441',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 5,
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 1,
				name: '中式料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 18,
			name: 'Miles Barrows',
			tel: '1-182-474-7897 x71845',
			address: '0024 Kailee Common',
			opening_hours: '08:00',
			description:
				'Similique velit amet tempore libero dolorem. Voluptatem rerum tempora qui non illo illum nihil. Recusandae quaerat et qui autem. Rerum occaecati eius repellendus maxime earum vel necessitatibus sit. Eos iusto explicabo veritatis cumque iste amet delectus.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=10.846011778679543',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 4,
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 1,
				name: '中式料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 20,
			name: 'Jakayla Blanda',
			tel: '419.011.5626 x283',
			address: '03984 Kunde Shores',
			opening_hours: '08:00',
			description: 'provident cum ipsam',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=27.231307935441464',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 5,
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 1,
				name: '中式料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 22,
			name: 'Braeden Miller DDS',
			tel: '204.981.7217',
			address: '19299 McClure Streets',
			opening_hours: '08:00',
			description:
				'Aut voluptatem accusantium eos architecto rem. Animi dignissimos non aut mollitia repellendus est. Perferendis mollitia aperiam.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=51.52826846608492',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 4,
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 1,
				name: '中式料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 24,
			name: 'Antonette Hirthe',
			tel: '1-541-231-4910 x21647',
			address: '479 Amos Dale',
			opening_hours: '08:00',
			description:
				'Rerum aperiam et nisi vel magni esse. Assumenda sed qui alias quo aut alias voluptates ducimus. Quaerat facilis iste atque adipisci fuga sunt hic. Et ea dolores tempore ea id animi dolorem placeat.\n \rSint distinctio impedit aut impedit. Qui nemo natus esse aut ipsum molestiae iusto tempora repellat. Labore vitae praesentium dicta voluptatibus. Omnis libero vel. Enim voluptas est at quia non.\n \rExcepturi cupiditate consequatur non error quibusdam natus qui soluta. Qui quasi dicta nesciunt rerum aut nihil. Possimus vel eius ratione nam perspiciatis perferendis culpa est. Quia eum quia doloremque et quisquam cupiditate quo est nostrum. Fugit soluta voluptatem quo aut architecto. Tenetur ducimus et distinctio iusto est dolore est.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=32.18432694930233',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 5,
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 28,
			name: 'Blanche Jacobi',
			tel: '136-932-2090 x46520',
			address: '07523 Gene Burg',
			opening_hours: '08:00',
			description:
				'Non et commodi quos.\nMaiores corporis quis minima quis nobis excepturi praesentium quia nihil.\nLibero aut soluta dolore sint quae laborum nesciunt illo.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=76.13630285004318',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 1,
			Category: {
				id: 1,
				name: '中式料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 29,
			name: 'Jackie Dare',
			tel: '576.682.1718',
			address: '5437 Konopelski Street',
			opening_hours: '08:00',
			description:
				'Nisi expedita fugiat non ea voluptatem est tempore.\nSint id et ut nobis et et.\nCorrupti ducimus laudantium amet dolore.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=91.12985151382316',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 1,
			Category: {
				id: 1,
				name: '中式料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 30,
			name: 'Elisabeth Lind',
			tel: '128.193.0865 x42707',
			address: '1390 Bartoletti Ville',
			opening_hours: '08:00',
			description:
				'Nulla qui quod doloremque accusantium corrupti dolorum et dolor. Debitis eos unde aut dolorum commodi distinctio dolorem. Consequatur accusamus sed. Id voluptatem eius quas impedit aspernatur rerum sint qui.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=58.03149227455335',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 3,
			Category: {
				id: 3,
				name: '義大利料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 2,
				name: '日本料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 33,
			name: 'Miss Judson Berge',
			tel: '(389) 813-8605 x14247',
			address: '5790 Roselyn Knolls',
			opening_hours: '08:00',
			description: 'Cum ab perspiciatis quae aut eos impedit quidem eius.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=44.111887442416986',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 5,
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 34,
			name: 'Yasmine Howe III',
			tel: '(221) 463-9742 x7929',
			address: '212 Upton Creek',
			opening_hours: '08:00',
			description:
				'Consequatur ratione sit et. Maiores rem reiciendis accusamus totam consequuntur est voluptates tempora. Rerum modi aut. Quis modi rem et. Omnis dignissimos adipisci at enim dolorem.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=16.537696793520507',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 2,
			Category: {
				id: 2,
				name: '日本料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 1,
				name: '中式料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 2,
				name: '日本料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 3,
				name: '義大利料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 40,
			name: 'Marvin Kohler',
			tel: '263-038-9013 x24944',
			address: '8079 McClure Summit',
			opening_hours: '08:00',
			description: 'Tenetur iste mollitia autem.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=10.028441249544674',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 4,
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 42,
			name: 'Stacey Mayer',
			tel: '080-679-9227 x48805',
			address: '23241 Hickle Square',
			opening_hours: '08:00',
			description:
				'Facilis adipisci ullam maxime voluptate nostrum. Id beatae ut optio. Sunt voluptatem deleniti nesciunt architecto labore quod.',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=92.57518689528037',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 5,
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
			id: 45,
			name: 'Kaylah Gaylord',
			tel: '958.571.4950',
			address: '5785 Janiya Divide',
			opening_hours: '08:00',
			description: 'quia',
			image:
				'https://loremflickr.com/320/240/restaurant,food/?random=40.782153488503866',
			viewCounts: 0,
			createdAt: '2022-05-03T09:04:29.000Z',
			updatedAt: '2022-05-03T09:04:29.000Z',
			CategoryId: 5,
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 1,
				name: '中式料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 4,
				name: '墨西哥料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 2,
				name: '日本料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
		{
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
			Category: {
				id: 5,
				name: '素食料理',
				createdAt: '2022-05-03T09:04:29.000Z',
				updatedAt: '2022-05-03T09:04:29.000Z',
			},
		},
	],
}

export default {
	data() {
		return {
			restaurants: [],
		}
	},
	created() {
		this.fetchRestaurants()
	},
	methods: {
		fetchRestaurants() {
			this.restaurants = dummyData.restaurants
		},
		deleteRestaurant(restaurantId) {
			this.restaurants = this.restaurants.filter(
				(restaurant) => restaurant.id !== restaurantId
			)
		},
	},
}
</script>
