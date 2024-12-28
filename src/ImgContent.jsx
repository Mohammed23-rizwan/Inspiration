import ava1 from "./assets/images/ava1.png";
import ava2 from "./assets/images/ava2.jpg";
import ava3 from "./assets/images/ava3.jpg";

// eslint-disable-next-line react/prop-types
const ImgContent = ({ name }) => {
  return (
    <div className="flex relative z-10 p-5 text-white h-full justify-end flex-col">
      <h2 className="uppercase text-[12px]">destinations</h2>
      <p className="capitalize">{name}</p>
      <div className="mt-2">
        <ul className="flex relative">
          <li className="w-8 h-8 bg-white rounded-full overflow-hidden">
            <img
              src={ava1}
              alt=""
              className="p-[2px] bg-cover bg-center w-full h-full rounded-full"
            />
          </li>
          <li className="w-8 h-8 bg-white rounded-full overflow-hidden absolute left-6">
            <img
              src={ava2}
              alt=""
              className="p-[2px] bg-cover bg-center w-full h-full rounded-full"
            />
          </li>
          <li className="w-8 h-8 bg-white rounded-full overflow-hidden absolute left-[48px]">
            <img
              src={ava3}
              alt=""
              className="p-[2px] bg-cover bg-center w-full h-full rounded-full"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImgContent;
