import "../styles/globals.css";
import Layout from "../Components/Layout/Layout";
import { Fragment } from "react";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
