<script context="module" lang="ts">
	import { fetchTimelineData } from '../utils/api';
	import type TimelineData from 'src/classes/timeline-data';
	export async function load({ fetch }) {
		const timelineData: TimelineData = await fetchTimelineData(fetch);
		return {
			props: {
				timelineData
			}
		};
	}
</script>

<script lang="ts">
	import Filters from '$lib/components/Filters/Filters.svelte';
	import Header from '$lib/components/Header.svelte';
	import Timeline from '$lib/components/Timeline/Timeline.svelte';
    import Filter from '../classes/filter';

    export let timelineData: TimelineData;

	const eraFilter = new Filter('era', timelineData.eras.map((era) => era.Headline));
	const groupFilter = new Filter('group', timelineData.groups);
	const filters: Filter[] = [eraFilter, groupFilter];
</script>

<div class="flex flex-col h-screen">
	<Header />
	<Filters {filters} />
	<Timeline entries={timelineData.entries} />
</div>
