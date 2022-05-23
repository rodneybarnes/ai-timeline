<script context="module" lang="ts">
	import { fetchTimelineData } from '../utils/api';
	import type TimelineData from 'src/classes/timeline-data';
	export async function load({ fetch }) {
		const timelineData: TimelineData = await fetchTimelineData(fetch);
		return {
			props: {
				entries: timelineData.entries,
				eras: timelineData.eras,
				groups: timelineData.groups
			}
		};
	}
</script>

<script lang="ts">
	import Filters from '$lib/components/Filters/Filters.svelte';
	import Header from '$lib/components/Header.svelte';
	import Timeline from '$lib/components/Timeline/Timeline.svelte';

	import type { FilterType } from 'src/types/filter.type';
	import type { FiltersType } from 'src/types/filters.type';
	import type { TimelineType } from 'src/types/timeline.type';
	import type { TimelineEntryType } from 'src/types/timeline-entry.type';

	export let eras: TimelineEntryType[];
	export let entries: TimelineType;
	export let groups: string[];

	const eraFilter: FilterType = { name: 'era', values: eras.map((era) => era.Headline) };
	const groupFilter: FilterType = { name: 'group', values: groups };
	const filters: FiltersType = [eraFilter, groupFilter];
</script>

<div class="flex flex-col h-screen">
	<Header />
	<Filters {filters} />
	<Timeline {entries} />
</div>
