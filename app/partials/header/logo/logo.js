import styles from './Logo.css';

import React from 'react';

export default class Logo extends React.Component {
	render() {
		return (
			<h1 className={styles.logo}><a href="/">Melanie Bockmann</a></h1>
		);
	}
}