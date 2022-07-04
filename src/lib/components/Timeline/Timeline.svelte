<script lang="ts">
	import type { TimelineEntryType } from 'src/types/timeline-entry.type';
	import TimelineEntry from './TimelineEntry.svelte';
	export let entries: TimelineEntryType[] = [];
</script>

<div class="flex flex-col items-center flex-grow px-5">
	{#each entries as entry, index}
		<TimelineEntry {entry} {index} />
	{/each}
</div>
