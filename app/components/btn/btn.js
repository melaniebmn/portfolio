import styles from './Btn.css';

import React from 'react';
import { Link } from 'react-router';

export default class Btn extends React.Component {
	render() {
		return (
			<h4 className={styles.btn}>
			 	<svg xmlns="http://www.w3.org/2000/svg" {...this.props} >
			        <rect width="100%" height="100%"></rect>
			    </svg>
				<Link to={this.props.link}>{this.props.btnLabel}</Link>
			</h4>
		);
	}
}

export default class BtnLink extends React.Component {
	render() {
		return (
			<h4 className={styles.btn}>
			 	<svg xmlns="http://www.w3.org/2000/svg" {...this.props} >
			        <rect width="100%" height="100%"></rect>
			    </svg>
				<a href={this.props.link} target={this.props.target}>{this.props.btnLabel}</a>
			</h4>
		);
	}
}