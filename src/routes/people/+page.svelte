<script lang="ts">
	import { peopleData } from '$lib/data/people';

	const director = peopleData
		.filter((p) => p.role.includes('Faculty'))
		.map((p) => ({
			...p,
			link: `/people/${p.slug}`
		}));

	const students = peopleData
		.filter((p) => !p.role.includes('Faculty'))
		.map((p) => ({
			...p,
			link: `/people/${p.slug}`
		}));

	const alumni: typeof director = [];
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
	<h1 class="text-4xl font-bold mb-8">People</h1>
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6">Director</h2>
		<div class="flex flex-wrap gap-6 justify-center sm:justify-start">
			{#each director as person}
				<a href={person.link} class="group block w-44">
					<div
						class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
					>
						<div class="aspect-square w-full overflow-hidden bg-gray-100">
							<img
								src={person.image}
								alt={person.name}
								class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
							/>
						</div>
						<div class="p-4">
							<h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-600">
								{person.name}
							</h3>
							<p class="text-sm text-gray-600">{person.role}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6">Students</h2>
		<div class="flex flex-wrap gap-6 justify-center sm:justify-start">
			{#each students as person}
				<a href={person.link} class="group block w-44">
					<div
						class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
					>
						<div class="aspect-square w-full overflow-hidden bg-gray-100">
							<img
								src={person.image}
								alt={person.name}
								class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
							/>
						</div>
						<div class="p-4">
							<h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-600">
								{person.name}
							</h3>
							<p class="text-sm text-gray-600">{person.role}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section>
		<h2 class="text-2xl font-semibold mb-6">Alumni</h2>
		<div class="flex flex-wrap gap-6 justify-center sm:justify-start">
			{#each alumni as person}
				<a href={person.link} class="group block w-44">
					<div
						class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
					>
						<div class="aspect-square w-full overflow-hidden bg-gray-100">
							<img
								src={person.image}
								alt={person.name}
								class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
							/>
						</div>
						<div class="p-4">
							<h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-600">
								{person.name}
							</h3>
							<p class="text-sm text-gray-600">{person.role}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>

