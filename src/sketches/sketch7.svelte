<script>
  import P5 from 'p5-svelte';
  
const sketch = (p5) => {
  let w = p5.displayWidth;
  let h = p5.displayHeight;

  p5.setup = () => {
    p5.createCanvas(w, h);
    p5.colorMode(p5.HSB, 360, w, h);
  
  };
  p5.windowResized = () => {
    w = p5.windowWidth;
    h = p5.windowHeight;
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.setup();
  };
  // Draw function
  p5.draw = () => {
    

  };
};

</script>
<div class="fixed -z-15 top-0 left-0">
  <P5 {sketch} debug />
</div>