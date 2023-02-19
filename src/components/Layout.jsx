import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'

const Layout = ({ children }) => {
	const [toggleMode, setToggleMode] = useState(false)

	const toggleDarkMode = () => {
		setToggleMode(!toggleMode)
	}

	return (
		<>
			<Header
				modeHandler={toggleDarkMode}
				mode={toggleMode}
			/>
			<main className={toggleMode ? 'light' : ''}>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
