<script>
import P5 from "p5-svelte";

let x_off1 = 0;
let x_off2 = 1000;

const sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
  };
  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    console.log(p5.windowWidth+', '+p5.windowHeight);
  };
  p5.draw = () => {
    p5.background(51);
    /* //let x = p5.random(p5.windowWidth);
    let x_noise = p5.map(p5.noise(x_off1), 0, 1, 0, p5.width);
    let y_noise = p5.map(p5.noise(x_off2), 0, 1, 0, p5.height);
    p5.ellipse(x_noise, y_noise, 24, 24);
    x_off1 += 0.02;
    x_off2 += 0.02; */
    p5.stroke(255);
    p5.noFill();
    p5.beginShape();
    let x_off = 0;
    for(let x=0; x < p5.width; x++){
      p5.stroke(255);
      //let y = p5.random(p5.height);
      let y = p5.noise(x_off)*p5.height;
      p5.vertex(x, y);
      x_off += 0.01;
    }
    p5.endShape();
  };
};
</script>

<section class="h-screen w-screen z-40">
  <div class="grid h-screen w-screen grid-rows-4 grid-cols-1 gap-3">
    <div class="grid items-center">
      <P5 {sketch} debug/>
    </div>
  </div>  
</section>