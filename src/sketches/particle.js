import P5 from "p5-svelte";

export function Particle() {
  this.pos = p5.createVector(0,0);
  this.vel = p5.createVector(0,0);
  this.acc = p5.createVector(0,0);

  this.update = () => {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }
  this.show = function() {
    p5.stroke(0);
    p5.point(this.pos.x, this.pos.y);
  }
}