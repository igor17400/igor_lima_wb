import styles from './styles.module.scss';

export function Header() {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<img src='/igor_lima_logo.png' alt='Igor Lima' />
			</div>
			<ul>
				<li>
					<a href='#'>About me</a>
				</li>
				<li>
					<a href='#'>Projects</a>
				</li>
				<li>
					<a href='#'>Contact</a>
				</li>
				<li className={styles.firstIcon}>
					<a href='#'>
						<img src='/github.svg' alt='my github' />
					</a>
				</li>
				<li className={styles.lastIcon}>
					<a href='#'>
						<img src='/linkedin.svg' alt='my linkedin' />
					</a>
				</li>
			</ul>
			<div className={styles.burger}>
				<div className={styles.line1}></div>
				<div className={styles.line2}></div>
				<div className={styles.line3}></div>
			</div>
		</nav>
	);
}
