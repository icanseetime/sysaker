import React from 'react'
import './Grid.css'

// Components
import GridSquare from '../GridSquare/GridSquare'

export default function Grid({ size }) {
	return (
		<div
			className="Grid"
			style={{
				gridTemplateColumns: `repeat(${size.columns}, auto)`
			}}
		>
			{Array(size.columns * size.rows).fill(<GridSquare />)}
		</div>
	)
}
