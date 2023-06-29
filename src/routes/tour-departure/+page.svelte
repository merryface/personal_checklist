<script lang='ts'>
  import Checklist from "$lib/components/Checklist.svelte";

  const checklist = [
    "Passports",
    "Company ID",
    "AMEX Card", 
    "Licenses & Medicals",
    "Wallet",
    "Glasses x 3",
    "Contact Lenses",
    "Epaulettes",
    "EGGB Parking Pass"
  ]

</script>

<main class="container h-full mx-auto flex flex-col gap-3 items-center px-5 py-10">
  <h1 class="text-[1.5rem] leading-[2rem] text-center mb-10">Pre-Tour Departure Checklist</h1>
  <Checklist items={checklist} />
</main>