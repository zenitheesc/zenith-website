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
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-TYP8Y3JHR0"></script>
				<script
					async
					dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					
					gtag('config', 'G-TYP8Y3JHR0');`
					}}
				/>
			</Head>
			<NextSeo
				title={title}
				description={description}
			/>
		</>
	)
}
