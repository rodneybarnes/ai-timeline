<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { TimelineEntryType } from 'src/types/timeline-entry.type';
	export let entry: TimelineEntryType = {
		month: 0,
		year: 0,
		headline: '',
		text: '',
		group: '',
		type: '',
		endYear: 0
	};

	export let index = 0;

	const months = {
		1: 'January',
		2: 'February',
		3: 'March',
		4: 'April',
		5: 'May',
		6: 'June',
		7: 'July',
		8: 'August',
		9: 'September',
		10: 'October',
		11: 'November',
		12: 'December'
	};

	$: month = months[entry.month] ? months[entry.month] + ', ' : '';

	const stagger = index % 2 === 0 ? 'lg:ml-[38%]' : 'lg:mr-[38%]';

	// Needs to be reactive, otherwise parts of the date will not re-render.
	$: date = `${entry.day} ${month} ${entry.year}`;

	const entryId = entry.headline.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-');

	const dispatch = createEventDispatcher();
	const dispatchIdSelected = () => dispatch('idSelected', { id: entryId });
</script>

<div
	class="
        p-10
        sm:mb-2
        xl:-mt-4
        text-white
        border-2
        border-neutral-700
        xl:min-w-[35%]
        xl:max-w-[35%] {stagger}
        bg-neutral-800"
>
	<p class="mb-2 text-sm">{date}</p>
	<h3 id={entryId} class="mb-3 text-xl">
		<button class=" text-left" on:click={dispatchIdSelected}>
			{entry.headline}
		</button>
	</h3>
	<p>{entry.text}</p>
    {#if entry.group}
        <div class="flex">
            <div class="flex-grow border-t border-gray-400 mt-7"></div>
        </div>
        <p class="italic">{entry.group}</p>
    {/if}
</div>
