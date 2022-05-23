<script lang="ts">
    import Filter from '$lib/components/Filters/Filter.svelte';
	import type { FiltersType } from 'src/types/filters.type';
	export let filters: FiltersType = [];
</script>

<div class="flex flex-row justify-end pb-10 px-5 bg-slate-800">
	{#each filters as filter}
		<Filter {filter} />
	{/each}
</div>
