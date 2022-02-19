<script>
  import P5 from 'p5-svelte';

  const sketch = (p5) => {
    let w = p5.displayWidth;
    let h = p5.displayHeight;
    let points = [];
    let mult = 0.002;
    
    p5.setup = () => {
      p5.createCanvas(w, h);
      p5.background(160,198,145);
      p5.noiseDetail(1);
      p5.angleMode(p5.DEGREES);
      let density;
        if(w < 400) {
        density = 30;
      } else if(w <700){
        density = 40;
      } else if(w < 1050){
        density = 50;
      } else if(w < 1300){
        density = 60;
      } else{
        density = 70;
      }
      //console.log(density);
      let space = p5.width/density;
      for(let x = 0; x<p5.width; x+= space){
        for(let y=0; y < p5.height; y += space){
          let p = p5.createVector(x + p5.random(-25, 25), y + p5.random(-25, 25));
          points.push(p)
        }
      }
    };
    p5.windowResized = () => {
      w = p5.windowWidth;
      h = p5.windowHeight;
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
      p5.setup();
    };
    // Draw function
    p5.draw = () => {
      p5.noStroke();
      p5.fill(202,226,193);

      for(let i =0; i<points.length; i++){
        let angle = p5.map(p5.noise(points[i].x*mult, points[i].y*mult),0, 1, 0, 720);
        points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)));
        p5.ellipse(points[i].x, points[i].y, 1);
      }
    };
  };

</script>
<div class="fixed -z-15 top-0 left-0">
  <P5 {sketch} debug />
</div>