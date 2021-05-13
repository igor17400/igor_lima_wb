import styles from './styles.module.scss';

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<img src='/igor_lima_logo.png' alt='logo' />
			</div>
			<nav>
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
				</ul>
			</nav>
			<div className={styles.icons}>
				<img src='/github.svg' alt='my github' />
				<img src='/linkedin.svg' alt='my linkedin' />
			</div>
		</header>
	);
}
