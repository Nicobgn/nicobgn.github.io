import { useMain } from '@/contexts/MainContext'
import fetchForm from '@/libs/fetchForm'
import Head from 'next/head'
import { useState } from 'react'

export default function Contact() {
	const { visitedAt } = useMain()
	const [loading, setLoading] = useState(false)
	const [submitStatus, setSubmitStatus] = useState(0)

	const submitHandler = async (e) => {
		e.preventDefault()
		setLoading(true)

		const {target} = e

		const response = await fetchForm(target, visitedAt)
		//console.log(response)

		setTimeout(() => {
			response === 200 ? setSubmitStatus(200) : setSubmitStatus(response)
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
		</>
	)
}		
