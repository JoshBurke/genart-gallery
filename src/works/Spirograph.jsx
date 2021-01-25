import React from 'react';
import Canvas from '../common/Canvas';

export default class Spirograph extends React.Component {
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

  // Setup
  setupAndDraw() {
    const { canvas, ctx } = this.state;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Spirograph code
  render() {
    return (
      <div className="spirograph">
        <Canvas ref={this.canvas} />
      </div>
    );
  }
}
