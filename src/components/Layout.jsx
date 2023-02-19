import Header from './Header'
import Footer from './Footer'
import { useMain } from '@/contexts/MainContext'

const Layout = ({ children }) => {
	const {theme} = useMain()

	return (
		<>
			<Header/>
			<main className={theme ? 'light' : ''}>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
