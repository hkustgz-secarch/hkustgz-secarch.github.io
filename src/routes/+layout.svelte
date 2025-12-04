<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import ustgzLogo from '$lib/assets/ustgz-logo-zh.svg';
	import { page } from '$app/stores';
	
	let { children } = $props();

	const navItems = [
		{ name: 'About SecArch', href: '/' },
		{ name: 'People', href: '/people' },
		{ name: 'Research', href: '/research' },
		{ name: 'Publications', href: '/publications' },
		{ name: 'Teaching', href: '/teaching' },
		{ name: 'Join Us', href: '/join-us' }
	];

	let title = $derived.by(() => {
		const path = $page.url.pathname;
		if (path === '/') return 'SecArch Lab';

		const segment = path.split('/')[1];
		const matchingItem = navItems.find((item) => item.href === `/${segment}`);

		if (matchingItem) {
			return `${matchingItem.name} | SecArch`;
		}

		if (segment) {
			const name = segment.charAt(0).toUpperCase() + segment.slice(1);
			return `${name} | SecArch`;
		}

		return 'SecArch Lab';
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
	<title>{title}</title>
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-gray-900" style="font-family: 'Karla', sans-serif;">
	<!-- Header -->
	<header class="pt-10 pb-2">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
			<div class="mb-10 flex flex-col items-center">
				<div class="flex flex-row items-center justify-center gap-4">
					<img src={ustgzLogo} alt="HKUST(GZ) Logo" class="h-14" />
				</div>
				<p class="text-4xl text-gray-700 mt-6 font-bold leading-none">Secure Architecture Lab</p>
			</div>
		</div>
			
		<div class="w-full border-t border-gray-300 mb-4"></div>
			
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
			<!-- Navigation -->
			<nav>
				<ul class="flex flex-wrap justify-center gap-x-8 gap-y-1">
					{#each navItems as item}
						<li>
							<a 
								href={item.href} 
								class="text-sm font-regular uppercase tracking-wider text-gray-600 hover:text-blue-700 transition-colors"
							>
								{item.name}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</header>

	<!-- Main Content -->
	<main class="flex-grow">
		{@render children()}
	</main>

		<!-- Footer -->
	<footer class="py-6 mt-auto">
		<div class="max-w-4xl mx-auto px-4 text-left text-sm text-gray-500 flex justify-between items-center">
			<p>&copy; {new Date().getFullYear()} SecArch Lab, HKUST(GZ). All rights reserved.</p>
			<button
				onclick={scrollToTop}
				class="p-2 hover:text-gray-900 transition-colors cursor-pointer"
				aria-label="Back to top"
			>
				<span class="inline-block transform rotate-90 text-lg font-bold">&lt;</span>
			</button>
		</div>
	</footer>
</div>
