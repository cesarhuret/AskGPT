import { color, extendTheme } from "@chakra-ui/react"
import "@fontsource/montserrat";

const theme = extendTheme({
    styles: {
		global: (props: any) => ({
			body: {
                bg: '#1a202c',
				color: 'white'
			},
			'::-webkit-scrollbar': {
				width: '5px',
			},
			'::-webkit-scrollbar-track': {
				background: 'transparent'
			},
			'::-webkit-scrollbar-thumb': {
				background: "#444" 
			},
            '::-webkit-input-placeholder': {
                color: '#adadad',
            },
		})
    }, 
    fonts: {
		heading: `'montserrat', sans-serif`,
		body: `'montserrat', sans-serif`,
    },
})

export default theme