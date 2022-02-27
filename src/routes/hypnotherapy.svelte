<script>
  import { onMount } from "svelte";
  import gsap from 'gsap';
  import Sketch5 from '../sketches/sketch5.svelte';
  import SectionTitle from "../components/Section_Title.svelte";
  import TherapyStatement from "../components/TherapyStatement.svelte";
  import ParagraphVogue from "../components/Paragraph_Vogue.svelte";
  import BlockStatement from "../components/BlockStatement.svelte";
  import DoubleParagraph from "../components/Double_Paragraph.svelte";
  import BookingStatement from "../components/BookingStatement.svelte";


  onMount(() => {
    function changeState() {
      classPosition.classList.remove("fixed");
      classPosition.classList.add("absolute");
    }

    let tl = gsap.timeline();
    gsap.registerPlugin(TextPlugin, Flip);
    let classPosition = document.getElementById('section_content');
    classPosition.classList.add('fixed');

    tl.set('#transitionCover', {x:screen.width, autoAlpha:1})
     .to('#transitionCover', {x:0, duration: 0.5})
     .to('#transitionCover h1', {autoAlpha:1, duration:1})
     .to('#transitionCover h2', {autoAlpha:1, duration:1})
     .to('#transitionCover', {x:-screen.width, duration:0.5, delay:4})
     .to('#section_content', {autoAlpha:1}, '>')
     .to('#sketch_5', {autoAlpha:1, onComplete:changeState}, '<');
  });
</script>
 
<div id="transitionCover" class="fixed grid grid-cols-1 grid-rows-4 top-0 left-0 bg-green-4 text-beige-main h-screen w-screen z-100 invisible font-Eiko-Thin items-center">
  <div class="grid row-start-1 row-end-2">
    <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-11xl pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-10 invisible">Did you know?</h1>
  </div>
  <div class="grid row-start-3 row-end-5">
    <h2 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-10 invisible">The average person experiences hypnosis at least twice a day.</h2>
  </div>
</div>
<div id="sketch_5" class="invisible">
  <Sketch5/>
</div>

<section id="section_content" class="z-20 top-0 w-screen m-0 p-0 text-green-4 font-Eiko-Thin invisible">
  <SectionTitle
    title="Hypnotherapy"
    fontStyle="font-Eiko sm:font-Eiko-Thin">
  </SectionTitle>
  <TherapyStatement
    statement="A natural therapy that can help you to cope with the problems and challenges of everyday life like anxiety, phobias, fears, self esteem or even addiction to name but a few."
    fontSize="text-5xl pr-2 sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-8xl"
    >
  </TherapyStatement>
  <div class="grid h-auto grid-cols-2 sm:grid-cols-4 mb-10">
    <ParagraphVogue
        textColourParagraph="text-neutral-800"
        textColourWord="text-green-4"
        largeWord="Curative"
        paragraphWords=" hypnotherapy is a more 
        holistic feel to the sessions and work we do together. The word 'hypnotherapy' is derived from 'hypno' - relating to 'hypnosis', and 'therapy' because of the therapeutic suggestions that 
        are given during treatment.">
    </ParagraphVogue>
  </div>
  <BlockStatement
    statement="Hypnosis is the profound state of relaxation, focused mind, and heightened sensory awareness achieved when applied techniques take the brain waves of a subject to the level of alpha or below."
  >
  </BlockStatement>
  <DoubleParagraph
    textColourParagraph="text-neutral-800"
    textColourWord="text-green-4"
    largeWord="You"
    firstParagraph=" are not asleep, but it is something like a state just before you drift off to sleep - you can still hear everything, speak and even move around if you wished to. When you are in that state, your subconscious mind is more accessible 
    and open to suggestion."
    secondParagraph="It can be used to treat anxiety, phobias, compulsions (like over eating) and addictions (like smoking). 
    It can help with pain management and can ease the symptoms of chronic conditions such as asthma and IBS. Although it cannot cure physical illnesses or infections, it can help boost the immune system and 
    improve our ability to manage illness."
  >
  </DoubleParagraph>
  <div class="grid h-auto grid-cols-2 sm:grid-cols-4 mb-10">
    <ParagraphVogue
        textColourParagraph="text-neutral-800"
        textColourWord="text-green-4"
        largeWord="Many"
        paragraphWords=" people imagine that the hypnotist has to do all the work without realising that the hypnotist only does all the work while they are talking and during the session. 
        As the client drifts deeper into the experience they begin to discover that each session is a partnership of two minds. The hypnotists works the unconscious mind while the client 
        follows instructions inside and outside the therapy session using the conscious mind, this allows the work to be completed both consciously and unconsciously.">
    </ParagraphVogue>
  </div>
  <BookingStatement
    statement="Book your hypnotherapy session today."
  ></BookingStatement>

  
  <nav>
    <a href="/">Home | </a>
    <a href="/hypnotherapy">Hypnotherapy | </a>
    <a href="/relaxation">Relaxation |</a>
    <a href="/cbt">CBT |</a>
    <a href="/aboutjh">About JH</a>
  </nav>
</section>
