<script>
  import { SlideToggle } from '@skeletonlabs/skeleton';
  
  export let item = '';
  let isChecked = false;
</script>

<div class="checklist-line">
  <SlideToggle name="" bind:checked={isChecked} />
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
