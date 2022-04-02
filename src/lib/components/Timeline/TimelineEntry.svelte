<script lang="ts">
    import type { TimelineEntryType } from 'src/types/timeline-entry.type'
    export let entry: TimelineEntryType = {
        Day: '',
        Month: '',
        Year: '',
        Headline: '',
        Text: '',
        Group: ''
    };

    export let index = 0;

    const months = {
        '1': 'January',
        '2': 'February',
        '3': 'March',
        '4': 'April',
        '5': 'May',
        '6': 'June',
        '7': 'July',
        '8': 'August',
        '9': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    };

    const month = months[entry.Month] 
        ? months[entry.Month] + ', '
        : '';

    const stagger = index % 2 === 0 
        ? 'md:ml-[50%]'
        : 'md:mr-[50%]';

    const date = `${entry.Day} ${month} ${entry.Year}`
</script>
<div class="p-10 sm:mb-2 md:-mt-4 text-white border-2 border-white rounded md:min-w-[45%] md:max-w-[45%] {stagger}">
    <p class="mb-2 text-sm">{date}</p>
    <h3 class="mb-3 text-xl">{entry.Headline}</h3>
    <p>{entry.Text}</p>
</div>