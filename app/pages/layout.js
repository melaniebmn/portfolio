import React from 'react';
import { Link } from 'react-router';

import Footer from './../partials/footer/Footer';
import Header from './../partials/header/Header';
import Work from './work/Work';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header />

				{this.props.children}

				<Footer />
			</div>
		);
	}
}