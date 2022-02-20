<script>
import P5 from "p5-svelte";

const sketch = (p5) => {
  let w = p5.displayWidth;
  let h = p5.displayHeight;
  let circleWidth;

  p5.setup = () => {
    p5.createCanvas(w, h);
    p5.background(244,209,214);
    p5.stroke(219,161,170, 40);
    if(w < 400) {
       circleWidth = 200;
     } else if(w <700){
       circleWidth = 300;
     } else if(w < 1050){
       circleWidth = 400;
     } else if(w < 1300){
      circleWidth = 500;
     } else{
       circleWidth = 600;
     }
     console.log(circleWidth);
  };
  const randomChord = () => {
    // find a random point on a circle
    let angle1 = p5.randomGaussian(0, 2 * p5.PI);
    let xpos1 = circleWidth + (circleWidth * p5.cos(angle1));
    let ypos1 = circleWidth + (circleWidth * p5.sin(angle1));

    // find another random point on the circle
    let angle2 = p5.randomGaussian(0, 2 * p5.PI);
    let xpos2 = (2*w) + (2*w) * p5.cos(angle2);
    let ypos2 = (2*h) + (2*h) * p5.sin(angle2);
    // draw a line between them
    p5.line(xpos1, ypos1, xpos2, ypos2);
  };
  /* p5.windowResized = () => {
      w = p5.windowWidth;
      h = p5.windowHeight;
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
      p5.setup();
    }; */
  let chordCounter = 0;
  p5.draw = () => {
    if(chordCounter < 3500){
      p5.translate(-w/5, -h/10); 
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