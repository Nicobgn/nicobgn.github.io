export default async function fetchForm(target, visitedAt) {
	const date = new Date()

	const response = await fetch('https://formsubmit.co/83bb7506c7b164e34e6f12e6f10bf08a', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
		body: JSON.stringify({
			_captcha: 'false',
			_template: 'table',
			_subject: 'New submission sent at: ' + date.toString(),
			//_honey: target[0].value,
			fullname: target[2].value + ', ' + target[1].value,
			email: target[3].value,
			subject: target[4].value,
			message: target[5].value,
			visitedAt,
			language: window.navigator.language,
		}),
	})
	//console.log(response)

	return response.status
}
