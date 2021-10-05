export const convertHexToRGB = (hex) => {
	let r = 0,
		g = 0,
		b = 0

	// 3 digits
	if (hex.length === 4) {
		r = '0x' + hex[1] + hex[1]
		g = '0x' + hex[2] + hex[2]
		b = '0x' + hex[3] + hex[3]

		// 6 digits
	} else if (hex.length === 7) {
		r = '0x' + hex[1] + hex[2]
		g = '0x' + hex[3] + hex[4]
		b = '0x' + hex[5] + hex[6]
	}

	return 'rgb(' + +r + ',' + +g + ',' + +b + ')'
}

export const calculateColorBrightness = (color) => {
	// Calculate value of brightness to set text-color
	color = color.replace(')', '').substr(4).split(',')
	let sum = color[0] * 0.299 + color[1] * 0.587 + color[2] * 0.114

	// Return value depending on the sum
	if (sum > 160) {
		return 'bright'
	} else {
		return 'dark'
	}
}
