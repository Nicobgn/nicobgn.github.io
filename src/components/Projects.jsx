import Image from 'next/image'

export default function Projects (projects) {
	//console.log(projects.projects)
	return projects.projects.length > 0 
		? projects.projects.map(({name, images}) => (
			<div key={name} className="projects__container--project">
				<Image
					src={images[0]}
					alt={name}
					width="200"
					height="112"
					style={{borderRadius:'10px'}}
				/>
				<span>{name}</span>
			</div>
		)) : (
			<p>There&apos;s nothing to be seen right now</p>
		)
}
