<script lang="ts">
	const researchAreas = [
		{
			title: 'High Performance Computer Architecture',
			description: 'Exploring innovative architectural designs offers insights into enhancing system performance and efficiency.',
			link: '/research/architecture'
		},
		{
			title: 'Microarchitectural Attacks',
			description: 'The complexity of modern microarchitectures introduce new security vulnerabilities. We aims to hunt down these vulnerabilities and their root causes.',
			link: '/research/uarchattacks'
		},
		{
			title: 'Trusted Computing and System Security',
			description: 'As more flaws arise in computer systems, designing reliable and secure systems becomes increasingly critical.',
			link: '/research/security'
		}
	];
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
	<h1 class="text-4xl font-bold mb-12">Research</h1>

	<div>
		{#each researchAreas as area}
			<div
				class="bg-white rounded-xl overflow-hidden"
			>
				<div class="p-7">
					<h2 class="text-2xl font-bold mb-2">
						<a href={area.link} class="text-gray-900 hover:text-blue-600 transition-colors">
							{area.title}
						</a>
					</h2>
					<p class="text-gray-600 leading-relaxed text-lg">
						{area.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
