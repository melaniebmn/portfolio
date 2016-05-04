import styles from './Mockups.css';

import React from 'react';

export default class Mockups extends React.Component {
	render() {
		return (
			<img className={styles.mockups} src={this.props.src} />
		);
	}
}