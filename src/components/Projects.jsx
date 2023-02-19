export default function (projects) {
	return projects.length > 0 
		? projects.map(({name, images}) => (
			<div key={name} className="projects__container--project">
				<Image
					src={images[0].url}
					alt={images[0].name}
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
