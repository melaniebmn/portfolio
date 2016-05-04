import styles from './Copyright.css';

import React from 'react';

export default class Copyright extends React.Component {
	render() {
		return (
			<p className={styles.copyright}>Copyright 2016 - Melanie Bockmann</p>
		);
	}
}