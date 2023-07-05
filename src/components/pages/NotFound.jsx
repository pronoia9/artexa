/*
The MIT License (MIT)

Copyright (c) 2023 Nate Watson (https://codepen.io/nw/pen/WQmxYY)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { PageWrapper } from '..';

export default PageWrapper(() => {
  const canvasRef = useRef();

  useLayoutEffect(() => {
    let ctx = canvasRef.current.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];

    var Particle = function () {
      this.x = this.y = this.dx = this.dy = 0;
      this.reset();
    };

    Particle.prototype.reset = function () {
      this.y = Math.random() * height;
      this.x = Math.random() * width;
      this.dx = Math.random() * 1 - 0.5;
      this.dy = Math.random() * 0.5 + 0.5;
    };

    function createParticles(count) {
      if (count != particles.length) {
        particles = [];
        for (var i = 0; i < count; i++) {
          particles.push(new Particle());
        }
      }
    }

    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      createParticles((width * height) / 10000);
    }

    function updateParticles() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#f6f9fa';

      particles.forEach(function (particle) {
        particle.y += particle.dy;
        particle.x += particle.dx;

        if (particle.y > height) particle.y = 0;
        if (particle.x > width) particle.reset(), (particle.y = 0);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 5, 0, Math.PI * 2, false);
        ctx.fill();
      });

      window.requestAnimationFrame(updateParticles);
    }

    onResize();
    updateParticles();
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <Container footer={false}>
      <canvas ref={canvasRef} className='snow' id='snow' />
      <div className='main-text'>
        <h1>
          Aw jeez.
          <br />
          That page has gone missing.
        </h1>
        <Link className='home-link' to='/'>
          Hitch a ride back home.
        </Link>
      </div>
      <div className='ground'>
        <div className='mound'>
          <div className='mound_text'>404</div>
          <div className='mound_spade'></div>
        </div>
      </div>
    </Container>
  );
}, 'not-found');

/************  animation  ***********/

/*************  styles  ************/
const Container = styled(motion.section)`
  position: relative;
  height: 100%;
  min-height: calc(100vh - 30px);
  color: #5d7399;
  /* font-family: var(--f-tertiary); */
  font-size: 32px;
  font-weight: 500;
  background-color: #d2e1ec;
  background-image: linear-gradient(to bottom, #bbcfe1 0%, #e8f2f6 80%);
  overflow: hidden;
  z-index: 1;

  .snow {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 20;
  }

  .main-text {
    padding: 20vh 20px 0 20px;
    text-align: center;
    line-height: 2em;
    font-size: 5vh;
  }

  .home-link {
    font-size: 0.6em;
    font-weight: 400;
    color: inherit;
    text-decoration: none;
    opacity: 0.6;
    border-bottom: 1px dashed rgba(93, 115, 153, 0.5);

    &:hover {
      opacity: 1;
    }
  }

  .ground {
    height: 160px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #f6f9fa;
    box-shadow: 0 0 10px 10px #f6f9fa;

    &:before,
    &:after {
      content: '';
      display: block;
      width: 250px;
      height: 250px;
      position: absolute;
      top: -62.5px;
      z-index: -1;
      background: transparent;
      transform: scaleX(0.2) rotate(45deg);
    }

    &:after {
      left: 50%;
      margin-left: -166.6666666667px;
      box-shadow: -340px 260px 15px #8a9bb8, -600px 600px 15px #7e90b0, -870px 930px 15px #aab6cb, -1240px 1160px 15px #a1aec6,
        -1525px 1475px 15px #94a3be, -1825px 1775px 15px #9dabc4, -2140px 2060px 15px #94a3be, -2395px 2405px 15px #a4b1c8,
        -2695px 2705px 15px #b4bed1, -3000px 3000px 15px #a4b1c8, -3330px 3270px 15px #b0bccf, -3580px 3620px 15px #8798b6,
        -3945px 3855px 15px #8798b6, -4210px 4190px 15px #b7c1d3, -4475px 4525px 15px #bac4d5, -4840px 4760px 15px #b7c1d3;
    }

    &:before {
      right: 50%;
      margin-right: -166.6666666667px;
      box-shadow: 345px -255px 15px #adb9cd, 565px -635px 15px #a1aec6, 890px -910px 15px #a4b1c8, 1225px -1175px 15px #8496b4,
        1505px -1495px 15px #9dabc4, 1845px -1755px 15px #9dabc4, 2135px -2065px 15px #a4b1c8, 2375px -2425px 15px #a1aec6,
        2665px -2735px 15px #8a9bb8, 2960px -3040px 15px #8a9bb8, 3335px -3265px 15px #b7c1d3, 3615px -3585px 15px #aab6cb,
        3930px -3870px 15px #94a3be, 4225px -4175px 15px #b7c1d3, 4495px -4505px 15px #a7b4c9, 4820px -4780px 15px #97a6c0;
    }
  }

  .mound {
    margin-top: -80px;
    font-weight: 800;
    font-size: 180px;
    text-align: center;
    color: var(--c-accent-1);
    pointer-events: none;

    &:before {
      content: '';
      display: block;
      width: 600px;
      height: 200px;
      position: absolute;
      left: 50%;
      margin-left: -300px;
      top: 50px;
      z-index: 1;
      border-radius: 100%;
      background-color: #e8f2f6;
      background-image: linear-gradient(to bottom, #dee8f1, #f6f9fa 60px);
    }

    &:after {
      content: '';
      display: block;
      width: 28px;
      height: 6px;
      position: absolute;
      left: 50%;
      margin-left: -150px;
      top: 68px;
      z-index: 2;
      color: var(--c-accent-1);
      border-radius: 100%;
      transform: rotate(-15deg);
      box-shadow: -56px 12px 0 1px var(--c-accent-1), -126px 6px 0 2px var(--c-accent-1), -196px 24px 0 3px var(--c-accent-1);
    }
  }

  .mound_text {
    transform: rotate(6deg) translateY(-50px);
  }

  .mound_spade {
    display: block;
    width: 35px;
    height: 30px;
    position: absolute;
    right: 50%;
    top: 42%;
    margin-right: -250px;
    z-index: 0;
    transform: rotate(35deg);
    background: var(--c-accent-1);

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
    }

    &:before {
      width: 40%;
      height: 30px;
      bottom: 98%;
      left: 50%;
      margin-left: -20%;
      background: var(--c-accent-1);
    }

    &:after {
      width: 100%;
      height: 30px;
      top: -55px;
      left: 0%;
      box-sizing: border-box;
      border: 10px solid var(--c-accent-1);
      border-radius: 4px 4px 20px 20px;
    }
  }
`;
