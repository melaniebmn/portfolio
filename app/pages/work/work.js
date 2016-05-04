import styles from './Work.css';

import React from 'react';

import BtnWork from './../../components/btnWork/btnWork';
import Description from './../../components/description/Description';
import Heading from './../../components/heading/Heading';
import ProjectList from './../../components/projectList/ProjectList';

export default class Work extends React.Component {
	render() {
		return (
			<main className={styles.work}>
				<section>
					<Heading capitalLetter={'w'} heading={'ork'} />
					<Description text={'Here is a selection of some of my latest work. If you like to see more, just let me know.'} />
				</section>
				<section>
					<ProjectList />
				</section>
				<BtnWork />
			</main>
		);
	}
}