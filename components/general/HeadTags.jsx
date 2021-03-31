import React from 'react'
import Head from "next/head";
import { NextSeo } from 'next-seo';

export default function HeadTags(props) {
	const {
		pageName,
		title,
		description,
		mainPage
	} = props

	return (
		<>
			<Head>
				{mainPage ? <meta name="google-site-verification" content={process.env.googleVerification} /> : <></>}
				{mainPage ? <link rel="canonical" href="https://zenith.eesc.usp.br" /> : <></>}
				<link rel="alternate" href={`https://zenith.eesc.usp.br/es/${pageName}`} hrefLang="es" />
				<link rel="alternate" href={`https://zenith.eesc.usp.br/en/${pageName}`} hrefLang="en" />
				<link rel="alternate" href={`https://zenith.eesc.usp.br/${pageName}`} hrefLang="pt" />
			</Head>
			<NextSeo
				title={title}
				description={description}
			/>
		</>
	)
}
