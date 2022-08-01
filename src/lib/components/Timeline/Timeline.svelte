<script lang="ts">
	import type { TimelineEntryType } from 'src/types/timeline-entry.type';
	import { onMount } from 'svelte';
	import TimelineEntry from './TimelineEntry.svelte';
	export let entries: TimelineEntryType[] = [];
	export let selectedEntryId: string | undefined;

	const scrollToEntry = () => {
		if (selectedEntryId) {
			const selectedEntry = document.getElementById(selectedEntryId);
			setTimeout(function () {
				selectedEntry?.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}, 100);
		}
	};

	onMount(() => {
		scrollToEntry();
	});
</script>

<div class="flex flex-col items-center flex-grow px-5">
	{#each entries as entry, index}
		<TimelineEntry {entry} {index} on:idSelected />
	{/each}
</div>
