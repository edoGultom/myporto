import Layout from "../components/Layout";
import "../styles/app.css";
import "../styles/slider.css";
import "../styles/card_slider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 0,
    });
  }, []);
  return (
    // wrapper layout single page
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
