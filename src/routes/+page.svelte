<script lang="ts">
	import { newsData } from '$lib/data/news';

	// Sort news by date descending and take the top 5 for the homepage
	const recentNews = [...newsData]
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 5);
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

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
	<div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
		<!-- Hero / Intro Section -->
		<section class="lg:col-span-3 prose prose-lg max-w-none text-gray-700 text-lg">
			<p>
				<strong>SecArch Lab</strong> is a computer architecture group affiliated with <a href="https://mics.hkust-gz.edu.cn" class="text-blue-700 hover:underline">Microelectronics Thrust</a> at
				<a href="https://www.hkust-gz.edu.cn/" class="text-blue-700 hover:underline">Hong Kong University of Science and Technology (Guangzhou)</a>, led by <a href="https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/CHEN-Yun/yunchen" class="text-blue-700 hover:underline">Prof. Yun Chen</a>.
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
			<ul class="space-y-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar list-disc pl-5">
				{#each recentNews as item}
					<li class="text-sm text-gray-600">
						{item.title}
					</li>
				{/each}
			</ul>
			<div class="mt-4 text-left">
				<a href="/news" class="text-sm text-blue-600 hover:underline">View all news &rarr;</a>
			</div>
		</section>
	</div>
</div>
