<script lang="ts">
	import type { PageData } from './$types';
	import { publicationData } from '$lib/data/publications';

	export let data: PageData;
	$: person = data.person;
	$: personPublications = publicationData.filter(pub => pub.authors.includes(person.name));
</script>

<div class="mx-auto max-w-7xl px-4 py-12">
	<div class="flex flex-col md:flex-row gap-12 justify-center">
		<!-- Left Column: Personal Info -->
		<div class="w-full md:w-64 shrink-0">
			<div class="sticky top-8">
				<div class="aspect-square w-40 mx-auto overflow-hidden rounded-full bg-gray-100 mb-4">
					<img
						src={person.image}
						alt={person.name}
						class="w-full h-full object-cover object-center"
					/>
				</div>
				<h1 class="text-2xl font-bold text-gray-900 mb-2">{person.name}</h1>
				<p class="text-gray-600 font-medium mb-4">{person.role}</p>

				<div class="space-y-1 text-sm">
					{#if person.email}
						<div class="flex items-start gap-2 text-gray-600">
							<span class="font-semibold">Email:</span>
							<a href="mailto:{person.email}" class="hover:text-blue-600 break-all">{person.email}</a>
						</div>
					{/if}

					{#if person.location}
						<div class="flex items-start gap-2 text-gray-600">
							<span class="font-semibold">Office:</span>
							<span>{person.location}</span>
						</div>
					{/if}
					
					{#if person.website}
						<div class="flex items-start gap-2 text-gray-600">
							<span class="font-semibold">Website:</span>
							<a href={person.website} target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 break-all">{person.website}</a>
						</div>
					{/if}

                    <div class="flex flex-wrap gap-3 mt-4">
                        {#if person.googleScholar}
                            <a href={"https://scholar.google.com/citations?user=" + person.googleScholar} target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-blue-600 transition-colors" title="Google Scholar">
                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
                            </a>
                        {/if}
                        {#if person.github}
                            <a href={"https://github.com/" + person.github} target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 transition-colors" title="GitHub">
                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </a>
                        {/if}
                        {#if person.linkedin}
                            <a href={"https://www.linkedin.com/in/" + person.linkedin} target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-blue-700 transition-colors" title="LinkedIn">
                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        {/if}
                    </div>
				</div>
			</div>
		</div>

		<!-- Center Column: Content -->
		<div class="w-full max-w-3xl space-y-12">
			<!-- Bio -->
			<section>
				<div class="prose max-w-none text-gray-700 leading-snug">
					<p>{@html person.bio}</p>
				</div>
			</section>

			<!-- Teaching -->
			<section>
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Teaching</h2>
				{#if person.teaching && person.teaching.length > 0}
					<ul class="list-disc list-inside space-y-2 text-gray-700">
						{#each person.teaching as item}
							<li>{item}</li>
						{/each}
					</ul>
				{:else}
					<p class="text-gray-500 italic">No teaching information available.</p>
				{/if}
			</section>

			<!-- Service -->
			<section>
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Service</h2>
				{#if person.service && person.service.length > 0}
					<ul class="list-disc list-inside space-y-2 text-gray-700">
						{#each person.service as item}
							<li>{item}</li>
						{/each}
					</ul>
				{:else}
					<p class="text-gray-500 italic">No service information available.</p>
				{/if}
			</section>

			<!-- Publications -->
			<section>
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Publications</h2>
				{#if personPublications.length > 0}
					<div class="space-y-6">
						{#each personPublications as pub}
							<div class="flex flex-col">
								<p class="text-lg text-gray-800">
									{@html pub.authors.join(', ')}. 
									<a href="/publications" class="font-bold hover:text-blue-600 hover:underline transition-colors">{pub.title}</a>,  
									<span class="italic">{pub.venue}</span>, {pub.year}.
								</p>
							</div>
						{/each}
					</div>
				{:else}
					<p class="text-gray-500 italic">No publications available.</p>
				{/if}
			</section>
		</div>
	</div>
</div>
