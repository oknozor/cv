<script lang="ts">
	import JobExperience from '../components/JobExperience.svelte';
	import OpenSourceProject from '../components/OpenSourceProject.svelte';
	import Education from '../components/Education.svelte';
	import Dot from '../components/icons/Dot.svelte';
	import Contact from '../components/Contact.svelte';

	let currentLanguage = 'en';
	let educations: any[] = [];
	let experiences: any[] = [];
	let openSourceProjects: any[] = [];
	let introduction: string = '';

	async function loadData() {
		if (currentLanguage === 'fr') {
			const data = await import('$lib/data_fr');
			educations = data.educations;
			experiences = data.experiences;
			openSourceProjects = data.openSourceProjects;
			introduction = data.introduction;
		} else {
			const data = await import('$lib/data');
			educations = data.educations;
			experiences = data.experiences;
			openSourceProjects = data.openSourceProjects;
			introduction = data.introduction;
		}
	}

	function toggleLanguage() {
		currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
		loadData();
	}

	loadData();
</script>

<main>
	<button
		class="fixed top-4 right-4 z-10 bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg shadow-md transition-colors duration-200 text-sm font-medium"
		on:click={toggleLanguage}
	>
		{currentLanguage === 'en' ? 'EN' : 'FR'}
	</button>

	<div class="grid md:grid-cols-12 gap-4">
		<div
			class="bg-slate-50 rounded-xl p-4 md:col-span-4 lg:col-span-4 md:mb-3 md:ml-3 md:mt-3 sm:m-2"
		>
			<Contact />
		</div>

		<div class="md:col-span-8 lg:col-span-8 md:mb-3 md:mr-3 md:mt-3 sm:m-2">
			<div class="bg-slate-50 max-w-2xl p-4 rounded-xl mb-4">
				<h2 class="flex flex-row mb-3">
					<Dot />
					<span class="text-2xl underline">Senior Backend Engineer</span>
				</h2>
				<p class="text-gray-700 leading-relaxed">{introduction}</p>
			</div>
			<div class="bg-slate-50 max-w-2xl p-4 rounded-xl mb-4">
				<h2 class="flex flex-row">
					<Dot />
					<span class="text-2xl underline">Work experience</span>
				</h2>
				{#each experiences as experience}
					<div class="pb-2">
						<JobExperience {experience}></JobExperience>
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
						<Education cursus={education}></Education>
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
						<OpenSourceProject {project}></OpenSourceProject>
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
