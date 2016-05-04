import ImgSrc1 from './../../../public/assets/img/project1-triangles.png';
import ImgSrc2 from './../../../public/assets/img/project2-triangles.png';

import styles from './TriangleList.css';

import React from 'react';

export default class triangleList extends React.Component {
	render() {
		return (
			<ul className={styles.triangleList}>
				<li>
					<a href="/project1">
						<img src={ImgSrc1} />
						<h3>View Project 1</h3>
					</a>
				</li>
				<li>
					<a href="/project2">
						<img src={ImgSrc2} />
						<h3>View Project 2</h3>
					</a>
				</li>
			</ul>
		);
	}
}