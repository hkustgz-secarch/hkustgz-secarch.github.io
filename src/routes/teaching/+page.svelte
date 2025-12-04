<script lang="ts">
	import { peopleData } from '$lib/data/people';

	const teachers = peopleData.filter((p) => p.teaching && p.teaching.length > 0);
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
	<h1 class="text-4xl font-bold mb-8">Teaching</h1>

	<div class="space-y-12">
		{#each teachers as teacher}
			<section>
				<ul class="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
					{#each teacher.teaching || [] as course}
						<li>{course}</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>
</div>
