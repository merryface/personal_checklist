<script>
  import { SlideToggle } from '@skeletonlabs/skeleton';
  
  export let item = '';
  export let action = '';
  let isChecked = false;
</script>

<div class="checklist-line">
  <SlideToggle name="" bind:checked={isChecked} />
  <div class="items text-xl">
    <span>{item}</span>
    <span>{action}</span>
  </div>
</div>

<style>
  .checklist-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  .items {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
</style>
