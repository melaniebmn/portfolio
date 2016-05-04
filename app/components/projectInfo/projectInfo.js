import styles from './ProjectInfo.css';

import React from 'react';

import Description from './../../components/description/Description';
import Skills from './../../components/skills/Skills';

export default class ProjectInfo extends React.Component {
	render() {
		return (
			<div className={styles.projectInfo}>
				<Description text={this.props.text} />
				<Skills skill1={this.props.skill1} skill2={this.props.skill2} skill3={this.props.skill3} skill4={this.props.skill4} skill5={this.props.skill5} skill6={this.props.skill6} />
			</div>
		);
	}
}