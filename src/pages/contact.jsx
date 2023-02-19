import Head from 'next/head'
import { useState } from 'react'

export default function Contact() {
	const [loading, setLoading] = useState(false)
	const [submitStatus, setSubmitStatus] = useState(0)

	const submitHandler = async (e) => {
		e.preventDefault()
		setLoading(true)

		const {target} = e

		const date = new Date()

		let response = await fetch('https://formsubmit.co/83bb7506c7b164e34e6f12e6f10bf08a', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify({
				_captcha:'false',
				_template: 'table',
				_subject: 'New submission sent at: ' + date.toString(),
				_honey: target[0].value,
				subject: target[4].value,
				fullName: target[2].value + ', ' + target[1].value,
				email: target[3].value,
				message: target[5].value,
				language: window.navigator.language,
			}),
		})
		console.log(response)

		setTimeout(() => {
			response.status === 200 ? setSubmitStatus(200) : setSubmitStatus(response.status)
			setLoading(false)
		}, 1000)
	}

	return (
		<>
			<Head>
				<title>Nicobgn &bull; Contact</title>
				<meta
					name="description"
					content="This is my personal contact-form, it's recommended to use it since I'll check it more frecuently than other ways, but you can also use the footer links."
				/>
			</Head>
			<main>
				<form
					onSubmit={submitHandler}
					className="contact_form"
				>
					<input
						type="text"
						name="_honey"
						className="hidden"
						value=""
						onChange={()=>{}}
					/>
					<div className="contact_form__user_data">
						<input
							type="text"
							name="firstName"
							id="firstName"
							placeholder="first name"
							required
						/>
						<input
							type="text"
							name="lastName"
							id="lastName"
							placeholder="last name"
							required
						/>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="email"
							required
						/>
					</div>
					<input
						type="text"
						name="subject"
						id="subject"
						placeholder="subject"
						required
					/>
					<input
						type="text"
						name="content"
						id="content"
						placeholder="message"
						required
					/>

					<button 
						type="submit"
						className={`${loading ? 'loading' : ''}${submitStatus === 0 ? '' : submitStatus === 200? 'success' : 'failed' }`}
					>
						<span>
							{(submitStatus === 0 && !loading) ? 'Submit' : ''}
							{(submitStatus !== 0 && submitStatus === 200 && !loading) 
									?	(<i className="fa-solid fa-check"></i>) 
									: (submitStatus !== 0 && submitStatus !== 200 && !loading) 
										? (<i className="fa-solid fa-xmark"></i>) 
										: ''
							}
						</span>
					</button>
				</form>
			</main>
		</>
	)
}		
