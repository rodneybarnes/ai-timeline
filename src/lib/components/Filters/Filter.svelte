<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type Filter from 'src/classes/filter';
	export let filter: Filter = {
		name: '',
		values: []
	};

	const dispatch = createEventDispatcher();

	let selectedValue;

	const emitChange = () => dispatch('filterUpdated', { filterName: filter.name, selectedValue });
</script>

<select class="mr-3" bind:value={selectedValue} on:change={emitChange}>
	<option value="">Filter by {filter.name}</option>
	{#each filter.values as value}
		<option {value}>{value}</option>
	{/each}
</select>
