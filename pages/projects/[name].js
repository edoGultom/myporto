import Head from "next/head";
import Layout from "../../components/LayoutTabs";
import { MobileSlider, WebSlider } from "../../components/Slider";
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
    <>
      <Head>
        <title>{res.name}</title>
      </Head>
      <Layout idTab={res.id} nameTabs={res.name}>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-4 ">
          <div className="px-4 py-2 flex-auto">
            <div className="tab-content tab-space">
              <div className="block">
                <div className="shadow-lg shadow-text md:shadow-lg md:shadow-text flex flex-col lg:flex-col lg:gap-x-3 gap-y-3  rounded-lg">
                  <div className="w-full">
                    {(res.id.toString() === "1" ||
                      res.id.toString() === "2") && (
                      <WebSlider data={res.projectsList} />
                    )}

                    {res.id.toString() === "3" && (
                      <MobileSlider data={res.projectsList} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Details;
