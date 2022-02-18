<script>
  export let textColourParagraph;
  export let textColourWord;
  export let largeWord;
  export let firstParagraph;
  export let secondParagraph;
</script>


<div class="grid h-screen grid-cols-2 sm:grid-cols-4">
  <div class="grid col-start-1 col-end-3 row-start-2 row-end-3 sm:col-span-2 sm:row-span-1 place-content-evenly lg:col-span-2 m-1 p-1 lg:m-2 lg:p-2">
    <p class=" text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-loose {textColourParagraph}"><span class="font-Eiko-Italic {textColourWord} text-8xl lg:text-9xl">{largeWord}</span> 
    {firstParagraph}</p><br/>
    <p class=" text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-loose {textColourParagraph}">{secondParagraph}</p>
  </div>
</div>