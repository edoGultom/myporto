import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <div className="mt-[58px] max-w-7xl w-full m-auto">
        <h1 className="font-bold text-[72px]">Oooooopss!</h1>
        <p>That page cannot be found</p>
      </div>
    </>
  );
};

export default NotFound;
