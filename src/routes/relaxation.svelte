<script>
  //import { onMount } from "svelte";
  //import P5 from "p5-svelte";
  //import gsap from 'gsap';
  import Sketch3 from '../sketches/sketch3.svelte';
  import SectionTitle from "../components/Section_Title.svelte";
  import TherapyStatement from "../components/TherapyStatement.svelte";
  import BookingStatement from '../components/BookingStatement.svelte';
</script>
 

<Sketch3/>
<section class="absolute z-20 top-0 w-screen overflow-x-hidden overscroll-none text-beige-3 font-Eiko-Thin">
  <SectionTitle
    title="Relaxation Therapy"
    fontStyle="font-Eiko sm:font-Eiko-Thin">
  </SectionTitle>
  <div class="grid w-screen h-fit">
    <p class="text-md pl-3 md:pl-4 lg:pl-6 2xl:pl-10 text-stone-700">Hypnotherapy not for you? I've got you covered.</p>
  </div>
  <TherapyStatement
    statement="Discover all about your wonderful Parasympathetic nervous system, learn new skills on how to shift out of the dreaded STRESS RESPONSE of the sympathetic 
    nervous system and feel more relaxed more of the time."
    fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl"
  >
  </TherapyStatement>
  <!-- Page Specific for Relaxation -->
  <div class="grid h-screen grid-cols-1 sm:grid-cols-4 grid-rows-3 items-center pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-10">
    <div class="grid col-span-1 sm:col-start-1 sm:col-end-4 md:col-end-3 2xl:col-end-3 row-span-1">
      <p class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-relaxed m-1 p-1 text-neutral-800 font-Eiko lg:font-Eiko-Thin"><span class="font-Eiko-Italic text-5xl text-beige-3">Relaxation</span> therapy has been 
        specifically designed for Anxiety and Stress relief. It helps reduce muscle tension and stress, lowers blood pressure, and controls pain.
      </p>
    </div>
    <div class="grid col-span-1 sm:col-start-1 sm:col-end-4 md:col-end-3 2xl:col-end-3 row-span-2">
      <span class="font-Eiko-Italic text-5xl text-beige-3 m-1 p-1">What is deep relaxation therapy?</span>
      <p class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-relaxed m-1 p-1 text-neutral-800 font-Eiko lg:font-Eiko-Thin">
        The relaxation response is a technique designed to elicit a state of deep relaxation in which breathing, pulse rate, blood pressure and metabolism are decreased. 
        Training our bodies on a daily basis to achieve this state of relaxation can lead to enhanced mood, lowered blood pressure and reduction of lifestyle stress.
      </p>
    </div>
  </div>
  <div class="grid h-auto grid-cols-1 sm:grid-cols-4 grid-rows-1 items-center pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-10">
    <div class="grid text-neutral-800 col-span-1 sm:col-span-3 md:col-span-2 font-Eiko lg:font-Eiko-Thin m-1 p-1">
      <ul class="grid">
        <li class=" text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-relaxed mb-4">Techniques used are visual imagery and body awareness to move a person into a deep state of relaxation, involving:</li>
        <li class=" font-Eiko-Italic text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-beige-3 my-2">Breathwork Techniques</li>
        <li class=" font-Eiko-Italic text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-beige-3 my-2">Progressive muscle relaxation</li>
        <li class=" font-Eiko-Italic text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-beige-3 my-2">Meditation</li>
        <li class=" font-Eiko-Italic text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-beige-3 my-2">Guided imagery</li>
      </ul>
    </div>
  </div>
  <BookingStatement
    statement="Book a Relaxation Therapy session here."
  ></BookingStatement>
  <nav>
    <a href="/">Home | </a>
    <a href="/hypnotherapy">Hypnotherapy | </a>
    <a href="/relaxation">Relaxation | </a>
    <a href="/cbt">CBT | </a>
    <a href="/aboutjh">About JH</a>
  </nav>
</section>