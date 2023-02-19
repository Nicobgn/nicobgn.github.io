import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
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
	const Projects = dynamic(() => import('../components/Projects'))

  return (
    <>
      <Head>
        <title>Nicobgn &bull; Backend Developer</title>
        <meta 
					name="description" 
					content="Hello, I'm Nicolas Ignacio Barragan, a backend developer. My main languages are Nodejs (Express) and MySQL, but we can chat in English or Spanish." 
				/>
      </Head>
			<Hero />
			<Intro />
			<section className="projects">
				<h3>My Projects</h3>
				<p>Here you can see a preview of my work.</p>

				<div className="projects__container">
					<Projects projects={projects}/>
				</div>
			</section>
    </>
  )
}
