import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from "next/image";
import rotatingliner from "./images/Picture1.jpg"
import { useRouter } from 'next/router'


const config: DocsThemeConfig = {
    // gitTimestamp: true,
    logo: <span className={"nx-flex nx-items-center"}><Image src={rotatingliner} alt={"rotating liner"} width={35} height={35} priority className={"nx-w-8 nx-h-8 nx-mr-2"}/>The Rotating Liner Engine</span>,
    footer: {
        text: `Tribo Dynamics Inc.`,
    },
    feedback: {
        useLink: args => "mailto:oscar.a.castro818@gmail.com"
    },
    editLink: {
        component: null
    },
    useNextSeoProps: () => {
        const { asPath } = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s – RLE'
            }
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:title" content="The Rotating Liner"/>
            <meta property="og:description"
                  content="Welcome to Rotating Liner! Improving the efficiency of the most efficient industrial prime mover, the diesel engine, via friction reduction."/>
            <link rel="apple-touch-icon" href="/public/apple-touch-icon.png"/>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="icon" type="image/png" href="/favicon-32x32.png"/>
            <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico'/>
        </>
    )
}

export default config




