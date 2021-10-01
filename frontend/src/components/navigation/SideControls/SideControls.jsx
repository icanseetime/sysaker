import React, { useContext } from 'react'
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
					// TODO: add function that clears the grid data
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
					<ExpandIcon
						style={{
							fill: theme.secondary
						}}
					/>
				}
			/>
		</nav>
	)
}
