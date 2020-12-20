import './Line.css';
import React from 'react';
import Canvas from '../common/Canvas';
import getRandomInt from '../services/numberUtils';

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.state = {
      canvas: undefined,
    };
  }

  componentDidMount() {
    this.setState({ canvas: document.getElementById('canvas') }, () => {
      const canvObj = this.canvas.current;
      this.setState({ ctx: canvObj.setupCanvas() }, () => {
        this.setupAndDraw();
      });
    });
  }

  setupAndDraw() {
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
          <Canvas ref={this.canvas} />
        </header>
      </div>
    );
  }
}

export default Line;
