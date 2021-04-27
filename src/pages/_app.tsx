import "../styles/globals.scss";
import { AppProps } from "next/app";
import { Provider, createClient } from "urql";
import { useEffect } from "react";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
