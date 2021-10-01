import React, { useState } from 'react'
import './ColorHeader.css'

// Components
import ColorSelector from '../ColorSelector/ColorSelector'

export default function ColorHeader() {
	const [currentColor, setCurrentColor] = useState('#ebebeb')

	return (
		<div className="ColorHeader">
			<ColorSelector color={currentColor} changeColor={setCurrentColor} />
			{/* PreviousColors */}
		</div>
	)
}
