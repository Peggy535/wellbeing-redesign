<script>
import { onMount } from "svelte";
import P5 from "p5-svelte";
import gsap from 'gsap';


/* const sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(600, 600);
    p5.noStroke();
  };
  //Creating a random palettte
  
  //Creating state - in this case a grid
  const grid = () => {
    const points = [];
    const count = 20;
    for(let x=0; x<count; x++) {
      for(let y=0; y<count; y++){
        //normalizing the co-ordinates between 0 to 1 - Subtract 1 from count to ensure the grid extends to all sides.
        const u = count <= 1 ? 0.5 : x/(count-1);
        const v = count <= 1 ? 0.5 : y/(count-1);
        p5.noiseDetail(20, 0.7);
        const radius = Math.abs(p5.noise(u, v)*0.03);
        points.push({
          radius,
          position: [u, v]
        });
      }
    }
    return points;
  }
  const p = grid().filter(() => p5.random() > 0.5);
  const margin = 50;
  //console.log(p);
  p5.draw = () => {
    p.forEach(data => {
      const{
        position, radius
      } = data;
      const [u, v] = position;
      //Apply lerp() to ensure that all the shapes are contained on the canvas and it provides a margin around the canvas
      const x = p5.lerp(margin, p5.width-margin, u);
      const y = p5.lerp(margin, p5.height-margin, v);
      p5.arc(x, y, radius*p5.width, radius*p5.width, 0, p5.PI*2);
      p5.fill('#F4D1D6');
    });
  };
} */

const sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    //p5.background(184,110,122);
    // translucent stroke using alpha value
    p5.stroke(244,209,214, 20);
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
      console.log(chordCounter);
    }
  }
};
</script>

<main class="h-screen w-screen flex place-content-center items-center z-10 bg-rose-main overflow-hidden overscroll-none">
    <P5 {sketch} debug />
  <section class="z-20 h-screen w-screen absolute top-0 left-0">
    <div class="grid h-screen w-screen grid-rows-4 grid-cols-1 gap-3">
      <div class="grid row-start-3 row-end-4 items-center">
        <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl text-rose-1 leading-none
                  ml-3 sm:ml-6 lg:ml-8">JH Online Therapies</h1>
      </div>
    </div>
  </section>
</main>

<style>

</style>