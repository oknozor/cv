<script lang="ts">
	import GithubLogo from './icons/GithubLogo.svelte';
	import DocIcon from './icons/DocIcon.svelte';
	import MastodonLogo from './icons/MastodonLogo.svelte';
	import LinkedInLogo from './icons/LinkedInLogo.svelte';
	import EmailLogo from './icons/EmailLogo.svelte';
	import PhoneLogo from './icons/PhoneLogo.svelte';
	import SuitcaseIcon from './icons/SuitcaseIcon.svelte';
	import LocationIcon from './icons/LocationIcon.svelte';
	import Dot from './icons/Dot.svelte';
</script>


<div class="flex flex-col gap-2">
	<h1 class="text-2xl">Paul Delafosse</h1>
	<div class="flex flex-row gap-5 text-xs text-slate-500 pb-4">
		<span class="flex flex-row gap-2"><SuitcaseIcon />Backend Developer</span>
		<span class="flex flex-row gap-2"><LocationIcon />Lille, France</span>
	</div>

	<div>
		<h2 class="flex flex-row">
			<Dot />
			<span class="text-2xl underline">Contact</span>
		</h2>
		<div class="flex flex-col gap-2 p-3 bg-slate-100 rounded-xl p-3">
			<span class="flex flex-row gap-2"><EmailLogo size={5} /> paul.delafosse@protonmail.com </span>
			<span class="flex flex-row gap-2"><PhoneLogo size={5} /> +33 663481252 </span>
			<span class="flex flex-row gap-2"><GithubLogo size={5} /> <a href="https://https://github.com/oknozor/"> github.com/oknozor/</a> </span>
			<span class="flex flex-row gap-2"><LinkedInLogo size={5} /> <a
				href="https://www.linkedin.com/in/paul-delafosse-614985133/"> linkedin.com/in/paul-delafosse </a> </span>
			<span class="flex flex-row gap-2"><MastodonLogo size={5} /> <a href="https://fosstodon.org/@okno"> fosstodon.org/@okno </a> </span>
			<span class="flex flex-row gap-2"><DocIcon size={5} /> <a href="https://oknozor.github.io/blog/"> oknozor.github.io/blog </a></span>
		</div>
	</div>
</div>