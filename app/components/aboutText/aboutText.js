import styles from './aboutText.css';

import React from 'react';

export default class AboutText extends React.Component {
	render() {
		return (
			<ul className={styles.aboutText}>
				<li>I love building and rebuilding websites.</li>
				<li>My name is Melanie,<br/>I am a Front-End Developer based in Vancouver, BC.</li>
				<li>I love building and rebuilding websites.</li>
			</ul>
		);
	}
}
