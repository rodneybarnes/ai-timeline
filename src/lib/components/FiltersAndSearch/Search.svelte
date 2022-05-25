<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    export let searchValue = '';

    const dispatch = createEventDispatcher();

    const dispatchSearch = (ev) => {
        if (ev.key === "Enter" || ev.key === "Backspace") {
            dispatch('searchSubmitted', { searchValue });
        }
    }
</script>
<input type="search" bind:value={searchValue} on:keyup={dispatchSearch} class="mr-3" placeholder="Search"/>