<script lang='ts'>
  import Checklist from "$lib/components/Checklist.svelte";

  const checklist = [
    "Passports in shirt pocket",
    "Compass in left shirt pocket",
    "Ipad charging",
    "Phones charging",
    "Update Comply",
    "Update JepFD",
    "Check headset charge",
    "Iron as required",
    "Eppaulettes on shirt",
    "Set alarms",
    " WOLC Start - Set wake up call",
    "Latest expenses on Concur"
  ]

</script>

<main class="container flex flex-col gap-3 items-center px-5 pt-10 py-20">
  <h1 class="text-[1.5rem] leading-[2rem] text-center mb-10">Tour Preparation Checklist</h1>
  <Checklist items={checklist} />
</main>

<style>
  main {
  }
</style>