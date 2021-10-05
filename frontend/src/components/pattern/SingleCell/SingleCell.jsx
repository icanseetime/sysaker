import React, { useContext, useEffect, useState } from 'react'
import './SingleCell.css'

// Utils
import { ThemeContext } from '../../../utils/ThemeContext'
import {
	convertHexToRGB,
	calculateColorBrightness
} from '../../../utils/colorCalculations'

export default function SingleCell({ mode, color }) {
	const { theme } = useContext(ThemeContext)
	const [fill, setFill] = useState({
		color: 'transparent',
		pearl: false,
		pearlColor: theme.secondary
	})

	useEffect(() => {
		if (fill.color !== 'transparent') {
			const rgb = convertHexToRGB(fill.color)
			const brightness = calculateColorBrightness(rgb)
			if (brightness === 'bright') {
				setFill((prev) => {
					return { ...prev, pearlColor: 'hsl(0, 0%, 6%)' }
				})
			} else {
				setFill((prev) => {
					return { ...prev, pearlColor: 'hsl(0, 0%, 92%)' }
				})
			}
		} else {
			// Set color to theme secondary
			setFill((prev) => {
				return { ...prev, pearlColor: theme.secondary }
			})
		}
	}, [fill.color, theme])

	const handleColorChange = (color) => {
		setFill((prev) => {
			return { ...prev, color }
		})
	}

	const setPearl = (pearl) => {
		setFill((prev) => {
			return { ...prev, pearl }
		})
	}

	const handleErase = () => {
		setFill({
			color: 'transparent',
			pearl: false
		})
	}

	return (
		<span
			className="SingleCell"
			style={{
				border: `1px solid ${theme.secondary}`,
				backgroundColor: fill.color
			}}
			onClick={() => {
				switch (mode) {
					case 'pen':
						handleColorChange(color)
						break
					case 'pearl':
						setPearl(true)
						break
					case 'eraser':
						handleErase()
						break
					default:
						throw Error('No mode selected')
				}
			}}
		>
			{fill.pearl && (
				<div
					className="pearl"
					style={{
						borderColor: fill.pearlColor
					}}
				></div>
			)}
		</span>
	)
}
