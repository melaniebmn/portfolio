import styles from './TriangleList.css';

import React from 'react';

export default class triangleList extends React.Component {
	render() {
		return (
			<ul className={styles.triangleList}>
				<li>
					<a href="/project1">
						<img src="assets/img-loaders/project1-triangles.png" />
						<h3>View Project 1</h3>
					</a>
				</li>
				<li>
					<a href="/project2">
						<img src="assets/img-loaders/project2-triangles.png" />
						<h3>View Project 2</h3>
					</a>
				</li>
			</ul>
		);
	}
}