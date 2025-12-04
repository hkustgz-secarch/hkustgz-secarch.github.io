<script lang="ts">
	import { publicationData } from '$lib/data/publications';
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
	<h1 class="text-4xl font-bold mb-8">Publications</h1>

	<div class="space-y-6">
		{#each publicationData as pub}
			<div class="flex flex-col">
				<p class="text-lg text-gray-800">
					{@html pub.authors.join(', ')}. 
					<span class="font-bold">{pub.title}</span>,  
					<span class="italic">{pub.venue}</span>, {pub.year}.
				</p>
				<div class="flex gap-3 mt-1 text-base font-medium">
					{#if pub.paperUrl}
						<a href={pub.paperUrl} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 hover:underline transition-colors">[Paper]</a>
					{/if}
					{#if pub.codeUrl}
						<a href={pub.codeUrl} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 hover:underline transition-colors">[Code]</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
