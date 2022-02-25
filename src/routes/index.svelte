<script>
import { onMount } from "svelte";
import gsap from 'gsap';
import Sketch4 from '../sketches/sketch4.svelte';
import SectionTitle from "../components/Section_Title.svelte";
import ParagraphVogue from "../components/Paragraph_Vogue.svelte";
import BlockQuote from "../components/BlockQuote.svelte";
import DoubleParagraph from "../components/Double_Paragraph.svelte";
import BlockStatement from "../components/BlockStatement.svelte";
import {hasVisited} from '../stores.js';


onMount(() => {
  let tl = gsap.timeline();
  gsap.registerPlugin(TextPlugin);
  
  if($hasVisited === false) {
    tl.set('#introCover', {y:-screen.height, autoAlpha:1})
      .to('#introCover', {y:0, duration:2, ease:'expo.inOut'})
      .to('#introCover h1', {autoAlpha:1, duration:1.5})
      .to('#introCover h1', {duration:1, text: 'Curative Hypnotherapy'}, '>2.1')
      .to('#introCover h1', {duration:1, text:'Relaxation Therapy'}, '>2.1')
      .to('#introCover h1', {duration: 1, text:'Mindful CBT'}, '>1.3')
      .to('#introCover h1', {duration: 1, text: 'JH Online Therapies'}, '>1.3')
      .to('#section_content', {autoAlpha:1})
      .to('#sketch_4', {autoAlpha:1}, '<');
    $hasVisited = true;
  } else {
    tl.set('#transitionCover', {x:screen.width, autoAlpha:1})
     .to('#transitionCover', {x:0, duration: 1})
     .to('#transitionCover h1', {autoAlpha:1, duration:1.5})
     .to('#transitionCover h1', {autoAlpha:0, duration:1})
     .to('#transitionCover', {x:-screen.width, duration:1})

  }
});



</script>
<div id="introCover" class="absolute bg-rose-main text-white h-screen w-screen z-100 top-0 left-0 invisible">
  <SectionTitle
    title="Your go to specialist in Anxiety & Stress relief"
    fontStyle="font-Eiko sm:font-Eiko-Thin invisible"
  >
  </SectionTitle>
</div>
<div id="transitionCover" class="absolute bg-rose-main text-white h-screen w-screen z-100 top-0 left-0 invisible">
  <SectionTitle
    title="Redefining Online Therapies"
    fontStyle="font-Eiko sm:font-Eiko-Thin invisible"
  >
  </SectionTitle>
</div>
<div id="sketch_4" class="invisible">
  <Sketch4/>
</div>
<section id="section_content" class="absolute top-0 z-20 w-screen overflow-x-hidden overscroll-none text-white font-Eiko-Thin invisible">
  <SectionTitle
    title="JH Online Therapies"
    fontStyle="font-Eiko sm:font-Eiko-Thin"
  >
  </SectionTitle>
  <div class="grid h-screen grid-cols-2 grid-rows-2 sm:grid-cols-4">
    <div class="grid col-start-1 col-end-3 row-start-1 row-end-2 sm:col-span-4 sm:row-span-1 items-start">
      <h1 class="text-7xl pr-2 md:pr-10 lg:pr-5 xl:pr-5 sm:text-9xl md:text-10xl lg:text-13xl xl:text-14xl 2xl:text-15xl text-right font-Eiko-Italic">Welcome.</h1>
    </div>
    <ParagraphVogue
      textColourParagraph="text-white"
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
    textColourParagraph="text-white"
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
        textColourParagraph="text-white"
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


