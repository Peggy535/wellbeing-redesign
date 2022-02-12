<script>
import P5 from "p5-svelte";

const sketch = (p5) => {
  let w = p5.displayWidth;
  let h = p5.displayHeight;
  p5.setup = () => {
    p5.createCanvas(w, h);
    //p5.background(184,110,122);
    // translucent stroke using alpha value
    p5.stroke(244,209,214,80);
  };
  const randomChord = () => {
    // find a random point on a circle
    let angle1 = p5.randomGaussian(0, 2 * p5.PI);
    let xpos1 = 300 + 300 * p5.cos(angle1);
    let ypos1 = 300 + 300 * p5.sin(angle1);

    // find another random point on the circle
    let angle2 = p5.randomGaussian(0, 2 * p5.PI);
    let xpos2 = (2*w) + (2*w) * p5.cos(angle2);
    let ypos2 = (2*h) + (2*h) * p5.sin(angle2);
    // draw a line between them
    p5.line(xpos1, ypos1, xpos2, ypos2);
  };
  p5.windowResized = () => {
    p5.resizeCanvas(p5.displayWidth, p5.displayHeight);

  };
  let chordCounter = 0;
  p5.draw = () => {
    if(chordCounter < 3500){
      p5.translate(-w/10, -h/10); 
      randomChord();
      randomChord();
      randomChord();
      chordCounter += 2;
    }
  }
};
</script>

<div class="fixed -z-15 top-0 left-0">
  <P5 {sketch} debug />
</div>