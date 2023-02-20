import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useMain } from '@/contexts/MainContext'

export default function Header() {
	const {theme, themeHandler} = useMain()

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<header className={theme ? 'light' : ''}>
				<Link
					href={'/'}
					className={'logo'}
				>
					<Image
						src="/logo.svg"
						alt="Nicobgn Logo"
            width="100"
            height="29"
					/>
				</Link>
				<span className="mode__switch">
					<input
						type="checkbox"
						name="mode__switch__check"
						id="mode__switch__check"
						className="mode__switch__check"
						checked={theme}
						onChange={() => {}}
					/>
					<label
						className="mode__switch__slider"
						htmlFor="mode__switch__check"
						onClick={themeHandler}
					/>
				</span>
			</header>
		</>
	)
}
