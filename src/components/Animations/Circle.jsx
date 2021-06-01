import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const Circle = () => {
  const [flip, set] = useState(false);
		const { x } = useSpring({
			reset: true,
			reverse: flip,
			from: { x: 0 },
			x: 1,
			delay: 200,
			config: config.molasses,
			onRest: () => set(!flip)
		});

		return (
			<animated.svg
				style={{ margin: 20, width: 80, height: 80 }}
				viewBox="0 0 45 44"
				strokeWidth="1"
				// fill="white"
				stroke="rgb(45,55,71)"
				strokeLinecap="round"
				strokeDasharray={156}
				strokeDashoffset={x.interpolate(x => (1 - x) * 156)}
			>
				
				<circle cx="25" cy="25" r="15" fill="url(#left-to-right)" />

			</animated.svg>
		);
}

export default Circle;
