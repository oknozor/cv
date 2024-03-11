<script lang="ts">
	import type { OpenSourceProject } from '$lib';
	import GithubLogo from './icons/GithubLogo.svelte';
	import DocIcon from './icons/DocIcon.svelte';

	export let project: OpenSourceProject;
</script>

<div class="bg-slate-100 p-3 rounded-lg max-w-2xl">
	<h3 class="font-bold text-lg">{project.name}</h3>
	<div>

		<div class="flex flex-row gap-5 text-xs text-slate-500">
			<div class="flex flex-row gap-1 items-center">
				<GithubLogo />
				<a href="https://github.com/{project.ghNameSpace}">{project.ghNameSpace}</a>
			</div>
			{#if project.website}
				<div class="flex flex-row gap-1 items-center">
					<DocIcon />
					<a href="{project.websiteUrl}">{project.website}</a>
				</div>
			{/if}
		</div>

		<p>{project.description}</p>
	</div>
</div>