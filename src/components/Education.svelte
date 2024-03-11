<script lang="ts">
	import type { Education } from '$lib';
	import CalendarIcon from './icons/CalendarIcon.svelte';
	import LocationIcon from './icons/LocationIcon.svelte';

	export let cursus: Education;
</script>

<div class="bg-slate-100 p-3 rounded-lg max-w-2xl">
	<div class="flex flex-row justify-items-center">
		<img class="w-10 h-10 mr-5" alt="{cursus.schoolName}-logo" src="/{cursus.logo}" />
		<div>
			<h3 class="text-lg">{cursus.cursus}</h3>

			<div class="flex flex-row gap-5 text-xs text-slate-500 pb-4">
				<span class="flex flex-row gap-2"><CalendarIcon />{cursus.start} - {cursus.end}</span>
				<a href="https://github.com/{cursus.schoolLink}"><span class="flex flex-row gap-2"><LocationIcon />{cursus.schoolName}</span></a>
			</div>
		</div>
	</div>
</div>