import React, { useContext, useState } from 'react'
import './SingleCell.css'

// Utils
import { ThemeContext } from '../../../utils/ThemeContext'

export default function SingleCell({ mode, color }) {
	const { theme } = useContext(ThemeContext)
	const [fill, setFill] = useState({
		color: 'transparent',
		pearl: false
	})

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
			{fill.pearl && <div className="pearl"></div>}
		</span>
	)
}
