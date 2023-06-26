<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-seafoam.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<div class="container h-full mx-auto flex flex-col gap-3 justify-center items-center">
	<slot />
	<TabGroup 
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full"
	>
		<TabAnchor href="/" selected={$page.url.pathname === '/'}>
			<svelte:fragment slot="lead"><i class="fa-solid fa-house-chimney"></i></svelte:fragment>
			<span>Home</span>
		</TabAnchor>
		<TabAnchor href="/tour-departure" selected={$page.url.pathname === '/tour-departure'}>
			<svelte:fragment slot="lead"><i class="fa-solid fa-plane-departure"></i></svelte:fragment>
			<span>Tour Departure</span>
		</TabAnchor>
		<!-- ... -->
	</TabGroup>
</div>
