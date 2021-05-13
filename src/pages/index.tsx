import styles from './home.module.scss';

export default function Home() {
	return (
		<div>
			<section className={styles.presentation}>
				<div className={styles.introduction}>
					<div className={styles.introText}>
						<h1>Igor Lima Rocha Azevedo</h1>
						<p>
							Creative, motivated and hardworking individual, with broad skills
							and experiences.
						</p>
					</div>
					<div className={styles.cta}>
						<button>Resume</button>
					</div>
				</div>
				<div className={styles.cover}>
					<img src='/my_photo.JPG' alt='me' />
				</div>
			</section>
		</div>
	);
}
