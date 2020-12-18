import './Line.css';
import React from 'react';
import getRandomInt from './services/numberUtils';

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: undefined,

    };
  }

  componentDidMount() {
    this.setupAndDraw();
  }

  setupAndDraw() {
    this.state = { canvas: document.getElementById('canvas') };
    this.state = { ctx: this.setupCanvas() };
    const { canvas, ctx } = this.state;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    this.drawLine(
      { x: 0, y: canvas.height / 4 },
      { x: canvas.width, y: canvas.height / 4 },
      canvas.width / 20,
      100,
      20,
    );
  }

  setupCanvas() {
    const { canvas } = this.state;
    // Get the device pixel ratio, falling back to 1.
    const dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight / 2;
    const rect = canvas.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext('2d');
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    ctx.scale(dpr, dpr);
    return ctx;
  }

  drawLine(start, end, stepSize, maxLines, radius) {
    const { ctx } = this.state;
    const numSteps = Math.round((end.x - start.x) / stepSize);
    const yVals = new Array(numSteps).fill(0);
    let h = 0;
    for (let numLines = 0; numLines < maxLines; numLines += 1) {
      ctx.strokeStyle = `hsla(${h},100%,70%,0.2)`;
      h += 360.0 / maxLines;
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      let xPos2 = start.x;
      for (let i = 0; i < numSteps; i += 1) {
        const xPos1 = xPos2;
        const yPos1 = start.y + (i === 0 ? 0 : yVals[i - 1]);
        xPos2 += stepSize;
        const noise = getRandomInt(9) - 4;
        yVals[i] += noise;
        const yPos2 = yPos1 + yVals[i];
        ctx.arcTo(xPos1, yPos1, xPos2, yPos2, radius);
      }
      ctx.stroke();
    }
  }

  render() {
    return (
      <div className="Line">
        <header className="Line-header">
          <canvas id="canvas" />
        </header>
      </div>
    );
  }
}

export default Line;
