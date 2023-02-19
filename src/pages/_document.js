import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
				<meta
					name="color-scheme"
					content="light dark"
				/>
				<meta
					name="author"
					content="Nicobgn"
				/>
				<meta
					name="keywords"
					content="dev, developer, nodejs, node, express, javascript, js, backend, back-end, portfolio, developer, fullstack, next, nextjs, react, mysql, sql, databases, database"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
