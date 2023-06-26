<script>
  import { SlideToggle } from '@skeletonlabs/skeleton';
  
  export let item = '';
  let isChecked = false;
</script>

<div class="checklist-line card py-2 px-5 variant-filled-secondary">
  <SlideToggle name={item} bind:checked={isChecked} active="bg-success-500" background="bg-error-500" />
  <span class="text-xl">{item}</span>
</div>

<style>
  .checklist-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
</style>
