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
	// SvelteKit imports
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	// Components
	import Filters from '$lib/components/Filters/Filters.svelte';
	import Header from '$lib/components/Header.svelte';
	import Timeline from '$lib/components/Timeline/Timeline.svelte';

	// Classes
	import Filter from '../classes/filter';
	import TimelineData from '../classes/timeline-data';

	import URLHelper from '../utils/url-helper';
	import type { FilterParam } from 'src/types/filter-param.type';

	// Props
	export let rawTimelineData: RawTimelineEntryType[];

	// Q: Why not have the api call return a new TimelineData?
	// A: Svelte seems to wipe or sanitize the instantiated class :(
	const timelineData = new TimelineData(rawTimelineData);

	// Local data
	const eraFilter = new Filter(
		'era',
		timelineData.eras.map((era) => era.headline)
	);
	const groupFilter = new Filter('group', timelineData.groups);
	const filters: Filter[] = [eraFilter, groupFilter];

	let filterParams: FilterParam[] = URLHelper.getFilterParams(
		Array.from($page.url.searchParams.entries())
	);
	let filteredEntries = timelineData.filterEntries(filterParams);

	// Methods and handlers
	const handleFilterUpdate = ({ detail: { filterName, selectedValue } }) => {
		$page.url.searchParams.set(filterName, selectedValue);
		goto($page.url.href);

		filterParams = URLHelper.getFilterParams(Array.from($page.url.searchParams.entries()));
		filteredEntries = timelineData.filterEntries(filterParams);
	};
</script>

<div class="flex flex-col h-screen">
	<Header />
	<Filters {filters} {filterParams} on:filterUpdated={handleFilterUpdate} />
	<Timeline entries={filteredEntries} />
</div>
