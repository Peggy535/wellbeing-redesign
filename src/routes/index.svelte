<script>
import { onMount } from "svelte";
import gsap from 'gsap';
import {TextPlugin} from 'gsap/dist/TextPlugin';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import Sketch4 from '../sketches/sketch4.svelte';
import Sketch4B from "../sketches/sketch4_b.svelte";
import {hasVisited} from '../stores.js';

onMount(() => {
  let classPositionIndex = document.getElementById('content');
  function changeState() {
    classPositionIndex.classList.remove("fixed");
    classPositionIndex.classList.add("absolute");
  }
  let tl = gsap.timeline();
  gsap.registerPlugin(TextPlugin);
  //Check to see if sessionStorage 
  if($hasVisited === false) {
    tl.set('#introCover', {y:-screen.height, autoAlpha:1})
      .to('#introCover', {y:0, duration:2, ease:'expo.inOut'})
      .to('#introCover h1', {autoAlpha:1, duration:1.5})
      .to('#introCover h1', {duration:1, text: 'Curative Hypnotherapy'}, '>2.1')
      .to('#introCover h1', {duration:1, text:'Relaxation Therapy'}, '>2.1')
      .to('#introCover h1', {duration: 1, text:'Mindful CBT'}, '>2.1')
      .to('#introCover h1', {autoAlpha:0, duration: 1, delay:1.5})
      .to('#content', {autoAlpha:1, duration:0.5})
      .to('#sketch_4', {autoAlpha:1, onComplete:changeState}, '<');
      $hasVisited = true;
  } else {
    tl.set('#transitionCover', {x:screen.width, autoAlpha:1})
     .to('#transitionCover', {x:0, duration: 0.5})
     .to('#transitionCover h1', {autoAlpha:1, duration:1})
     .to('#transitionCover h1', {autoAlpha:0, duration:1, delay:2})
     .to('#transitionCover', {x:-screen.width, duration:0.5})
     .to('#content', {autoAlpha:1}, '>')
     .to('#sketch_4B', {autoAlpha:1, onComplete:changeState}, '<');
  }
});
</script>

<div id="introCover" class="fixed bg-rose-1 text-rose-main h-screen w-screen z-100 top-0 left-0 invisible">
  <div class="grid h-screen w-screen grid-rows-4 grid-cols-1">
    <div class="grid row-start-3 row-end-4 items-end">
        <h1 class="font-Eiko sm:font-Eiko-Thin invisible text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-11xl pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-10">
          Your go to specialist in Anxiety & Stress relief
        </h1>
    </div>
  </div>
</div>
<div id="transitionCover" class="fixed bg-rose-main text-white h-screen w-screen z-100 top-0 left-0 invisible" >
  <div class="grid h-screen w-screen grid-rows-4 grid-cols-1">
    <div class="grid row-start-3 row-end-4 items-end">
        <h1 class="font-Eiko sm:font-Eiko-Thin invisible text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-11xl pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-10">
          Redefining Online Therapies
        </h1>
    </div>
  </div>
</div>
<div id="sketch_4" class="invisible">
  <Sketch4/>
</div>
<div id="sketch_4B" class="invisible">
  <Sketch4B/>
</div>
<main id="content" class="fixed font-Eiko-Thin text-white invisible overflow-hidden">
  <section id="section_content">
    <div class="grid h-screen w-screen grid-rows-4 grid-cols-1">
      <div class="grid row-start-3 row-end-4 items-end">
          <h1 class="font-Eiko sm:font-Eiko-Thin text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-11xl pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-10">
            JH Online Therapies
          </h1>
      </div>
    </div>
  </section>
<!-- Welcome Section -->
  <section class="grid h-screen grid-cols-1 grid-rows-3">
    <div class="grid col-span-1 row-span-1 h-full items-center">
      <h1 class="text-7xl pr-2 md:pr-10 lg:pr-5 xl:pr-5 sm:text-9xl md:text-10xl lg:text-13xl xl:text-14xl 2xl:text-15xl text-right font-Eiko-Italic">Welcome.</h1>
    </div>
    <div class="grid col-span-1 row-start-2 row-end-4 items-center">
      <img class="object-cover"
      src="https://res.cloudinary.com/peggy-co/image/upload/c_scale,f_auto,q_auto:best,r_17,w_640/v1645718790/Well%20Being%20v3/JH-Face.jpg"
      alt />
    </div>
  </section>
  <section class="grid h-screen grid-cols-1 grid-rows-1">
    <div class="grid col-span-1 row-span-1 items-center">
      <p class="text-2xl text-white leading-tight m-1 p-1">
        <span class="font-Eiko-Italic text-rose-3 text-7xl lg:text-9xl">Hello</span>
        and welcome to my website, I hope you find both it and the words helpful, healing and inspiring. 
      Whatever you are facing at this time in your life, no matter what it is, please be assured there is a reason and that there is help for you if you wish to receive it.
      </p>
    </div>
  </section>

  <section class="grid h-screen items-center bg-gradient-to-b from-rose-1 to-transparent rounded-2xl text-rose-4">
    <blockquote class="grid text-7xl pr-2 sm:text-8xl md:text-9xl md:pr-10 lg:text-10xl xl:text-10xl 2xl:text-13xl text-right">
      You are beautiful, unique and deserving of all good things.
    </blockquote>
    <cite class="text-sm m-1 p-1">- Justine Hodgson</cite>
  </section>

  <section class="grid h-screen grid-cols-1 grid-rows-2 items-center">
    <div class="grid col-span-1 row-span-1">
      <p class=" text-2xl leading-tight text-white m-1 p-1"><span class="font-Eiko-Italic text-rose-4 text-8xl lg:text-9xl">By</span> 
        now hopefully, you've pressed the play button on my welcome message above. As a hypnotherapist, it's important you get a feel for my voice and personality if we are going to do some work together.
      </p>
    </div>
    <div class="grid col-span-1 row-span-1">
      <p class=" text-2xl leading-tight text-white m-1 p-1">
        Just as so many before me and many to follow, I've had my own path to travel and it's not always been straight forward but it has led me to where I am today and it continues to get better and convince 
        me that, miracles actually do happen.
      </p>
    </div>
  </section>

  <section class="grid h-screen w-screen items-center bg-gradient-to-b from-rose-1 to-transparent rounded-2xl text-rose-4">
    <h6 class="text-right text-4xl m-1 p-1">
      Having personally experienced such things as anxiety, trauma and chronic fatigue syndrome, and having recovered through the same therapies I offer today, 
      allows me to truly understand other's issue's, and how best to treat them.
    </h6>
  </section>

  <section class="grid h-screen items-center">
    <div class="grid">
      <p class="text-2xl text-white m-1 p-1">
        <span class="font-Eiko-Italic text-rose-4 text-7xl lg:text-9xl">My</span> 
        desire today and every day hereon, is to make people feel less broken, so they 
        can experience more joy and happiness and less stress in their lives. This in turn can only benefit those around them, and there we have it, a beautiful ripple effect begins and reaches far and 
        wide, as far as the imagination can take you!
      </p>
    </div>
  </section>

</main>


