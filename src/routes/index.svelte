<script context="module">
    export async function load({fetch}) {
        const url = 'https://opensheet.elk.sh/1xOrcYodnYn-mR9WCXsD-x6JxNWusemQD4gXuArqvaeA/Sheet1'
        const response = await fetch(url);
        const body = await response.json();
        const eras = body.filter((i) => i.Type === 'era');
        const entries = body.filter((i) => i.Type === undefined || i.Type === '');
        return {
            props: {
                eras,
                entries
            }
        };
    }
</script>

<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Timeline from '$lib/components/Timeline/Timeline.svelte';

    export let eras;
    export let entries;
</script>

<div class="flex flex-col h-screen">
    <Header/>
    <Timeline {entries}/>
</div>

