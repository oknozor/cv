<script lang="ts">
	import type { Experience } from '$lib';
	import CalendarIcon from './icons/CalendarIcon.svelte';
	import SuitcaseIcon from './icons/SuitcaseIcon.svelte';
	import LocationIcon from './icons/LocationIcon.svelte';

	import decathlon from '$lib/assets/decathlon_logo.jpg';
	import ineat from '$lib/assets/ineat_conseil_logo.jpg';
	import lm from '$lib/assets/leroy_merlin_logo.jpg';
	import qwant from '$lib/assets/qwant.jpg';
	import agicap from '$lib/assets/agicap_logo.png';

	export let experience: Experience;

	let image_logo = ineat;
	if (experience.logo === 'LM') {
		image_logo = lm;
	} else if (experience.logo === 'Qwant') {
		image_logo = qwant;
	} else if (experience.logo === 'Decathlon') {
		image_logo = decathlon;
	} else if (experience.logo === 'Agicap') {
		image_logo = agicap;
	}
</script>

<div class="bg-slate-100 p-3 rounded-xl max-w-2xl">
	<div class="flex flex-row justify-items-center">
		<img class="w-10 h-10 mr-5" alt="{experience.company}-logo" src={image_logo} />
		<div>
			<h3 class="font-bold text-lg pb-1">{experience.company}</h3>
			<div class="flex flex-row gap-5 text-xs text-slate-500 pb-4">
				<span class="flex flex-row gap-2"
					><CalendarIcon />{experience.start} - {experience.end}</span
				>
				<span class="flex flex-row gap-2"><SuitcaseIcon />{experience.position}</span>
				<span class="flex flex-row gap-2"><LocationIcon />{experience.location}</span>
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
						<span class="text-slate-600">{project.techStack.join(', ')}</span>
					</span>
					<span class="flex flex-col">
						<span class="underline">Methodology </span>
						<span class="text-slate-600">{project.methodology.join(', ')}</span>
					</span>
				</div>
			</div>
		{/each}
	</div>
</div>
