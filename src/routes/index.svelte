<script>
import { onMount } from "svelte";
import P5 from "p5-svelte";
import gsap from 'gsap';

const sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.displayHeight);
    //p5.background(184,110,122);
    // translucent stroke using alpha value
    p5.stroke(0, 0, 0, 20);
  };
  const randomChord = () => {
    // find a random point on a circle
    let angle1 = p5.randomGaussian(0, 2 * p5.PI);
    let xpos1 = 400 + 400 * p5.cos(angle1);
    let ypos1 = 400 + 400 * p5.sin(angle1);

    // find another random point on the circle
    let angle2 = p5.random(0, 2 * p5.PI);
    let xpos2 = 500 + 500 * p5.cos(angle2);
    let ypos2 = 500 + 500 * p5.sin(angle2);
    // draw a line between them
    p5.line(xpos1, ypos1, xpos2, ypos2);
  };
  const resize = () => {
    p5.windowResized = () => {
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    };
  };
  let chordCounter = 0;
  p5.draw = () => {
    if(chordCounter < 3500){ 
      randomChord();
      randomChord();
      randomChord();
      chordCounter += 2;
    }
  }
};

const sketch2 = (p5) => {

};

</script>


<div class="fixed z-15 top-0 left-0">
  <P5 {sketch} debug />
</div>
  <section class="z-20 h-screen w-screen">
    <div class="grid h-screen w-screen grid-rows-4 grid-cols-1 gap-3">
      <div class="grid row-start-3 row-end-4 items-center">
        <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-11xl leading-none ml-3 sm:ml-6 lg:ml-10">JH Online Therapies</h1>
      </div>
    </div>
  </section>
  <section class="z-30 h-screen w-screen bg-gray-400">
    <div class="grid h-screen w-screen grid-rows-4 grid-cols-1 gap-3">
      <div class="grid row-start-3 row-end-4 items-center">
        <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-11xl leading-none ml-3 sm:ml-6 lg:ml-10">Welcome message section</h1>
      </div>
    </div>
  </section>



<style>

</style>