import React from "react"

import { AppProps } from "next/app"
import "../styles/index.scss"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "../styles/tailwind.scss"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
