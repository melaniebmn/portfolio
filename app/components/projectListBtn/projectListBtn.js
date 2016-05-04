import styles from './ProjectListBtn.css';

import React from 'react';

import Btn from './../btn/Btn';

export default class ProjectListBtn extends React.Component {
	render() {
		return (
			<div className={styles.projectListBtn}>
				<h3>{this.props.projectName}</h3>
				<Btn width="120" height="30" link={this.props.link} btnLabel={'View Project'} />
			</div>
		);
	}
}