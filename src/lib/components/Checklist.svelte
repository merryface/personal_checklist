<script lang='ts'>
  import ChecklistItem from "./ChecklistItem.svelte";
  export let items: Array<string>
</script>

<div class="checklist w-full">
  {#each items as item}
    <ChecklistItem  item={item} />
  {/each}
</div>

<style>
  .checklist {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
</style>