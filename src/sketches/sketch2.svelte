<script>
import P5 from "p5-svelte";

//let x_off1 = 0;
//let x_off2 = 1000;
let inc = 0.01;
let scl = 20;
let cols, rows;

const sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    cols = p5.floor(p5.width/scl);
    rows = p5.floor(p5.height/scl);
    p5.pixelDensity(1);
  };
  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
  p5.draw = () => {
    let yoff=0;

    /* p5.loadPixels();
    for(let y=0; y < p5.height; y++){
      let xoff=0;
      for(let x=0; x < p5.width; x++){
        let index = (x + y * p5.width)*4;
        p5.noiseDetail(1);
        let r = p5.noise(xoff, yoff) * 255;
        p5.pixels[index+0]=r;
        p5.pixels[index+1]=r;
        p5.pixels[index+2]=r;
        p5.pixels[index+3]=255;
        xoff += inc;
      }
      yoff += inc;
    }
    p5.updatePixels(); */
  };
};
</script>

<div class="fixed -z-15 top-0 left-0">
  <P5 {sketch} debug/>
</div>