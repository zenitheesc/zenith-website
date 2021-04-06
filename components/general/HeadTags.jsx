import React from 'react'
import Head from "next/head";
import { NextSeo, BreadcrumbJsonLd } from 'next-seo';

function Breadcrumb (props) {
	const {
		mainPage,
		pageName,
		pageTitle,
		lang
	} = props;

	const itemList = (mainPage)
		? [{
			position: 1,
			name: 'Zenith Aerospace',
			item: 'https://zenith.eesc.usp.br/',
		  }]
		: [{
			position: 1,
			name: 'Zenith Aerospace',
			item: 'https://zenith.eesc.usp.br/',
		},{
			position: 2,
			name: pageTitle,
			item: `https://zenith.eesc.usp.br/${lang}/${pageName}`,
		}];

	return(
		<BreadcrumbJsonLd 
			itemListElements={itemList}
		/>
	);

}

export default function HeadTags(props) {
	const {
		pageName,
		title,
		description,
		mainPage,
		pageTitle,
		lang
	} = props;

	return (
		<>
			<Head>
				<meta name="google-site-verification" content={process.env.googleVerification} />
				{mainPage ? <link rel="canonical" href="https://zenith.eesc.usp.br" /> : <link rel="canonical" href={`https://zenith.eesc.usp.br/${lang}/${pageName}`} />}
				{(lang !== "es") ? <link rel="alternate" href={`https://zenith.eesc.usp.br/es/${pageName}`} hrefLang="es" /> : <></>}
				{(lang !== "en") ? <link rel="alternate" href={`https://zenith.eesc.usp.br/en/${pageName}`} hrefLang="en" /> : <></>}
				{(lang !== "pt") ? <link rel="alternate" href={`https://zenith.eesc.usp.br/${pageName}`} hrefLang="pt" /> : <></>}
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
			<Breadcrumb mainPage={mainPage} pageName={pageName} pageTitle={pageTitle} lang={lang}/>
			<NextSeo
				openGraph={{
					type: 'website',
					site_name: 'Zenith Aerospace',
					url: 'https://zenith.eesc.usp.br',
					title: title,
					description: description,
					locale: lang,
				}}
				twitter={{
						handle: '@handle',
					site: '@site',
					cardType: 'summary_large_image',
				}}
				title={title}
				description={description}
			/>
		</>
	)
}
