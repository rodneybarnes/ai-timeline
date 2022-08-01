<script lang="ts">
	import { createEventDispatcher } from 'svelte';

    export let orderBy = 'asc';

	const dispatch = createEventDispatcher();
	const emitChange = () => dispatch('orderUpdated', { order });
	$: order = orderBy || 'asc';
</script>

<select class="mx-3 bg-neutral-800 text-white p-2" bind:value={order} on:change={emitChange} placeholder='Order By'>
	<option value="asc">Ascending</option>
	<option value="desc">Descending</option>
</select>
