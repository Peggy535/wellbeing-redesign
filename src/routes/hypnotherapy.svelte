<script>
  import {onDestroy, onMount} from 'svelte';
  import gsap from 'gsap';
  import {TextPlugin} from 'gsap/dist/TextPlugin.js';
  import {ScrollTrigger} from 'gsap/dist/ScrollTrigger.js';
  import Sketch5 from '../sketches/sketch5.svelte';
  import {hasArrayOfFacts} from '../stores.js';

  // Declare global variable for the transition statement
  let statement;
  onMount(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();

    let classPosition = document.getElementById('content');
    
    function changeState() {
      classPosition.classList.remove("fixed");
      classPosition.classList.add("absolute");
    }
    
    let arrayLength = $hasArrayOfFacts.length;
    let randomIndex = Math.floor(Math.random() * arrayLength);
    statement = $hasArrayOfFacts[randomIndex];

    tl.set('#transitionCover', {y:-screen.height, autoAlpha:1})
    .to('#transitionCover', {y:0, duration: 0.5})
    .to('#transitionCover h1', {autoAlpha:1, duration:1})
    .to('#transitionCover h2', {autoAlpha:1, duration:1})
    .to('#transitionCover h1, #transitionCover h2', {autoAlpha:0, duration:0.5, delay:1})
    .to('#transitionCover', {y:screen.height, duration:0.5})
    .to('#content', {autoAlpha:1, onComplete:changeState}, '>')
    .to('#sketch_5', {autoAlpha:1}, '<');

    /* let tl2 = gsap.timeline({
      scrollTrigger: { 
        trigger: "#therapy_statement",
        start:"top 35%",
        end:"top 5%",
        markers: true, 
        scrub:true,
        invalidateOnRefresh: true,
        refreshPriority: 1,       
      }
    });
    tl2.set('#therapy_statement', {x:100})
      .to('#therapy_statement',{x:0, duration:1, autoAlpha:1}); */
  });

  /* onDestroy(() => {
    ScrollTrigger.refresh();
  })  */
</script>
 
<div id="transitionCover" class="fixed grid grid-cols-1 grid-rows-4 top-0 left-0 bg-beige-2 text-green-4 h-screen w-screen z-100 invisible font-Eiko-Thin items-center">
  <div class="grid row-start-1 row-end-2">
    <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-11xl pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-10 invisible">Did you know?</h1>
  </div>
  <div class="grid row-start-3 row-end-5">
    <h2 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-10 invisible">{statement}</h2>
  </div>
</div>

<div id="sketch_5" class="invisible m-0 p-0">
  <Sketch5/>
</div>

<main id="content" class="fixed text-green-main font-Eiko-Thin invisible">
  <section id="section_content">
    <div class="grid h-screen w-screen grid-rows-4 grid-cols-1">
      <div class="grid row-start-3 row-end-4 items-end">
          <h1 class="font-Eiko sm:font-Eiko-Thin text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-11xl pl-3 sm:pl-5 md:pl-7 lg:pl-9 2xl:pl-10">
            Hypnotherapy
          </h1>
      </div>
    </div>
  </section>

  <section id="therapy_statement" class="grid grid-cols-1 grid-rows-1 lg:grid-cols-5 bg-orange-300">
    <div class="grid h-screen col-span-1 row-span-1 lg:col-start-2 lg:col-end-6 items-center">
      <h2 class="font-Eiko-Thin text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-right pr-2 md:pr-4 lg:pr-6 2xl:pr-8">
        A natural therapy that can help you to cope with the problems and challenges of everyday life like anxiety, phobias, fears, self esteem or even addiction to name but a few.
      </h2>
    </div>
  </section>
    
  <section class="grid h-screen grid-cols-1 sm:grid-cols-2 items-center">
    <div class="grid col-span-2 sm:col-span-1 bg-purple-300">
      <p class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-relaxed font-Eiko lg:font-Eiko-Thin text-stone-700">
        <span class="font-Eiko-Italic text-green-main text-7xl lg:text-9xl">Curative</span> hypnotherapy is a more holistic feel to the sessions and work we do together. The word 'hypnotherapy' 
        is derived from 'hypno' - relating to 'hypnosis', and 'therapy' because of the therapeutic suggestions that are given during treatment.
      </p>
    </div>
  </section>

  <section class="grid h-screen grid-cols-1 sm:grid-cols-2 bg-slate-600 items-center">
    <blockquote class="grid pr-2 md:pr-10 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl text-right">
      "Hypnosis is the profound state of relaxation, focused mind, and heightened sensory awareness achieved when applied techniques take the brain waves of a subject to the level of alpha or below.
    </blockquote>
  </section>

  <section class="grid h-screen grid-cols-2 sm:grid-cols-4 bg-blue-400">
    <div class="grid col-start-1 col-end-3 row-start-2 row-end-3 sm:col-span-2 sm:row-span-1 place-content-evenly lg:col-span-2">
      <p class=" text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-relaxed font-Eiko lg:font-Eiko-Thin text-stone-700"><span class="font-Eiko-Italic text-green-main text-8xl lg:text-9xl">You</span> 
        are not asleep, but it is something like a state just before you drift off to sleep - you can still hear everything, speak and even move around if you wished to. When you are in that state, 
        your subconscious mind is more accessible and open to suggestion.  
      </p><br/>
      <p class=" text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-relaxed font-Eiko lg:font-Eiko-Thin text-stone-700">
        It can be used to treat anxiety, phobias, compulsions (like over eating) and addictions (like smoking). It can help with pain management and can ease the symptoms of chronic conditions 
        such as asthma and IBS. Although it cannot cure physical illnesses or infections, it can help boost the immune system and improve our ability to manage illness.
      </p>
    </div>
  </section>
    
  <section class="grid h-screen grid-cols-2 sm:grid-cols-4 items-center bg-yellow-300">
    <div class="grid col-span-1 row-start-4 row-end-6 sm:col-span-2 sm:row-span-1">
      <p class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-relaxed font-Eiko lg:font-Eiko-Thin text-stone-700">
        <span class="font-Eiko-Italic text-green-main text-7xl lg:text-9xl">Many</span> 
        people imagine that the hypnotist has to do all the work without realising that the hypnotist only does all the work while they are talking and during the session. 
        As the client drifts deeper into the experience they begin to discover that each session is a partnership of two minds. The hypnotists works the unconscious mind while the client 
        follows instructions inside and outside the therapy session using the conscious mind, this allows the work to be completed both consciously and unconsciously.
      </p>
    </div>
  </section>

  <section class="grid w-screen">
    <h6 class="font-Eiko-Italic text-right text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl m-1 p-1 md:p-4 lg:p-6 2xl:p-8">
      Book your hypnotherapy session today.
    </h6>
  </section>
</main>
<!-- 
<style>
  .is-loading {
    display: none;
  }
</style> -->
