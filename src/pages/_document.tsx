import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Work+Sans:wght@100&display=swap'
						rel='stylesheet'
					/>
					<link
						rel='shortcut icon'
						href='/igor_lima_logo.svg'
						type='image/png'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
