import styles from './Project.css';

import React from 'react';

import BtnLink from './../../components/btn/Btn';
import BtnWork from './../../components/btnWork/btnWork';
import Heading from './../../components/heading/Heading';
import Mockups from './../../components/mockups/Mockups';
import PrevNextBtns from './../../components/prevNextBtns/PrevNextBtns';
import ProjectInfo from './../../components/projectInfo/ProjectInfo';

export default class Project1 extends React.Component {
	render() {
		return (
			<main className={styles.project}>
				<header>
					<Heading capitalLetter={'p'} heading={'roject 1 - Peak Trails'} />
				</header>
				<section>
					<aside>
						<img src="assets/img/project1-cover.jpg" />
					</aside>
					<ProjectInfo 
						text={['Peak Trails is a website about hiking trails in and around Vancouver.', <br/>, 'It shows you available trails and gives you a variety of information about each trail.', <br/>, 'The project is a Wordpress theme and all the CSS is done with Less. I did all the UI/UX and icons as well for this project.']}
						skill1={'Wordpress'} skill2={'HTML5'} skill3={'CSS3 (Less)'} skill4={'PHP'} skill5={'Javascript'} skill6={'PS + AI'} />
				</section>
				<section>
					<Mockups src="assets/img/project1-mockups.png" />
					<nav>
						<BtnLink width="170" height="50" btnLabel={'View Live Demo'} link={'//peaktrails.mbockmann.com/'} target={'_blank'} />
						<BtnLink width="170" height="50" btnLabel={'See Github Repo'} link={'//github.com/melaniebmn/peaktrails'} target={'_blank'} />
					</nav>
				</section>
				<section>
					<PrevNextBtns linkPrevious={'/work'} previous={'Overview'} linkNext={'/project2'} next={'Project 2'} />
				</section>
				<BtnWork />
			</main>
		);
	}
}