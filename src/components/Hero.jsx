import { useState } from 'react'
import Link from 'next/link'
import { useMain } from '@/contexts/MainContext'

export default function Hero(){
	const {theme} = useMain()

	const phrases = [
		'Passionate Learner',
		'Efficiency  Fan',
		'Analytical Problem-Solver',
	]
	
	const [phraseIndex, setPhraseIndex] = useState(0)
	const [phrase, setPhrase] = useState(phrases[phraseIndex])

	const phraseHandler = () => {
		//setPhraseIndex(phraseIndex === phrases.length - 1 ? 0 : phraseIndex + 1)
		setPhrase(phrases[phraseIndex])
		setPhraseIndex(phraseIndex === phrases.length - 1 ? 0 : phraseIndex + 1)
	}

	return (
		<section className="hero">
		{/*<div className="hero__background">
				<img
					src={theme === true ? '/light-bg.webp' : '/dark-bg.webp'}
					alt='Background Image'
				/>
			</div> */}
			<h1 className="hero__title">Backend & MySQL Developer.</h1>
			<h2 className="hero__subtitle">
				<span
					className="hero__subtitle--text"
					onAnimationIteration={phraseHandler}
				>
					{phrase}
				</span>
			</h2>
			<p className="hero__contact">
				<Link href={'/contact'}>Contact Me</Link>
			</p>
		</section>
	)
}
