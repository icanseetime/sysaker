import React, { useContext, useState, useEffect } from 'react'
import './SideControls.css'
import { ThemeContext, themes } from '../../../utils/ThemeContext'

// Components
import SideControlButton from '../../buttons/SideControlButton/SideControlButton'

// Icons
import { ReactComponent as PenIcon } from '../../../assets/icons/pen.svg'
import { ReactComponent as EraserIcon } from '../../../assets/icons/eraser.svg'
import { ReactComponent as PearlIcon } from '../../../assets/icons/diamond.svg'
import { ReactComponent as RefreshIcon } from '../../../assets/icons/refresh.svg'
import { ReactComponent as MoonIcon } from '../../../assets/icons/moon.svg'
import { ReactComponent as PrintIcon } from '../../../assets/icons/print.svg'
import { ReactComponent as SunIcon } from '../../../assets/icons/sun.svg'
import { ReactComponent as ExpandIcon } from '../../../assets/icons/expand.svg'
import { ReactComponent as MinimizeIcon } from '../../../assets/icons/minimize.svg'

export default function SideControls({ mode, changeMode }) {
	const { theme, setTheme } = useContext(ThemeContext)
	const [fullscreen, setFullscreen] = useState(false)

	const keypressFullscreenCancel = (e) => {
		console.log(e.keyCode)
		if (fullscreen && e.keyCode === 27) {
			setFullscreen(false)
		}
	}

	return (
		<nav className="SideControls">
			{/* Pen mode */}
			<SideControlButton
				icon={
					<PenIcon
						style={{
							transform: 'scaleX(-1) rotate(-10deg)',
							fill:
								mode === 'pen' ? theme.accent : theme.secondary
						}}
					/>
				}
				onClick={() => {
					changeMode('pen')
				}}
			/>

			{/* Eraser mode */}
			<SideControlButton
				icon={
					<EraserIcon
						style={{
							fill:
								mode === 'eraser'
									? theme.accent
									: theme.secondary
						}}
					/>
				}
				onClick={() => {
					changeMode('eraser')
				}}
			/>

			{/* Pearl setting mode */}
			<SideControlButton
				icon={
					<PearlIcon
						style={{
							fill:
								mode === 'pearl'
									? theme.accent
									: theme.secondary
						}}
					/>
				}
				onClick={() => {
					changeMode('pearl')
				}}
			/>

			{/* Reset pattern [should have warning] */}
			<SideControlButton
				icon={
					<RefreshIcon
						style={{
							fill: theme.secondary
						}}
					/>
				}
				onClick={() => {
					// TODO: add function that clears the pattern data
					window.location.reload()
				}}
			/>

			{/* Print pattern */}
			<SideControlButton
				icon={
					<PrintIcon
						style={{
							fill: theme.secondary
						}}
					/>
				}
				onClick={() => {
					window.print()
				}}
			/>

			{/* Change theme [dark/light mode] */}
			<SideControlButton
				icon={
					theme === themes.dark ? (
						<SunIcon
							style={{
								fill: theme.secondary
							}}
						/>
					) : (
						<MoonIcon
							style={{
								fill: theme.secondary
							}}
						/>
					)
				}
				onClick={() => {
					setTheme((theme) =>
						theme === themes.dark ? themes.light : themes.dark
					)
				}}
			/>

			{/* Fullscreen mode */}
			<SideControlButton
				icon={
					fullscreen ? (
						<MinimizeIcon
							style={{
								fill: theme.secondary
							}}
						/>
					) : (
						<ExpandIcon
							style={{
								fill: theme.secondary
							}}
						/>
					)
				}
				onClick={() => {
					if (!fullscreen) {
						// Set event listener to check for 'Esc' fullscreen cancel
						document.addEventListener(
							'keydown',
							keypressFullscreenCancel
						)

						// Set fullscreen
						document.documentElement.requestFullscreen()
						setFullscreen(true)
					} else {
						// Remove event listener checking for keystroke
						document.removeEventListener(
							'keydown',
							keypressFullscreenCancel
						)

						// Cancel fullscreen
						if (document.exitFullscreen) document.exitFullscreen()
						if (document.webkitExitFullscreen)
							document.webkitExitFullscreen()
						if (document.msExitFullscreen)
							document.msExitFullscreen()
						if (document.mozCancelFullScreen)
							document.mozCancelFullScreen()
						setFullscreen(false)
					}
				}}
			/>
		</nav>
	)
}
