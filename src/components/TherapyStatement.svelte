<script>
  export let statement;
  export let fontStyle;
  export let fontSize;
</script>

<div class="grid grid-cols-1 grid-rows-1 lg:grid-cols-5">
  <div class="grid h-screen col-span-1 row-span-1 lg:col-start-2 lg:col-end-6 items-center m-1 p-1">
    <h2 class="{fontStyle} {fontSize} text-right pr-2 md:pr-4 lg:pr-6 2xl:pr-8">
      {statement}
    </h2>
  </div>
</div>