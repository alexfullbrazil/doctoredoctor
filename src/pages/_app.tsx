import type { AppProps } from "next/app"
import { GoogleTagManager } from '@next/third-parties/google'
import "@fontsource/inter/700.css"
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"

import "@/styles/globals.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-WT856RP9" />
    </>
  )
}
