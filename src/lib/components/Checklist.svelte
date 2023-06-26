<script>
  import ChecklistItem from "./ChecklistItem.svelte";
</script>

<div class="checklist w-full">
  <ChecklistItem item="Item 1" action="Action 1" />
  <ChecklistItem item="Item 2" action="Action 2" />
  <ChecklistItem item="Item 3" action="Action 3" />
</div>

<style>
  .checklist {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
</style>