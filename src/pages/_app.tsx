import '../../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<main>
				<Component {...pageProps} />
			</main>
		</div>
	);
}

export default MyApp;
