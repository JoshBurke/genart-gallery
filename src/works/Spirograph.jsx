import React from 'react';
import Canvas from '../common/Canvas';

export default function Spirograph() {
  // Setup
  const canvasRef = React.createRef();
  const canvas = document.getElementById('canvas');
  const ctx = canvasRef.current.setupCanvas();

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Spirograph codesss

  return (
    <div className="spirograph">
      <Canvas ref={canvasRef} />
    </div>
  );
}
