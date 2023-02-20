import Image from 'next/image'
import { useState } from 'react'

export default function Projects () {
	const [projects] = useState([])

	/*async function fetchProjects(){
    const newProjects = await fetch("https://primrose-backend.vercel.app/api/notion/nico-projects").then(res => res.json()).then(projects=>projects['newProjects'])
		
		setProjects(newProjects)

    setTimeout(() => {
      fetchProjects()
    }, 5000)
  }

  useEffect(()=>{
    fetchProjects()
  },[])*/

	//console.log(projects.projects)

	return projects.length > 0 
		? projects?.map(({name, images}) => (
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
