<script>
  import P5 from 'p5-svelte';

  const sketch = (p5) => {
    let w = p5.displayWidth;
    let h = p5.displayHeight;
    let pos, vel;

    p5.setup = () => {
      p5.createCanvas(w, h);
    };
    // Specific functions
    p5.windowResized = () => {
      p5.resizeCanvas(p5.displayWidth, p5.displayHeight);
    };
    
    const show = () => {
      p5.stroke(195,146,116,40);
      p5.strokeWeight(1);
      //vel = p5.createVector(p5.random(-50, 50), p5.random(-50, 50));
      vel = p5.Vector.random2D().mult(p5.random(w,h));
      p5.line(0,0,vel.x, vel.y);
    }
    // Draw function
    p5.draw = () => {
      show();

    };
  };
</script>
<div class="fixed -z-15 top-0 left-0">
  <P5 {sketch} debug />
</div>