import styles from './Contactlist.css';

import React from 'react';
import Heading from '../../../components/heading/Heading';

export default class ContactList extends React.Component {
	render() {
		return (
			<ul className={styles.contactlist}>
				<li>
					<Heading capitalLetter={'c'} heading={'ontact'} />
				</li>
				<li>
					<p>Email</p>
					<a href="mailto:melanie.bockmann@yahoo.com">melanie.bockmann<wbr/>@yahoo.com</a>
				</li>
				<li>
					<div>
						<p>Linkedin<br/>Profile</p>
						<a href="//www.linkedin.com/in/melanie-bockmann-98701078" target="_blank">in</a>
					</div>
				</li>
				<li>
					<div>
						<p>Github<br/>Account</p>
						<a href="//github.com/melaniebmn" target="_blank"><img src="/assets/img/github-icon-black.png" /></a>
					</div>
				</li>
			</ul>
		);
	}
}