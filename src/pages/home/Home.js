import React from 'react'
import styles from './home.module.css';

const Home = () => {
	return (
		<>
			{/* <Header /> */}
			{/* <NoteContainer /> */}

			<section>
				<div className={`container ${styles.pageContent}`}>
					<div className={styles.hero}>
						<h1>Write better with NoteIt....</h1>
						<div>
							<button>Get Started</button>
							<button>Get Started</button>
						</div>
					</div>
				</div>
			</section>
			{/* <Footer /> */}
		</>
	)
}

export default Home