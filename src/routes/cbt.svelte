<script>
  import SectionTitleSubheading from "../components/Section_Title_Subheading.svelte";
  import TherapyStatement from "../components/TherapyStatement.svelte";
  import ParagraphVogue from "../components/Paragraph_Vogue.svelte";
  import BookingStatement from '../components/BookingStatement.svelte';
</script>

<section class="absolute z-20 top-0 w-screen overflow-x-hidden text-rose-main font-Eiko-Thin">
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
        textColourParagraph="text-neutral-800"
        textColourWord="text-rose-main"
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
        textColourParagraph="text-neutral-800"
        textColourWord="text-rose-main"
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