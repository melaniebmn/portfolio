import styles from './Skills.css';

import React from 'react';

export default class Skills extends React.Component {
	render() {
		return (
			<ul className={styles.skills}>
				<li>{this.props.skill1}</li>
				<li>{this.props.skill2}</li>
				<li>{this.props.skill3}</li>
				<li>{this.props.skill4}</li>
				<li>{this.props.skill5}</li>
				<li>{this.props.skill6}</li>
			</ul>
		);
	}
}