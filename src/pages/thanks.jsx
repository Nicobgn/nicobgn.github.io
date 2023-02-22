import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Thanks() {
	const router = useRouter()

	function returnHome(){
		setTimeout(()=> router.push('/'), 5000)
	}
	
	//useEffect(() => returnHome())

	return (
		<>
			<Head>
				<title>Thanks for Contact! &bull; Nicobgn</title>
				<meta
					name="description"
					content="Thank you for contact me, I'll try to answer as soon as possible to make an agreement or a meeting. ----------------------------------------."
				/>
			</Head>
			<section className="center_container">
				<p>Thank you for contact! I will try to answer as soon as possible.	
					If you still here after 5 seconds, <Link href='/'>click here to return</Link>
				</p>
			</section>
		</>
	)
}
