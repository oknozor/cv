<script lang="ts">
	import type { Experience } from '$lib';
	import CalendarIcon from './icons/CalendarIcon.svelte';
	import SuitcaseIcon from './icons/SuitcaseIcon.svelte';
	import LocationIcon from './icons/LocationIcon.svelte';

	export let experience: Experience;
</script>

<div class="bg-slate-100 p-3 rounded-xl max-w-2xl">
	<div class="flex flex-row justify-items-center">
		<img class="w-10 h-10  mr-5" alt="{experience.company}-logo" src="/{experience.logo}" />
		<div>
			<h3 class="font-bold text-lg pb-1">{experience.company}</h3>
			<div class="flex flex-row gap-5 text-xs text-slate-500 pb-4">
				<span class="flex flex-row gap-2"><CalendarIcon/>{experience.start} - {experience.end}</span>
				<span class="flex flex-row gap-2"><SuitcaseIcon/>{experience.position}</span>
				<span class="flex flex-row gap-2"><LocationIcon/>{experience.location}</span>
			</div>
		</div>
	</div>


	<div class="flex flex-col gap-2">
		{#each experience.projects as project}
			<div class="flex flex-col">
				<span class="text-lg font-bold">{project.name}</span>
				<span class="pb-2">{project.description}</span>
				<div class="flex flex-col gap-2">
					<span class="flex flex-col">
						<span class="underline">Stack</span>
						<span class="text-slate-600">{project.techStack.join(", ")}</span>
					</span>
					<span class="flex flex-col">
						<span class="underline">Methodology </span>
						<span class="text-slate-600">{project.methodology.join(", ")}</span>
					</span>
				</div>
			</div>
		{/each}
	</div>
</div>

