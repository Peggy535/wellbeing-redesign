<script>
  import P5 from 'p5-svelte';

  const sketch = (p5) => {
    let w = p5.displayWidth;
    let h = p5.displayHeight;

    p5.setup = () => {
      p5.createCanvas(w, h);
    };
    // Specific functions
    p5.windowResized = () => {
      p5.resizeCanvas(p5.displayWidth, p5.displayHeight);
    };
    // Draw function
    p5.draw = () => {
      
    };
  };

</script>
<div class="fixed -z-15 top-0 left-0">
  <P5 {sketch} debug />
</div>