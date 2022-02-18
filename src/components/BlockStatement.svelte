<script>
  export let statement;
</script>

<div class="grid h-screen sm:h-auto grid-cols-2 sm:grid-cols-4 place-content-center">
  <blockquote class="grid pr-2 md:pr-10 col-start-1 col-end-3 sm:col-span-4 lg:col-start-2 lg:col-end-5 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl text-right px-3 my-20 lg:mb-30">
    {statement}
  </blockquote>
</div>