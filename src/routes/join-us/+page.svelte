<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import 'leaflet/dist/leaflet.css';

	let mapElement: HTMLElement;

	onMount(async () => {
		if (browser) {
			const L = (await import('leaflet')).default;

			// Fix Leaflet's default icon path issues
			// @ts-ignore
			delete L.Icon.Default.prototype._getIconUrl;
			L.Icon.Default.mergeOptions({
				iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
				iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
				shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
			});

			const map = L.map(mapElement).setView([22.891709, 113.476415], 15);

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			}).addTo(map);

			L.marker([22.891709, 113.476415]).addTo(map)
				.bindPopup('<b>HKUST(GZ)</b><br>Secure Architecture Lab')
				.openPopup();
		}
	});
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
	<h1 class="text-4xl font-bold mb-8">Join Us</h1>
	
	<div class="text-lg text-gray-700 mb-12">
		<p>
			We are looking for self-motivated MPhil students, PhD students and research assistants, working on high-performance CPU/GPU architecture, hardware side-channel attacks and mitigations, trusted computing, and LLM for hardware security. If you are interested in joining our group, please contact <b>yunchen AT hkust-gz DOT edu DOT cn</b>, attaching your CV, transcripts and any other materials.
		</p>
	</div>

	<div class="space-y-4">
		<h2 class="text-2xl font-bold text-gray-900">Location</h2>
		<p>
			HKUST(GZ) Campus, No.1 Du Xue Rd, Nansha District, Guangzhou, China. Zip Code: 511453
		</p>
		<!-- Map Container -->
		<div bind:this={mapElement} class="w-full h-96 rounded-lg z-0 border border-gray-200 shadow-sm"></div>
	</div>
</div>
