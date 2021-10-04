import React, { useContext } from 'react'
import './SingleColor.css'

// Utils
import { ThemeContext } from '../../../utils/ThemeContext'
import { convertRGB } from '../../../utils/colorConversion'

export default function SingleColor({ color, changeColor }) {
	const { theme } = useContext(ThemeContext)
	return (
		<span
			className="SingleColor"
			style={{
				backgroundColor: color,
				border: `2px solid ${theme.secondary}`
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
