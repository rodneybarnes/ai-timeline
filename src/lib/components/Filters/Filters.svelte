<script lang="ts">
	import FilterComponent from '$lib/components/Filters/Filter.svelte';
	import type Filter from 'src/classes/filter';
	import type { FilterParam } from 'src/types/filter-param.type';
	export let filters: Filter[] = [];
	export let filterParams: FilterParam[] = [];
</script>

<div class="flex flex-row justify-end pb-10 px-5 bg-slate-800">
	{#each filters as filter}
		<FilterComponent {filter} selectedValue={filterParams.find((param) => param.by === filter.name)?.value} on:filterUpdated />
	{/each}
</div>
