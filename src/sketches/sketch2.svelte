<script>
import P5 from "p5-svelte";

//Flow field...
const sketch = (p5) => {
  //Setting up a grid and extending it beyond the scope of the window width and height
  const count = 20;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.background(0);
  };
  const createGrid = () => {
    let points = [];
    for(let x = 0; x<count;x++) {
      for(let y=0; y<count; y++){
        const u = x/(count-1);
        const v = y/(count-1);
        points.push([u,v])
      }
    }
    console.log(points);
    return points;
  };
  //Draw horizontal lines
  function drawline(){
    p5.line(0, 0, 40, 0);
  } 
  // const points = createGrid();
  /* let theta = (p5.PI)*0; */
  p5.draw = () => {
    let theta = (p5.PI)*0;
    p5.background(0);
    
    /* points.forEach(([ u, v]) => {
      const x = u * p5.windowWidth;
      const y = v * p5.windowHeight;
      p5.stroke(100);
      p5.strokeWeight(2);
      p5.push();
      p5.translate(x, y);
      p5.rotate(theta);
      drawline();
      p5.pop();
      theta = theta + 0.003;
    }) */
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