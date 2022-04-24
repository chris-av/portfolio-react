import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

// pages
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';

// here are the components
import Burger from './components/Burger/Burger.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import NavigationMobile from './components/NavigationMobile/NavigationMobile';

// import styles
import './main.scss';

const App = () => {
	const [open, toggleOpen] = useState(false);
	return (
		<div className="app">
			<Router history={ history }>
					
				<header>
					<Navigation />
					<Burger open={open} toggleOpen={toggleOpen} />
					<NavigationMobile open={open} toggleOpen={toggleOpen} />
				</header>
					

				<div className="content">
					<Switch>			
						<Route exact path="/">
							<AboutMe />
						</Route>
						<Route exact path="/portfolio">
							<Portfolio />
						</Route>
						<Route exact path="/resume">
							<Resume />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
					</Switch>
				</div>
					

			</Router>
		</div>
	);
}

export default App;
