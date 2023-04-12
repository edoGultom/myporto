import Layout from "../components/Layout";
import "../styles/app.css";
import "../styles/slider.css";
import "../styles/card_slider.css";

function MyApp({ Component, pageProps }) {
  return (
    // wrapper layout single page
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
