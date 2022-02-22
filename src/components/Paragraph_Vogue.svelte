<script>
  export let textColourParagraph;
  export let textColourWord;
  export let largeWord;
  export let paragraphWords;
</script>

<div class="grid col-start-1 col-end-3 row-start-2 row-end-3 sm:col-span-2 sm:row-span-1 m-1 p-1 lg:m-2 lg:p-2 place-items-start">
  <p class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-relaxed font-Eiko lg:font-Eiko-Thin {textColourParagraph}">
    <span class="font-Eiko-Italic {textColourWord} text-7xl lg:text-9xl">{largeWord}</span> {paragraphWords}</p>
</div>