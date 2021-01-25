/* eslint-disable class-methods-use-this */
import React from 'react';
import './Canvas.css';

class Canvas extends React.Component {
  setupCanvas() {
    const canvas = document.getElementById('canvas');
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

  render() {
    return <canvas id="canvas" />;
  }
}

export default Canvas;
