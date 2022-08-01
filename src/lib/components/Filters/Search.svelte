<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let searchValue = '';

	const dispatch = createEventDispatcher();

	const dispatchSearch = (ev) => {
		if (ev.key === 'Enter' || (ev.key === 'Backspace' && !searchValue)) {
			dispatch('searchSubmitted', { searchValue });
		}
	};
</script>

<input
	type="search"
	bind:value={searchValue}
	on:keyup={dispatchSearch}
	class="mr-3 bg-neutral-800 text-white p-2 mb-4"
	placeholder="Search"
/>
