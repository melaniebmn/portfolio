import styles from './Heading.css';

import React from 'react';

export default class Heading extends React.Component {
	render() {
		return (
			<h2 className={styles.heading}>
				<strong>{this.props.capitalLetter}</strong>
				{this.props.heading}
			</h2>
		);
	}
}