<script>
  import P5 from 'p5-svelte';

  const sketch = (p5) => {
    let w = p5.windowWidth;
    let h = p5.windowHeight;
    let pos, vel;

    p5.setup = () => {
      p5.createCanvas(w, h);
    };
    // Specific functions
    p5.windowResized = () => {
      w = p5.windowWidth;
      h = p5.windowHeight;
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
      p5.setup();
    };
    const show = () => {
      p5.stroke(232,194,170,30);
      p5.strokeWeight(1);
      //vel = p5.createVector(p5.random(-50, 50), p5.random(-50, 50));
      vel = p5.Vector.random2D().mult(p5.random(w*1.2,h*1.2));
      p5.line(0,0,vel.x, vel.y);
    }
    // Draw function
    p5.draw = () => {
      p5.translate(w/9, h/9);
      show();
    };
  };
</script>
<div class="fixed -z-15 top-0 left-0">
  <P5 {sketch} debug />
</div>