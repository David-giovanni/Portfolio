"use client";

import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];

    const mouse = {
      x: null,
      y: null,
      radius: 100,
    };

    // Après ça :
    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;

      // Réinitialiser la position après 0.2 seconde d'inactivité
      clearTimeout(mouse.timer);
      mouse.timer = setTimeout(() => {
        mouse.x = undefined;
        mouse.y = undefined;
      }, 200);
    });

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }

        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // const dx = mouse.x - this.x;
        // const dy = mouse.y - this.y;
        // const distance = Math.sqrt(dx * dx + dy * dy);

        // if (distance < mouse.radius) {
        //   if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        //     this.x += 5;
        //   }

        //   if (mouse.x > this.x && this.x > this.size * 10) {
        //     this.x -= 5;
        //   }

        //   if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        //     this.y += 5;
        //   }

        //   if (mouse.y > this.y && this.y > this.size * 10) {
        //     this.y -= 5;
        //   }
        // }

        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
      }
    }

    const init = () => {
      particlesArray.length = 0;
      const numberOfParticles = (canvas.height * canvas.width) / 4000;

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 1 + 0.5;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const directionX = Math.random() * 2 - 1.5;
        const directionY = Math.random() * 2 - 1.5;
        const color = "#c500ff";

        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle) => {
        particle.update();
      });

      requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
};

export default ParticlesBackground;
