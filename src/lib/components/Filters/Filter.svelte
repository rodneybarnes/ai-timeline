<script lang="ts">
import type { FilterType } from "src/types/filter.type";
    export let filter: FilterType = {
        name: '',
        values: []
    };
</script>
<select class="mr-3">
    <option>Filter by {filter.name}</option>
    {#each filter.values as value}
        <option {value}>{value}</option>
    {/each}
</select>   
