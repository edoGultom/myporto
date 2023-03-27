import Layout from "../../components/LayoutTabs";
import PhpSlider from "../../components/PhpSlider";
import { tabs } from "../../data";

export const getStaticPaths = async () => {
  const paths = tabs.map((item) => {
    return {
      //sesuaikan nama params dengan nama file
      params: { name: item.href.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

const getAllTabs = async (name) => {
  const arr = tabs.find((item) => item.href === name);
  return arr;
};

export const getStaticProps = async (context) => {
  const name = context.params.name;
  const profiles = await getAllTabs(name);
  const response = JSON.stringify(profiles);
  return {
    props: { response },
  };
};
const Details = ({ response }) => {
  const res = JSON.parse(response);
  return (
    <Layout idTab={res.id}>
      <PhpSlider data={res.projectsList} />
    </Layout>
  );
};

export default Details;
