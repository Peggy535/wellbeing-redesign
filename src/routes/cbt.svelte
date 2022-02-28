<script>
  import { onMount } from "svelte";
  import gsap from 'gsap';
  import Sketch8 from '../sketches/sketch8.svelte';
  import SectionTitleSubheading from "../components/Section_Title_Subheading.svelte";
  import TherapyStatement from "../components/TherapyStatement.svelte";
  import ParagraphVogue from "../components/Paragraph_Vogue.svelte";
  import BookingStatement from '../components/BookingStatement.svelte';
  import {hasArrayOfFacts} from '../stores.js';

  // Declare global variable for the transition statement
  let statement;
  onMount(() => {
    let tl = gsap.timeline();
    gsap.registerPlugin(TextPlugin);

    let classPosition = document.getElementById('section_content');
    classPosition.classList.add('fixed');
    function changeState() {
      classPosition.classList.remove("fixed");
      classPosition.classList.add("absolute");
    }

    let arrayLength = $hasArrayOfFacts.length;
    let randomIndex = Math.floor(Math.random() * arrayLength);
    statement = $hasArrayOfFacts[randomIndex];

    tl.set('#transitionCover', {x:screen.width, autoAlpha:1})
    .to('#transitionCover', {x:0, duration: 0.5})
    .to('#transitionCover h1', {autoAlpha:1, duration:1})
    .to('#transitionCover h2', {autoAlpha:1, duration:1})
    .to('#transitionCover h1, #transitionCover h2', {autoAlpha:0, duration:0.5, delay:4})
    .to('#transitionCover', {x:-screen.width, duration:0.5})
    .to('#section_content', {autoAlpha:1}, '>')
    .to('#sketch_8', {autoAlpha:1, onComplete:changeState}, '<');
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
<section id="section_content" class="z-20 top-0 w-screen overflow-x-hidden text-lime-4 font-Eiko-Thin invisible">
  <SectionTitleSubheading
  fontStyle="font-Eiko sm:font-Eiko-Thin"
  title="Mindful CBT"
  subTitle="(Cognitive Behavioural Therapy)"
  > 
  </SectionTitleSubheading>
  <TherapyStatement
    statement="Mindful CBT is a talk therapy that focuses on the particular ways in which an individual thinks, behaves and acts, in the attempt to deal successfully with their behavioural, 
    emotional and social problems and issues."
    fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl"
  >
  </TherapyStatement>

  <div class="grid grid-cols-1 sm:grid-cols-4">
    <ParagraphVogue
        textColourParagraph="text-white"
        textColourWord="text-lime-4"
        largeWord="The"
        paragraphWords=" difference between psychotherapy and behavioural therapy is that psychotherapy tends to emphasise the importance of the personal meaning placed upon things and how the majority 
        of thinking patterns begin in childhood. Behavioural therapy relates to everything the person does. How they act with other people, when they are alone. How they avoid certain aspects 
        of life and how they engage and interact with the world around them. How active or inactive towards being involved in participating in life on a healthy level.">
    </ParagraphVogue>
  </div>
  <TherapyStatement
    statement="My clients' have experienced amazing results. Especially in stress related disorders."
    fontSize="text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl"
  >
  </TherapyStatement>
  <div class="grid grid-cols-1 sm:grid-cols-4">
    <ParagraphVogue
        textColourParagraph="text-white"
        textColourWord="text-lime-4"
        largeWord="The"
        paragraphWords=" advantage that CBT has over other therapies is that clients undergoing CBT treatment are actually learning the educational aspects of the therapy, which is then 
        empowering them to become their own personal therapist and to be more aware of the circumstances, situations, behaviours and people that could cause them to lapse and therefore 
        to be able to avoid these aspects in their lives.">
    </ParagraphVogue>
  </div>
  <BookingStatement
    statement="Book your online CBT here."
  ></BookingStatement>
  <nav>
    <a href="/">Home | </a>
    <a href="/hypnotherapy">Hypnotherapy | </a>
    <a href="/relaxation">Relaxation | </a>
    <a href="/cbt">CBT | </a>
    <a href="/aboutjh">About JH</a>
  </nav>
</section>