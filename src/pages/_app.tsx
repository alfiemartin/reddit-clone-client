import { AppProps } from "next/app";
import { useSSStling } from "src/utils/useSSStles";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useSSStling();

  return <Component {...pageProps} />;
}

export default MyApp;
