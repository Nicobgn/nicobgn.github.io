import '@/styles/globals.sass'
import Layout from '../components/Layout'
import { MainProvider } from '../contexts/MainContext'

export default function App({ Component, pageProps }) {
  return (
		<MainProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MainProvider>
	)
}
