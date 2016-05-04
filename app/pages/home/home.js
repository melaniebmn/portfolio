import styles from './Home.css';

import React from 'react';

import Btn from './../../components/btn/Btn';
import Description from './../../components/description/Description';
import DotsAnimation from './../../components/dotsAnimation/DotsAnimation';
import Heading from './../../components/heading/Heading';
import TriangleList from './../../components/triangleList/TriangleList';

export default class Home extends React.Component {
	render() {
		return (
			<main className={styles.home}>
				<section>
					<div>
						<Heading capitalLetter={'h'} heading={'ey'} />
						<Description text={'My name is Melanie, I\'m a Front-End Developer in Vancouver.'} />
					</div>
				</section>
				<section>
					<div>
						<Heading capitalLetter={'w'} heading={'ork'} />
						<TriangleList />
						<Btn width="125" height="45" link={'/work'} btnLabel={'View Work'} />
					</div>
				</section>
				<section>
					<div>
						<DotsAnimation />
						<Heading capitalLetter={'a'} heading={'bout'} />
						<Description text={'I\'m currently available for fulltime work. If you are looking for an enthusiastic addition to your team, take a look at my work or send me a message and I\'ll get back to you as soon as possible.'} />
						<Btn width="125" height="45" link={'/about'} btnLabel={'View About'} />
					</div>
				</section>
			</main>
		);
	}
}