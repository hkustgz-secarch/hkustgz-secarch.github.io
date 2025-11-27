<script lang="ts">
	const news = [
		{
			title: 'Lab Website Launched',
			shortmsg: 'We are excited to launch our new lab website! Stay tuned for updates on our research and activities.',
			link: '/'
		},
	];
</script>

<style>
	/* Custom scrollbar for news section */
	.custom-scrollbar::-webkit-scrollbar {
		width: 6px;
	}
	.custom-scrollbar::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 4px;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: #d1d5db;
		border-radius: 4px;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb:hover {
		background: #9ca3af;
	}
</style>

<div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
	<!-- Hero / Intro Section -->
	<section class="lg:col-span-3 prose prose-lg max-w-none text-gray-700 text-lg">
		<p>
			<strong>SecArch Lab</strong> is a computer architecture group affiliated with <a href="https://mics.hkust-gz.edu.cn" class="text-blue-700 hover:underline">Microelectronics Thrust</a> at
            <a href="https://www.hkust-gz.edu.cn/" class="text-blue-700 hover:underline">Hong Kong University of Science and Technology (Guangzhou)</a>, led by <a href="https://yunchen-juuuump.github.io" class="text-blue-700 hover:underline">Prof. Yun Chen</a>.
        </p>
        <p>
			Our research focuses on the intersection of computer architecture and security. 
			We aim to build secure and reliable computing systems by understanding the vulnerabilities in modern hardware and designing robust defenses.
			Our work spans across the computing stack, from microarchitecture to heterogeneous system.
		</p>
	</section>

	<!-- News Section -->
	<section class="lg:col-span-1 lg:border-l lg:border-gray-300 lg:pl-8">
		<h2 class="text-2xl font-bold text-gray-900 mb-2">News</h2>
		<hr class="border-t-2 border-gray-700 mb-4" />
		<div class="space-y-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
			{#each news as item}
				<article>
					<h3 class="text-base font-semibold text-gray-900">
						<a href={item.link} class="hover:text-blue-700">{item.title}</a>
					</h3>
					<p class="text-sm text-gray-600 mt-1">
						{item.shortmsg}
					</p>
				</article>
			{/each}
		</div>
	</section>
</div>
