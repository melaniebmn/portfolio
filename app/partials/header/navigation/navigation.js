import styles from './Navigation.css';

import React from 'react';
import { Link } from 'react-router';

import MenuBtn from './menuBtn/MenuBtn';
import NavLink from './NavLink';

export default class Navigation extends React.Component {
	render() {
		return (
			<nav className={styles.navigation}>
				<MenuBtn />
				<ul>
					<li>
						<NavLink to={{ pathname: 'work' }}>Work</NavLink>
					</li>
					<li>
						<NavLink to={{ pathname: 'about' }}>About</NavLink>
					</li>
					<li>
						<NavLink to={{ pathname: 'contact' }}>Contact</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}