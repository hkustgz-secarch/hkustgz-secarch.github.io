<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import ustgzLogo from '$lib/assets/ustgz-logo-zh.svg';
	
	let { children } = $props();

	const navItems = [
		{ name: 'About', href: '/' },
		{ name: 'People', href: '/people' },
		{ name: 'Research', href: '/research' },
		{ name: 'Publications', href: '/publications' },
		{ name: 'Teaching', href: '/teaching' },
		{ name: 'Join Us', href: '/join-us' }
	];

	let showBackToTop = $state(false);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
	<title>SecArch Lab</title>
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-gray-900" style="font-family: 'Karla', sans-serif;">
	<!-- Header -->
	<header class="py-8">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
			<div class="mb-10 flex flex-col items-center">
				<div class="flex flex-row items-center justify-center gap-4">
					<img src={ustgzLogo} alt="HKUST(GZ) Logo" class="h-14" />
					<span class="text-4xl font-light text-blue-900">|</span>
					<h1 class="text-3xl font-bold tracking-tight text-blue-900 leading-none">SecArch Lab</h1>
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
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			{@render children()}
		</div>
	</main>

		<!-- Footer -->
	<footer class="py-6 mt-auto">
		<div class="max-w-4xl mx-auto px-4 text-left text-sm text-gray-500">
			<p>&copy; {new Date().getFullYear()} SecArch Lab, HKUST(GZ). All rights reserved.</p>
		</div>
	</footer>
</div>

<svelte:window onscroll={() => (showBackToTop = window.scrollY > 200)} />

{#if showBackToTop}
	<button
		onclick={scrollToTop}
		class="fixed bottom-8 right-8 bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 z-50 cursor-pointer"
		aria-label="Back to top"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
		</svg>
	</button>
{/if}
