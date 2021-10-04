import React from 'react'
import './SingleColor.css'

// Utils
import { convertRGB } from '../../../utils/colorConversion'

export default function SingleColor({ color, changeColor }) {
	return (
		<span
			className="SingleColor"
			style={{
				backgroundColor: color
			}}
			onClick={(e) => {
				if (e.target.style.backgroundColor) {
					// TODO: set pen mode
					let hex = convertRGB(e.target.style.backgroundColor)
					changeColor(hex)
				} else {
					// TODO: set eraser mode
					changeColor('transparent')
				}
			}}
		></span>
	)
}
