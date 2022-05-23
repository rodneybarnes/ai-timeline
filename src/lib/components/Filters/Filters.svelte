<script lang="ts">
    import FilterComponent from '$lib/components/Filters/Filter.svelte';
	import type Filter from 'src/classes/filter';
	export let filters: Filter[] = [];
</script>

<div class="flex flex-row justify-end pb-10 px-5 bg-slate-800">
	{#each filters as filter}
		<FilterComponent {filter} />
	{/each}
</div>
