import styles from './PrevNextBtns.css';

import React from 'react';

export default class PrevNextBtns extends React.Component {
	render() {
		return (
			<ul className={styles.prevNextBtns}>
				<li>
				<a href={this.props.linkPrevious}>{this.props.previous}</a>
				</li>
				<li>
					<a href={this.props.linkNext}>{this.props.next}</a>
				</li>
			</ul>
		);
	}
}