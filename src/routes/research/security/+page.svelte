<script lang="ts">
	import { publicationData, ResearchTag } from '$lib/data/publications';
	const filteredPublications = publicationData.filter(pub => pub.tags?.includes(ResearchTag.Security));
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
	<a href="/research" class="text-blue-600 hover:underline mb-4 inline-block">Back to Research</a>
	<h1 class="text-4xl font-bold mb-6">Trusted Computing and System Security</h1>
	<div class="prose max-w-none">
		<p class="text-xl text-gray-600 mb-8">
			The hardware designs are evolving rapidly to meet the demands of modern computing, but this evolution often outpaces the development of effective security measures. Consequently, systems are increasingly vulnerable to sophisticated attacks that exploit hardware and software interactions.
		</p>
		<p class="text-xl text-gray-600 mb-8">
			We design secure systems through hardware-software co-design, leveraging Trusted Execution Environments (TEEs) and advanced security mechanisms. By leveraging our expertise in side-channel attacks and defenses, we focus more on building foundamentally secure systems rather than patching existing vulnerabilities.
		</p>
		
		<h2 class="text-2xl font-bold mt-12 mb-6">Projects</h2>
		
		<h2 class="text-2xl font-bold mt-12 mb-6">Publications</h2>
		<div class="space-y-6 ml-2">
			{#each filteredPublications as pub}
				<div class="flex flex-col">
					<p class="text-lg text-gray-800">
						{@html pub.authors.join(', ')}. 
						<span class="font-bold">{pub.title}</span>,  
						<span class="italic">{pub.venue}</span>, {pub.year}.
					</p>
					<div class="flex gap-3 mt-1 text-base font-medium">
						{#if pub.highlight}
							<span class="text-red-600 font-bold">{pub.highlight}</span>
						{/if}
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
</div>
