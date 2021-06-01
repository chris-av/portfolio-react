import React from 'react'

const CircleAlt = () => {
  return (
    <svg id="svg_circle" width="100%" height="100%" viewBox = '0 0 450 400'> 
      <defs>
        <linearGradient id="left-to-right">
          <stop offset="0" stop-color="#4DAF4C">
            <animate dur="2s" attributeName="offset" fill="freeze" from="0" to="1" />
          </stop>
          <stop offset="0" stop-color="#fff">
            <animate dur="2s" attributeName="offset" fill="freeze" from="0" to="1" />
          </stop>
          
        </linearGradient>
      </defs>
      <path class="path" stroke="#F0F0F0" fill="url(#left-to-right)" stroke-width="1" opacity="1" d="m34.97813,21.70979l-33.55223,0.47088l-0.0394,-13.57138l34.2665,-0.47295l-0.0208,-7.14282l14.50618,14.42226l-14.95643,15.04345l-0.20382,-8.74944z" id="svg_1" />
    </svg>
  );
}

export default CircleAlt
