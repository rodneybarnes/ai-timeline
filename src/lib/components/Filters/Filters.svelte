<script lang="ts">
    import { createEventDispatcher } from 'svelte';
	import FilterComponent from '$lib/components/Filters/Filter.svelte';
	import type Filter from 'src/classes/filter';
	import type { FilterParam } from 'src/types/filter-param.type';

    // Props
	export let filters: Filter[] = [];
	export let filterParams: FilterParam[] = [];

    // Handlers
    const dispatch = createEventDispatcher();
    const dispatchClearParams = () => dispatch('clearParams');
</script>

<div class="flex flex-row justify-end pb-10 px-5 bg-slate-800">
	{#each filters as filter}
		<FilterComponent {filter} selectedValue={filterParams.find((param) => param.by === filter.name)?.value || ''} on:filterUpdated />
	{/each}
    <button class="bg-white px-5" on:click={dispatchClearParams}>Clear</button>
</div>
