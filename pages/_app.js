import Layout from "../components/Layout";
import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    // wrapper layout single page
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
