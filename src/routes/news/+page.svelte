<script lang="ts">
	import { newsData } from '$lib/data/news';

    // Sort news by date descending
    const sortedNews = [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
	<h1 class="text-4xl font-bold mb-8">News</h1>
	
    <div class="space-y-8">
        {#each sortedNews as item}
            <div class="border-l-4 border-blue-800 pl-6 py-2">
                <div class="text-sm text-gray-500 mb-1">{item.date}</div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                </h3>
                {#if item.description}
                    <p class="text-gray-600">{@html item.description}</p>
                {/if}
            </div>
        {/each}
    </div>
</div>
