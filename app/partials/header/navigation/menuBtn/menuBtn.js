import styles from './MenuBtn.css';

import React from 'react';

export default class MenuBtn extends React.Component {
	render() {
		return (
			<button className={styles.menuBtn}>
				<span></span>
			</button>
		);
	}
}