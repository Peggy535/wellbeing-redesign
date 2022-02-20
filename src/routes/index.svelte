<script>
//import { onMount } from "svelte";
import P5 from "p5-svelte";
//import gsap from 'gsap';
import Sketch4 from '../sketches/sketch4.svelte';
import SectionTitle from "../components/Section_Title.svelte";
import ParagraphVogue from "../components/Paragraph_Vogue.svelte";
import BlockQuote from "../components/BlockQuote.svelte";
import DoubleParagraph from "../components/Double_Paragraph.svelte";
import BlockStatement from "../components/BlockStatement.svelte";

</script>
<Sketch4/>
<section class="absolute top-0 z-20 w-screen overflow-x-hidden overscroll-none text-rose-4 font-Eiko-Thin">
  <SectionTitle>
    JH Online Therapies
  </SectionTitle>

  <div class="grid h-screen grid-cols-2 grid-rows-2 sm:grid-cols-4">
    <div class="grid col-start-1 col-end-3 row-start-1 row-end-2 sm:col-span-4 sm:row-span-1 items-start">
      <h1 class="text-7xl pr-2 md:pr-10 lg:pr-5 xl:pr-5 sm:text-9xl md:text-10xl lg:text-13xl xl:text-14xl 2xl:text-15xl text-right font-Eiko-Italic">Welcome.</h1>
      <div class="flex flex-col text-stone-900 pr-2">
          <p class="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl m-1 p-1 pr-2 md:pr-10 text-right font-Eiko-Italic text-rose-50">Your go to specialist 
            in anxiety and stress relief:<br>Curative Hypnotherapy<br>Relaxation Therapy<br>CBT/MCBT
          </p>
        </div>
    </div>
    <ParagraphVogue
      textColourParagraph="text-rose-50"
      textColourWord="text-rose-4"
      largeWord="Hello"
      paragraphWords="and welcome to my website, I hope you find both it and the words helpful, healing and inspiring. 
      Whatever you are facing at this time in your life, no matter what it is, please be assured there is a reason and that there is help for you if you wish to receive it.">
    </ParagraphVogue>
  </div>
  <BlockQuote
    statement="You are beautiful, unique and deserving of all good things."
    cite="- Justine Hodgson">
  </BlockQuote>
  <DoubleParagraph
    textColourParagraph="text-rose-50"
    textColourWord="text-rose-4"
    largeWord="By"
    firstParagraph=" now hopefully, you've pressed the play button on my welcome message above. As a hypnotherapist, it's important you get a feel for my voice and personality if we are going to do some work together."
    secondParagraph="Just as so many before me and many to follow, I've had my own path to travel and it's not always been straight forward but it has led me to where I am today and it continues to get better and convince me that, miracles actually do happen."
  >
  </DoubleParagraph>  
  <BlockStatement
    statement="Having personally experienced such things as anxiety, trauma and chronic fatigue syndrome, and having recovered through the same therapies I offer today, 
    allows me to truly understand other's issue's, and how best to treat them."
  >
  </BlockStatement>
  <div class="grid h-auto grid-cols-2 sm:grid-cols-4 mb-10">
    <ParagraphVogue
        textColourParagraph="text-rose-50"
        textColourWord="text-rose-4"
        largeWord="My"
        paragraphWords="desire today and every day hereon, is to make people feel less broken, so they 
        can experience more joy and happiness and less stress in their lives. This in turn can only benefit those around them, and there we have it, a beautiful ripple effect begins and reaches far and 
        wide, as far as the imagination can take you!">
    </ParagraphVogue>
  </div>

    
  <nav>
    <a href="/">Home | </a>
    <a href="/hypnotherapy">Hypnotherapy | </a>
    <a href="/relaxation">Relaxation | </a>
    <a href="/cbt">CBT | </a>
    <a href="/aboutjh">About JH</a>
  </nav>
</section>


