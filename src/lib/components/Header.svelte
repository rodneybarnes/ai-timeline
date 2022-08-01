<script lang="ts">
export let link: string;
export let linkText: string;
</script>

<div class="flex flex-col items-center justify-center h-80 min-h-[30%]">
    <h1 class="font-mono text-4xl text-white">AI in Montreal: Invitation to a New Timeline</h1>
    <a href={link} class="flex items-center justify-center mt-10 text-white text-2xl">{linkText}</a>
</div>