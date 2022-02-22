<script>
  export let title;
  export let fontStyle;
</script>

<div class="grid h-screen w-screen grid-rows-4 grid-cols-1">
  <div class="grid row-start-3 row-end-4 items-end">
      <h1 class="{fontStyle} text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-11xl pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-10">
        {title}
      </h1>
  </div>
</div>