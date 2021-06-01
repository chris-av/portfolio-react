import React from 'react';
import { Link } from 'react-router-dom';

import style from './navigation.module.scss';

const Navigation = () => {
    return (
			<div className={style["container"]}>

				<nav className={style["navbar"]}>
					
					<Link to="/" className={style["navbar-brand"]}>
						Christian Valenzuela
					</Link>
					
					<ul className={style["navbar-nav"]}>
						<li className={style["nav-item"]}>
							<Link to="/" className={style["nav-link"]}>About Me</Link>
						</li>
						<li className={style["nav-item"]}>
							<Link to="/portfolio" className={style["nav-link"]}>My Porfolio</Link>
						</li>
						<li className={style["nav-item"]}>
							<Link to="/resume" className={style["nav-link"]}>Resume</Link>
						</li>
						<li className={style["nav-item"]}>
							<Link to="/contact" className={style["nav-link"]}>Contact</Link>
						</li>
					</ul>

				</nav>

			</div>
    );
}

export default Navigation;
