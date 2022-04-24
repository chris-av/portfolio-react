import React from 'react';
import { github, instagram, linkedin } from '../../socials';

import styles from './aboutme.module.scss';

import Cryptos from '../../components/Cryptos/Cryptos';
// import MyMusic from '../../components/MyMusic/MyMusic';
import Services from '../../components/Services/Services';

// import Template from '../../components/Animations/Template';
// import Circle from '../../components/Animations/Circle';
// import Circle from '../../components/Animations/CircleAlt';
import Message from '../../components/Animations/Message';

const AboutMe = () => {
	
	return (
		<div className={styles['container']}>
				
			<div className={styles['content-window']}>

				{/* <Circle/> */}
				<div className={styles['message-container']}>
					<Message />
				</div>
				
				<h1>Welcome!</h1>
				
				<p>
					My name's Christian Valenzuela, your friendly neighborhood web developer!
					I am glad you came to visit my page!
				</p>
				
				<p>
					I build everything: whether it is the landing page for your next product, a portfolio site for your artwork or a full e-commerce site.
				</p>
				
        <p>I am a passionate developer with a particular affinity towards Javasciprt and Node. But I also love tinkering in other languages like bash/zsh, python, and C.</p>

				<h1>Services</h1>

				<Services />

				<h1>Wanna donate ? </h1>

				<Cryptos />
				{/* <MyMusic /> */}

				<div className={styles['logo-container']}>
					<a target="_blank" rel="noopener noreferrer" href={linkedin}><i className={`linkedin link big black icon`}></i></a>
					<a target="_blank" rel="noopener noreferrer" href={github}><i className={`github link big black icon`}></i></a>
					<a target="_blank" rel="noopener noreferrer" href={instagram}><i className={`instagram link big black icon`}></i></a>
				</div>

			</div>

		</div>
	)
}

export default AboutMe;
