<script lang="ts">
	import { createEventDispatcher } from 'svelte';

    export let orderBy = 'asc';

	const dispatch = createEventDispatcher();
	const emitChange = () => dispatch('orderUpdated', { orderBy });
</script>

<select class="mx-3" bind:value={orderBy} on:change={emitChange}>
	<option value="asc">Ascending</option>
	<option value="desc">Descending</option>
</select>
