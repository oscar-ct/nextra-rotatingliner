import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from "next/image";
import rotatingliner from "./images/Picture1.jpg"

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
}

export default config
