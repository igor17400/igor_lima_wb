import styles from './styles.module.scss';

export function Header() {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<img src='/igor_lima_logo.png' alt='Igor Lima' />
			</div>
			<ul>
				<li>
					<a className={styles.textNav} href='#'>
						About me
					</a>
				</li>
				<li>
					<a className={styles.textNav} href='#'>
						Contact
					</a>
				</li>
				<li>
					<a className={styles.textNav} href='#'>
						Projects
					</a>
				</li>

				<li className={styles.firstIcon}>
					<a href='https://github.com/igor17400' target='_blank'>
						<img src='/github.svg' alt='my github' />
					</a>
				</li>
				<li className={styles.lastIcon}>
					<a href='https://www.linkedin.com/in/igor-lima-/' target='_blank'>
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
