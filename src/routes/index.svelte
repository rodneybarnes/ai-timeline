<script context="module" lang="ts">
	import { fetchTimelineData } from '../utils/api';
	import type { RawTimelineEntryType } from 'src/types/raw-timeline-entry.type';

	// We need to manually turn off prerendering here so we can use `url.searchParams`, otherwise
	// we'd be asking Sveltekit to prerender a potentially infinite number of pages, as there
	// could be a potentially infinite number of searchParams.
	export const prerender = false;

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
	import FiltersAndSearch from '$lib/components/FiltersAndSearch/FiltersAndSearch.svelte';
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

	const handleClearParams = () => {
		Array.from($page.url.searchParams.keys()).forEach((key) => $page.url.searchParams.delete(key));
		goto($page.url.href);
		filterParams = [];
		filteredEntries = [...timelineData.entries];
	};
</script>

<div class="flex flex-col h-screen  bg-slate-800">
	<Header />
	<FiltersAndSearch
		{filters}
		{filterParams}
		on:filterUpdated={handleFilterUpdate}
		on:clearParams={handleClearParams}
	/>
	<Timeline entries={filteredEntries} />
</div>
