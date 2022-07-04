<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import FilterComponent from '$lib/components/Filters/Filter.svelte';
	import type Filter from 'src/classes/filter';
	import type { QueryParam } from 'src/types/query-param.type';
	import Search from './Search.svelte';
	import Order from './Order.svelte';

	// Props
	export let filters: Filter[] = [];
	export let filterParams: QueryParam[] = [];

	// Handlers
	const dispatch = createEventDispatcher();
	const dispatchClearParams = () => dispatch('clearParams');
	const dispatchSearchAsFilterUpdate = ({ detail: { searchValue } }) =>
		dispatch('filterUpdated', { filterName: 'search', selectedValue: searchValue });
	const dispatchOrderAsQueryUpdate = ({ detail: { orderBy } }) =>
		dispatch('filterUpdated', { filterName: 'orderBy', selectedValue: orderBy });
</script>

<div class="flex flex-col md:flex-row justify-center mb-10 p-5 bg-neutral-800 w-full">
	{#each filters as filter}
		<FilterComponent
			{filter}
			selectedValue={filterParams.find((param) => param.key === filter.name)?.value || ''}
			on:filterUpdated
		/>
	{/each}
	<Search
		on:searchSubmitted={dispatchSearchAsFilterUpdate}
		searchValue={filterParams.find((param) => param.key === 'search')?.value || ''}
	/>
	<button class="bg-white px-5" on:click={dispatchClearParams}>Clear</button>
	<Order
		on:orderUpdated={dispatchOrderAsQueryUpdate}
		orderBy={filterParams.find((param) => param.key === 'orderBy')?.value}
	/>
</div>
