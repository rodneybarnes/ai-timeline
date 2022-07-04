<script lang="ts">
	import type { TimelineEntryType } from 'src/types/timeline-entry.type';
	import { onMount } from 'svelte';
	import TimelineEntry from './TimelineEntry.svelte';
	export let entries: TimelineEntryType[] = [];
	export let selectedEntryId: string | undefined;

	onMount(() => {
		if (selectedEntryId) {
			const selectedEntry = document.getElementById(selectedEntryId);
			if (selectedEntry) {
				selectedEntry.scrollIntoView({
					behavior: 'smooth'
				});
			}
		}
	});
</script>

<div class="flex flex-col items-center flex-grow px-5">
	{#each entries as entry, index}
		<TimelineEntry {entry} {index} on:idSelected />
	{/each}
</div>
