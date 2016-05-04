import styles from './btnWork.css';

import React from 'react';

export default class btnWork extends React.Component {
	render() {
		return (
			<address className={styles.btnWork}>
				<a href="mailto:melanie.bockmann@yahoo.com">Work with me</a>
			</address>
		);
	}
}