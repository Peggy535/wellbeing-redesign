<script>
  export let statement;
  export let fontStyle;
</script>

<div class="grid grid-cols-1 grid-rows-1 lg:grid-cols-5">
  <div class="grid h-screen col-span-1 row-span-1 lg:col-start-2 lg:col-end-6 items-center m-1 p-1">
    <h2 class="{fontStyle} text-5xl pr-2 sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-right md:pr-4 lg:pr-6 2xl:pr-8">
      {statement}
    </h2>
  </div>
</div>