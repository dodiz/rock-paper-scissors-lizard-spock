export class UI {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  particles: Particle[] = [];
  particlesSpeed: number;
  particlesColor: string;

  constructor(canvas: HTMLCanvasElement, speed: number, color: string) {
    this.ctx = canvas.getContext("2d")!;
    this.canvas = canvas;
    this.particlesSpeed = speed;
    this.particlesColor = color;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  animate() {
    this.clear();
    const particle = new Particle(
      this.ctx,
      this.canvas.width / 2,
      this.canvas.height / 2,
      this.particlesSpeed,
      this.particlesColor
    );
    this.particles.push(particle);
    this.particles = this.particles.filter((particle) => {
      if (
        particle.x < 0 ||
        particle.x > this.canvas.width ||
        particle.y < 0 ||
        particle.y > this.canvas.height ||
        particle.opacity <= 0
      ) {
        return false;
      }
      particle.update();
      return true;
    });
    requestAnimationFrame(() => this.animate());
  }
}

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  ctx: CanvasRenderingContext2D;
  opacity = 1;
  color: string;

  constructor(
    ctx: CanvasRenderingContext2D,
    initialX: number,
    initialY: number,
    speed: number,
    color: string
  ) {
    this.x = initialX;
    this.ctx = ctx;
    this.y = initialY;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * speed - speed / 2;
    this.speedY = Math.random() * speed - speed / 2;
    this.color = color;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.ctx.fillStyle = "rgba(" + this.color + "," + this.opacity + ")";
    this.size -= 0.005;
    this.opacity -= 0.005;
    if (this.size < 0) {
      this.size = 0;
    }
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}
