<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type Filter from 'src/classes/filter';

    // Props
	export let filter: Filter = {
		name: '',
		values: []
	};

    export let selectedValue;

	const dispatch = createEventDispatcher();
	const emitChange = () => dispatch('filterUpdated', { filterName: filter.name, selectedValue });
</script>

<select class="mr-3 bg-neutral-800 text-white p-2" bind:value={selectedValue} on:change={emitChange}>
	<option value="">Filter by {filter.name}</option>
	{#each filter.values as value}
		<option {value}>{value}</option>
	{/each}
</select>
