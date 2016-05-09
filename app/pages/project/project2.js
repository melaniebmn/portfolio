import styles from './Project.css';

import React from 'react';

import BtnLink from './../../components/btn/Btn';
import BtnWork from './../../components/btnWork/btnWork';
import Heading from './../../components/heading/Heading';
import Mockups from './../../components/mockups/Mockups';
import PrevNextBtns from './../../components/prevNextBtns/PrevNextBtns';
import ProjectInfo from './../../components/projectInfo/ProjectInfo';

export default class Project2 extends React.Component {
	render() {
		return (
			<main className={styles.project}>
				<header>
					<Heading capitalLetter={'p'} heading={'roject 2 - Said the whale'} />
				</header>
				<section>
					<aside>
						<img src="assets/img/project2-cover.jpg" />
					</aside>
					<ProjectInfo 
						text={['Said the whale is a website that is suppose to give you interesting and random facts about whales.', <br/>, 'The project is done with Bootstrap and all the CSS is done with Less. I also did all the UI/UX for this project.']}
						skill1={'Bootstrap'} skill2={'HTML5'} skill3={'CSS3 (Less)'} skill4={'jQuery'} skill5={'Photoshop'} skill6={'Illustrator'} />
				</section>
				<section>
					<Mockups src="assets/img/project2-mockups.png" />
					<nav>
						<BtnLink width="170" height="50" btnLabel={'View Live Demo'} link={'//saidthewhale.mbockmann.com/'} target={'_blank'} />
						<BtnLink width="170" height="50" btnLabel={'See Github Repo'} link={'//github.com/melaniebmn/saidthewhale'} target={'_blank'} />
					</nav>
				</section>
				<section>
					<PrevNextBtns linkPrevious={'/project1'} previous={'Project 1'} linkNext={'/work'} next={'Overview'} />
				</section>
				<BtnWork />
			</main>
		);
	}
}