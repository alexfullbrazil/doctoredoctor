import type { AppProps } from "next/app";
import "@fontsource/inter/700.css";
import "@fontsource/inter/300.css";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
