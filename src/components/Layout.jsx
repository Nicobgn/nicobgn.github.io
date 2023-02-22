import Header from './Header'
import Footer from './Footer'
import { useMain } from '@/contexts/MainContext'

const Layout = ({ children }) => {
	const {theme} = useMain()

	return (
		<>
			<Header/>
			<div className='background'>
				<img
					src={theme === true ? '/light-bg.webp' : '/dark-bg.webp'}
					alt='Background Image'
				/>
			</div>
			<main className={theme ? 'light' : ''}>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
