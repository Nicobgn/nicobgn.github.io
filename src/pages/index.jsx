import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import fetchProjects from '../libs/fetchProjects'

export async function getServerSideProps() {
	//const projects = await fetchProjects()
	const projects = []

	return {
		props: {
			projects,
		},
	}
}

import Hero from '../components/Hero'
import Intro from '../components/Intro'

export default function Home({projects}) {
  return (
    <>
      <Head>
        <title>Nicobgn &bull; Backend Developer</title>
        <meta 
					name="description" 
					content="Hello, I'm Nicolas Ignacio Barragan, a backend developer. My main languages are Nodejs (Express) and MySQL, but we can chat in English or Spanish." 
				/>
      </Head>
      <main>
				<Hero />
				<Intro />
				<section className="projects">
					<div className="projects__container">
						{projects.length > 0 ? 
							projects.map(({name,images}) => (
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
							<p>There&apos;s nothing to be seen right now.</p>
							)
						}
					</div>
				</section>
			</main>
    </>
  )
}
