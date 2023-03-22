import useSrcoll from "../../helpers/hooks/useScroll";

const Down = (props) => {
  const scroll = useSrcoll();
  return (
    <>
      <div className="fixed bottom-0 right-0 -mb-32 -mr-48 -z-10" {...props}>
        <svg
          className="w-[350px] h-[350px] lg:w-[550px] lg:h-[550px] rotate-180"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FC942A"
            d="M50.9,-47.4C55,-35.4,39.7,-14.9,31.9,2.3C24,19.6,23.4,33.6,13,45.9C2.5,58.2,-17.9,68.8,-34.2,63.7C-50.5,58.7,-62.7,37.9,-68.6,14.9C-74.4,-8.1,-73.8,-33.2,-61.3,-47.1C-48.8,-61,-24.4,-63.5,-0.5,-63.1C23.4,-62.7,46.8,-59.3,50.9,-47.4Z"
            transform="translate(100 100) scale(1.1) "
          />
        </svg>
      </div>
    </>
  );
};
export default Down;
