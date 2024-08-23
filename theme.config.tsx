import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from "next/image";
import rotatingliner from "./images/Picture0.jpg"
import { useRouter } from 'next/router'
import Footer from "./components/footer";
import Link from "next/link";


const config: DocsThemeConfig = {
    gitTimestamp: <span></span>,
    logo: <span className={"nx-flex nx-items-center"}><Image src={rotatingliner} alt={"rotating liner"} width={57} height={42} priority className={"nx-mr-2"} style={{width: 57, height: 42}}/>The Rotating Liner Engine</span>,
    footer: {
        // text: `Tribo Dynamics Inc.`,
        component: <Footer/>
    },
    feedback: {
        content: null
    },
    editLink: {
        component: null
    },
    useNextSeoProps: () => {
        const {asPath} = useRouter()
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
                  content="Welcome to Rotating Liner! We are improving the efficiency of the most efficient industrial prime mover, the diesel engine, via friction reduction."/>
            <link rel="apple-touch-icon" href="/public/apple-touch-icon.png"/>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="icon" type="image/png" href="/favicon-32x32.png"/>
            <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico'/>
        </>
    ),
    search: {
        component: <span></span>
    },
    banner: {
        key: 'rle-investment',
        text: (
            <Link href="/investment">
                Interested in RLE investment opportunities?  Learn more →
            </Link>
        )
    }
}

export default config




