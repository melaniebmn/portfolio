import React from 'react';
import { Route, IndexRoute } from 'react-router';

import About from './pages/about/About';
import Home from './pages/home/Home';
import Layout from './pages/Layout';
import Project1 from './pages/project/Project1';
import Project2 from './pages/project/Project2';
import Work from './pages/work/Work';

module.exports = (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home}></IndexRoute>
		<Route path='about' name='about' component={About}></Route>
		<Route path='project1' name='project1' component={Project1}></Route>
		<Route path='project2' name='project2' component={Project2}></Route>
		<Route path='work' name='work' component={Work}></Route>
	</Route>
);