<script lang="ts">
	import { publicationData, ResearchTag } from '$lib/data/publications';
	const filteredPublications = publicationData.filter(pub => pub.tags?.includes(ResearchTag.UarchAttacks));
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
	<a href="/research" class="text-blue-600 hover:underline mb-4 inline-block">Back to Research</a>
	<h1 class="text-4xl font-bold mb-6">Microarchitectural Attacks</h1>
	<div class="prose max-w-none">
		<p class="text-xl text-gray-600 mb-8">
			As modern processors (eg, CPU and GPU) integrate complex microarchitecture features to optimize performance, they inadvertently introduce new security vulnerabilities. This complexity creates opportunities for attackers to exploit microarchitectural side channels to leak sensitive information, and meanwhile, makes defending against such attacks more challenging.
		</p>
		<p class="text-xl text-gray-600 mb-8">
			To this end, we investigate the security implications of hardware design, focusing on side-channel vulnerabilities and transient execution attacks. Our research aims to identify and analyze these stealthy and underexplored threats within modern microarchitectures, such as cache attacks, transient execution attacks and prefetcher-based attacks etc, across various xPUs.
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
						{#if pub.slidesUrl}
							<a href={pub.slidesUrl} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 hover:underline transition-colors">[Slides]</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
