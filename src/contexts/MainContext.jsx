import { createContext, useContext, useState } from 'react'

const MainContext = createContext()

function useMain () {
	return useContext(MainContext)
}

function MainProvider ({ children }) {
	const [theme, setTheme] = useState(false)

	const themeHandler = () => {
		setTheme(!theme)
	}

	const visitedAt = new Date().toString()

	const data = {
		theme,
		themeHandler,
		visitedAt
	}

	return (
		<MainContext.Provider value={data}>
			{children}
		</MainContext.Provider>
	)
}

export { useMain, MainProvider }