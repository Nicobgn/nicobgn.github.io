export default async function fetchProjects(){
	const rawProjects = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DB}/query`, {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${process.env.NOTION_KEY}`,
			'Notion-Version': '2022-06-28',
			'Content-Type': 'application/json',
		}
	}).then(res => res.json()).then(res => res.results) || []

	const projects = rawProjects.map(({properties}) => {
		const techs = properties.Techs.multi_select.map(tech => tech.name)
		const images = properties.Images.files.map(image => image.file.url)

		return {
			name: properties.Name.title[0]?.plain_text || '',
			caption: properties.Caption.rich_text[0]?.plain_text || '',
			description: properties.Description.rich_text[0]?.plain_text || '',
			techs: techs || [],
			source: properties.Source.url || '',
			live: properties.Live.url || '',
			images: images.length > 0 ? images : ['https://http.cat/404']
	} || []
	})

	return projects
}

