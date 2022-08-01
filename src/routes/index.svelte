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
	import Filters from '$lib/components/Filters/Filters.svelte';
	import Header from '$lib/components/Header.svelte';
	import Timeline from '$lib/components/Timeline/Timeline.svelte';

	// Classes
	import Filter from '../classes/filter';
	import TimelineData from '../classes/timeline-data';

	import URLHelper from '../utils/url-helper';
	import type { QueryParam } from 'src/types/query-param.type';

	// Props
	export let rawTimelineData: RawTimelineEntryType[];

	// Q: Why not have the api call return a new TimelineData?
	// A: Svelte seems to wipe or sanitize the instantiated class :(
	const timelineData = new TimelineData(rawTimelineData);

	// Methods and handlers
	const getQueryParams = () =>
		URLHelper.getQueryParams(Array.from($page.url.searchParams.entries()));

	const handleFilterUpdate = ({ detail: { filterName, selectedValue } }) => {
		$page.url.searchParams.set(filterName, selectedValue);
		goto($page.url.href);

		filterParams = getQueryParams();
		filteredEntries = timelineData.filterEntries(filterParams);
	};

	const handleClearParams = () => {
		Array.from($page.url.searchParams.keys()).forEach((key) => $page.url.searchParams.delete(key));
		goto($page.url.href);
		filterParams = [];
		filteredEntries = [...timelineData.entries];
	};

	const handleIdSelected = ({ detail: { id } }) => {
		$page.url.searchParams.set('id', id);
		selectedEntryId = id;
		window.location.href = $page.url.href;
	};

	// Local data
	const eraFilter = new Filter(
		'era',
		timelineData.eras.map((era) => era.headline)
	);
	const themeFilter = new Filter('theme', timelineData.themes);
	const filters: Filter[] = [eraFilter, themeFilter];

	let filterParams: QueryParam[] = getQueryParams();
	let filteredEntries = timelineData.filterEntries(filterParams);

	let selectedEntryId = URLHelper.getQueryParam('id', Array.from($page.url.searchParams.entries()));
</script>

<div class="flex flex-col items-center min-h-screen bg-zinc-900">
	<Header />
	<Filters
		{filters}
		{filterParams}
		on:filterUpdated={handleFilterUpdate}
		on:clearParams={handleClearParams}
	/>
	<Timeline entries={filteredEntries} {selectedEntryId} on:idSelected={handleIdSelected} />
</div>
