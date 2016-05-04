import styles from './ProjectList.css';

import React from 'react';

import ProjectListBtn from './../projectListBtn/ProjectListBtn';

export default class ProjectList extends React.Component {
	render() {
		return (
			<ul className={styles.projectList}>
				<li>
					<ProjectListBtn projectName={'Peak Trails'} link={'/project1'} />
				</li>
				<li>
					<ProjectListBtn projectName={'Said the whale'} link={'/project2'} />
				</li>
			</ul>
		);
	}
}