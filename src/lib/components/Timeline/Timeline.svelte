<script lang="ts">
    import type { TimelineType } from 'src/types/timeline.type';
    import TimelineEntry from './TimelineEntry.svelte';
    export let entries: TimelineType = [];
</script>

<div class="flex flex-col items-center flex-grow bg-slate-800">
    {#each entries as entry, index}
        <TimelineEntry {entry} {index} />
    {/each}
</div>