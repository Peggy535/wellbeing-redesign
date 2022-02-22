<script>
  export let fontStyle;
  export let title;
  export let subTitle;
</script>

<div class="grid h-screen w-screen grid-rows-4 grid-cols-1">
  <div class="grid row-start-3 row-end-4 items-end">
    <h1 class="{fontStyle} text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-12xl 2xl:text-14xl pl-3 sm:pl-3 md:pl-4 lg:pl-6 2xl:pl-10 xl:mb-4">
      {title}
    </h1>
    <h6 class="{fontStyle} text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl pl-3 sm:pl-3 md:pl-4 lg:pl-6 2xl:pl-10">
     {subTitle}
    </h6>
  </div>
</div>