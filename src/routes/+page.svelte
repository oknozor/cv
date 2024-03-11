<script lang="ts">
	import JobExperience from '../components/JobExperience.svelte';
	import { educations, experiences, openSourceProjects } from '$lib/data';
	import OpenSourceProject from '../components/OpenSourceProject.svelte';
	import Education from '../components/Education.svelte';
	import Dot from '../components/icons/Dot.svelte';
	import Contact from '../components/Contact.svelte';
</script>

<main>
	<div class="grid grid-cols-12 gap-4">
		<div class="bg-slate-50 rounded-xl p-4 col-span-3 mb-3 ml-3 mt-3">
			<Contact />
		</div>

		<div class="col-span-8  mb-3 mr-3 mt-3">
			<div class="bg-slate-50 max-w-2xl p-4 rounded-xl mb-4">
				<h2 class="flex flex-row">
					<Dot />
					<span class="text-2xl underline">Work experience</span>
				</h2>
				{#each experiences as experience}
					<div class="pb-2">
						<JobExperience experience="{experience}"></JobExperience>
					</div>
				{/each}
			</div>
			<div class="bg-slate-50 max-w-2xl p-4 rounded-xl mb-4">
				<h2 class="flex flex-row">
					<Dot />
					<span class="text-2xl underline">Education</span>
				</h2>
				{#each educations as education}
					<div class="pb-2">
						<Education cursus="{education}"></Education>
					</div>
				{/each}
			</div>
			<div class="bg-slate-50 max-w-2xl p-4 rounded-xl mb-4">
				<h2 class="flex flex-row">
					<Dot />
					<span class="text-2xl underline">Open Source</span>
				</h2>
				{#each openSourceProjects as project}
					<div class="pb-2">
						<OpenSourceProject project="{project}"></OpenSourceProject>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>

<style lang="postcss">
    :global(html) {
        /* @formatter:off */
        background-color: theme(colors.slate.100);
        /* @formatter:on */
    }
</style>
