import styles from './Description.css';

import React from 'react';

export default class Description extends React.Component {
	render() {
		return (
			<article className={styles.description}>
				<p>{this.props.text}</p>
			</article>
		);
	}
}