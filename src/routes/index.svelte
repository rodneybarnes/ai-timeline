<script context="module" lang="ts">
	import { fetchTimelineData } from '../utils/api';
    import type { RawTimelineEntryType } from 'src/types/raw-timeline-entry.type';
    
	
	export async function load({ fetch }) {
		const rawTimelineData: RawTimelineEntryType[] = await fetchTimelineData(fetch);
		return {
			props: {
				rawTimelineData
			}
		};
	}
</script>

<script lang="ts">
	import Filters from '$lib/components/Filters/Filters.svelte';
	import Header from '$lib/components/Header.svelte';
	import Timeline from '$lib/components/Timeline/Timeline.svelte';
	import Filter from '../classes/filter';
    import TimelineData from '../classes/timeline-data';

	export let rawTimelineData: RawTimelineEntryType[]

    // Q: Why not have the api call return a new TimelineData?
    // A: Svelte seems to wipe or sanitize the instantiated class :(
    const timelineData = new TimelineData(rawTimelineData);

	const eraFilter = new Filter(
		'era',
		timelineData.eras.map((era) => era.headline)
	);
	const groupFilter = new Filter('group', timelineData.groups);
	const filters: Filter[] = [eraFilter, groupFilter];

	let filteredEntries = timelineData.entries;

	const handleFilterUpdate = ({ detail: { filterName, selectedValue } }) => {
		filteredEntries = timelineData.filterEntries(filterName, selectedValue);
        
	};
</script>

<div class="flex flex-col h-screen">
	<Header />
	<Filters {filters} on:filterUpdated={handleFilterUpdate} />
	<Timeline entries={filteredEntries} />
</div>
