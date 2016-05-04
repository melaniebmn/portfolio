import styles from './Header.css';

import React from 'react';
import { Link } from 'react-router';

import Logo from './logo/Logo';
import Navigation from './navigation/Navigation';

export default class Header extends React.Component {
	render() {
		return (
			<header className={styles.header}>
				<div>
					<Logo />
					<Navigation />
				</div>
			</header>
		);
	}
}