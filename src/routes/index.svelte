<script context="module" lang="ts">
	export async function load({ fetch }) {
		const url = 'https://opensheet.elk.sh/1xOrcYodnYn-mR9WCXsD-x6JxNWusemQD4gXuArqvaeA/Sheet1';
		const response = await fetch(url);
		const body = await response.json();
		const eras = body.filter((i) => i.Type === 'era');
		const allGroups = body.filter((i) => i.Group !== undefined).map((i) => i.Group);
		const groups = [...new Set(allGroups)];
		const entries = body.filter((i) => i.Type === undefined || i.Type === '');
		return {
			props: {
				entries,
				eras,
				groups
			}
		};
	}
</script>

<script lang="ts">
	import Filters from '$lib/components/Filters/Filters.svelte';
	import Header from '$lib/components/Header.svelte';
	import Timeline from '$lib/components/Timeline/Timeline.svelte';

	import type { EraType } from 'src/types/era.type';
	import type { FilterType } from 'src/types/filter.type';
	import type { FiltersType } from 'src/types/filters.type';
	import type { TimelineType } from 'src/types/timeline.type';

	export let eras: EraType[];
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
