import styles from './Footer.css';

import React from 'react';

import ContactList from './contactlist/ContactList';
import Copyright from './copyright/Copyright';

export default class Footer extends React.Component {
	render() {
		return (
			<footer className={styles.footer}>
				<ContactList />
				<Copyright />
			</footer>
		);
	}
}