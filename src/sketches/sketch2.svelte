<script>
import P5 from "p5-svelte";

const sketch = (p5) => {
  
  p5.setup = () => {
    p5.createCanvas(p5.displayWidth, p5.displayHeight);
  };
  p5.draw = () => {
    p5.background(34);
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