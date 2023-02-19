import Link from 'next/link'

export default function Footer() {
	return (
		<footer>
			<h4>Keep going, you always can learn something new.</h4>
			<p>Don&apos;t be shy, I hope we could be partners</p>
			<br />
			<ul className="contact__links">
				{/* <li className="contact__links--link">
					<Link
						href=""
						target="_blank"
					></Link>
				</li> */}
				<li className="contact__links--link">
					<Link
						href="https://github.com/Nicobgn"
						target="_blank"
						className="contact__links--link__anchor"
            aria-label="Visit my GitHub Profile!"
					>
						<i className="fa-brands fa-github"></i>
					</Link>
				</li>
				<li className="contact__links--link">
					<Link
						href="https://www.linkedin.com/in/nicol%C3%A1s-barrag%C3%A1n-4a1992232/"
						target="_blank"
						className="contact__links--link__anchor"
            aria-label="See my LinkedIn Profile!"
					>
						<i className="fa-brands fa-linkedin"></i>
					</Link>
				</li>
				<li className="contact__links--link">
					<Link
						href="/contact"
						className="contact__links--link__anchor"
            aria-label="Send me an email!"
					>
						<i className="fa-solid fa-inbox"></i>
					</Link>
				</li>
			</ul>
			<br />
			<span>This portfolio was constructed using: Next - SCSS</span>
			<h5>Handmade by me. &copy;2023</h5>
		</footer>
	)
}
