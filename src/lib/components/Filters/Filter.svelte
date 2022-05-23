<script lang="ts">
	import type Filter from 'src/classes/filter';
	export let filter: Filter = {
		name: '',
		values: []
	};
</script>

<select class="mr-3">
	<option>Filter by {filter.name}</option>
	{#each filter.values as value}
		<option {value}>{value}</option>
	{/each}
</select>
