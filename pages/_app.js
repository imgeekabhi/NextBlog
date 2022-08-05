import "../styles/globals.css";
import Head from "next/head";
import Layout from "../Components/Layout/Layout";
import { Fragment } from "react";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
