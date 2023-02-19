// import {} from 'react/icons'

export default function Intro() {
	const softSkills = [
		'Resilience',
		'Leadership',
		'Teamworker',
		'Adaptability',
		'Communicative',
		'Passionate Learner',
		'Analytical Problem-solver',
	]

	const hardSkills = [
		{
			name: 'Git',
		},
		{
			name: 'MySQL',
		},
		{
			name: 'Nodejs',
		},
		{
			name: 'Python',
		},
		{
			name: 'Express',
		},
		{
			name: 'NextJS',
		},
		{
			name: 'React',
		},
		{
			name: 'SASS',
		},
	]

	return (
		<section className="intro">
			<h3 className="intro__title">
				Hello, I&apos;m Nico, nice to meet you.
			</h3>
			<p className="intro__caption">
				I started coding on highschool for fun, but now I&apos;m passionate of making efficiend backend servers and work with databases. Here are some of my skills:
			</p>
			<div id="skills" className="intro__skills">
				<div className="intro__skills__column--left">
					<h4>Soft-Skills</h4>
					<ul>
						{softSkills.map(skill => (
							<li key={skill}>{skill}</li>
						))}
					</ul>
				</div>
				<div className="intro__skills__column--right">
					<h4>Hard-Skills</h4>
					<ul>
						{hardSkills.map(skill => (
							<li key={skill.name}>{skill.name}</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
