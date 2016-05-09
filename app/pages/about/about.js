import styles from './About.css';

import React from 'react';

import AboutText from './../../components/aboutText/AboutText';
import BtnWork from './../../components/btnWork/btnWork';
import Description from './../../components/description/Description';
import Heading from './../../components/heading/Heading';

export default class About extends React.Component {
	render() {
		return (
			<main className={styles.about}>
				<section>
					<Heading capitalLetter={'h'} heading={'ey'} />
					<AboutText />
				</section>
				<section>
					<Description text={'I\'m currently available for fulltime work. If you are looking for an enthusiastic addition to your team, send me a message and I\'ll get back to you as soon as possible.'} />
				</section>
				<section>
					<Heading capitalLetter={'m'} heading={'ountain of experience'} />
					<img src="assets/img/skillset.png" alt='Skillset'/>
				</section>
				<BtnWork />
			</main>
		);
	}
}
