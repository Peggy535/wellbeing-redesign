<script>
  import {onMount} from 'svelte';
  import gsap from 'gsap';
  import {TextPlugin} from 'gsap/dist/TextPlugin';
  import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
  import Sketch8 from '../sketches/sketch8.svelte';
  import {hasArrayOfFacts} from '../stores.js';

  // Declare global variable for the transition statement
  let statement;
  onMount(() => {
    let tl = gsap.timeline();
    gsap.registerPlugin(TextPlugin);

    

    let arrayLength = $hasArrayOfFacts.length;
    let randomIndex = Math.floor(Math.random() * arrayLength);
    statement = $hasArrayOfFacts[randomIndex];

    tl.set('#transitionCover', {x:screen.width, autoAlpha:1})
    .to('#transitionCover', {x:0, duration: 0.5})
    .to('#transitionCover h1', {autoAlpha:1, duration:1})
    .to('#transitionCover h2', {autoAlpha:1, duration:1})
    .to('#transitionCover h1, #transitionCover h2', {autoAlpha:0, duration:0.5, delay:4})
    .to('#transitionCover', {x:-screen.width, duration:0.5, onComplete:() => document.querySelector('#section_content').classList.remove('is-loading')})
    .to('#section_content', {autoAlpha:1}, '>')
    .to('#sketch_8', {autoAlpha:1}, '<');
  });
</script>

<div id="transitionCover" class="fixed grid grid-cols-1 grid-rows-4 top-0 left-0 bg-beige-3 text-lime-2 h-screen w-screen z-100 invisible font-Eiko-Thin items-center">
  <div class="grid row-start-1 row-end-2">
    <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-11xl pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-10 invisible">Did you know?</h1>
  </div>
  <div class="grid row-start-3 row-end-5">
    <h2 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-10 invisible">{statement}</h2>
  </div>
</div>
<div id="sketch_8" class="invisible">
  <Sketch8/>
</div>

<section id="section_content" class="absolute z-20 top-0 w-screen overflow-x-hidden text-lime-4 font-Eiko-Thin invisible is-loading">
  <div class="grid h-screen w-screen grid-rows-4 grid-cols-1">
    <div class="grid row-start-3 row-end-4 items-end">
      <h1 class="font-Eiko sm:font-Eiko-Thin text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-12xl 2xl:text-14xl pl-3 sm:pl-3 md:pl-4 lg:pl-6 2xl:pl-10 xl:mb-4">
        Mindful CBT
      </h1>
      <h6 class="font-Eiko sm:font-Eiko-Thin text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl pl-3 sm:pl-3 md:pl-4 lg:pl-6 2xl:pl-10">
        (Cognitive Behavioural Therapy)
      </h6>
    </div>
  </div>

  <div class="grid grid-cols-1 grid-rows-1 lg:grid-cols-5">
    <div class="grid h-screen col-span-1 row-span-1 lg:col-start-2 lg:col-end-6 items-center m-1 p-1">
      <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl text-right pr-2 md:pr-4 lg:pr-6 2xl:pr-8">
        Mindful CBT is a talk therapy that focuses on the particular ways in which an individual thinks, behaves and acts, in the attempt to deal successfully with their behavioural, 
        emotional and social problems and issues.
      </h2>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-4">
    <div class="grid col-span-1 row-start-4 row-end-6 sm:col-span-2 sm:row-span-1 m-1 p-1 lg:m-2 lg:p-2 place-items-start">
      <p class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-relaxed font-Eiko lg:font-Eiko-Thin text-white">
        <span class="font-Eiko-Italic text-lime-4 text-7xl lg:text-9xl">The</span>
         difference between psychotherapy and behavioural therapy is that psychotherapy tends to emphasise the importance of the personal meaning placed upon things and how the majority 
        of thinking patterns begin in childhood. Behavioural therapy relates to everything the person does. How they act with other people, when they are alone. How they avoid certain aspects 
        of life and how they engage and interact with the world around them. How active or inactive towards being involved in participating in life on a healthy level.
      </p>
    </div>
  </div>

  <div class="grid grid-cols-1 grid-rows-1 lg:grid-cols-5">
    <div class="grid h-screen col-span-1 row-span-1 lg:col-start-2 lg:col-end-6 items-center m-1 p-1">
      <h2 class="text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl text-right pr-2 md:pr-4 lg:pr-6 2xl:pr-8">
        My clients' have experienced amazing results. Especially in stress related disorders.
      </h2>
    </div>
  </div>
 
  <div class="grid grid-cols-1 sm:grid-cols-4">
    <div class="grid grid-cols-1 sm:grid-cols-4">
      <div class="grid col-span-1 row-start-4 row-end-6 sm:col-span-2 sm:row-span-1 m-1 p-1 lg:m-2 lg:p-2 place-items-start">
        <p class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-relaxed font-Eiko lg:font-Eiko-Thin text-white">
          <span class="font-Eiko-Italic text-lime-4 text-7xl lg:text-9xl">The</span>
          advantage that CBT has over other therapies is that clients undergoing CBT treatment are actually learning the educational aspects of the therapy, which is then 
        empowering them to become their own personal therapist and to be more aware of the circumstances, situations, behaviours and people that could cause them to lapse and therefore 
        to be able to avoid these aspects in their lives.
        </p>
      </div>
    </div>
  </div>
  <div class="grid w-screen">
    <h6 class="font-Eiko-Italic text-right text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl m-1 p-1 md:p-4 lg:p-6 2xl:p-8">
      Make your booking here.
    </h6>
  </div>
  <nav>
    <a href="/">Home | </a>
    <a href="/hypnotherapy">Hypnotherapy | </a>
    <a href="/relaxation">Relaxation | </a>
    <a href="/cbt">CBT | </a>
    <a href="/aboutjh">About JH</a>
  </nav>
</section>

<style>
  .is-loading {
    display:none;
  }
</style>