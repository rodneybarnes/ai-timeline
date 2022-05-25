<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import FilterComponent from '$lib/components/FiltersAndSearch/Filter.svelte';
	import type Filter from 'src/classes/filter';
	import type { FilterParam } from 'src/types/filter-param.type';
	import Search from './Search.svelte';

	// Props
	export let filters: Filter[] = [];
	export let filterParams: FilterParam[] = [];

	// Handlers
	const dispatch = createEventDispatcher();
	const dispatchClearParams = () => dispatch('clearParams');
	const dispatchSearchAsFilterUpdate = ({ detail: { searchValue } }) =>
		dispatch('filterUpdated', { filterName: 'search', selectedValue: searchValue });
</script>

<div class="flex flex-col md:flex-row justify-end pb-10 px-5 bg-slate-800">
	{#each filters as filter}
		<FilterComponent
			{filter}
			selectedValue={filterParams.find((param) => param.by === filter.name)?.value || ''}
			on:filterUpdated
		/>
	{/each}
	<Search on:searchSubmitted={dispatchSearchAsFilterUpdate} searchValue={filterParams.find((param) => param.by === 'search')?.value || ''} />
	<button class="bg-white px-5" on:click={dispatchClearParams}>Clear</button>
</div>
