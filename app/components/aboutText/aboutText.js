import styles from './aboutText.css';

import React from 'react';

export default class AboutText extends React.Component {
	render() {
		return (
			<ul className={styles.aboutText}>
				<li>I love being challenged and learning new things.</li>
				<li>My name is Melanie,<br/>I am a Front-End Developer based in Vancouver, BC.</li>
				<li>I have over 2 years of web development experience.</li>
			</ul>
		);
	}
}
