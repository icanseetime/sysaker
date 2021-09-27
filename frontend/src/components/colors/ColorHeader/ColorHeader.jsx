import React, { useState } from 'react'

// Components
import ColorSelector from '../ColorSelector/ColorSelector'

export default function ColorHeader() {
	const [currentColor, setCurrentColor] = useState('#ebebeb')
    
	return (
		<div>
			<ColorSelector color={currentColor} changeColor={setCurrentColor} />
			{/* PreviousColors */}
		</div>
	)
}
