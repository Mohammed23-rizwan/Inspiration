import img1 from "../assets/images/img-1.jpg";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import ImgContent from "../ImgContent";

const MainImg = () => {
  return (
    <div className="mt-16">
      <div className="grid w-full md:grid-cols-3 gap-5">
        <div className="md:col-span-2 rounded-[8px] h-[280px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full">
            <img
              src={img1}
              className="w-full h-full bg-center bg-cover -z-0"
              alt=""
            />
          </div>
          <ImgContent name="a guide to rocky mountain vacantions" />
        </div>
        <div className=" col-span-1 bg-red-800 h-[280px] rounded-[8px] relative overflow-hidden">
          <div className="w-full h-full absolute top-0 right-0">
            <img
              src={img8}
              className="w-full h-full bg-center bg-cover"
              alt=""
            />
          </div>
          <ImgContent name="traveling to USA" />
        </div>
        <div className=" col-span-1 bg-red-800 h-[440px] rounded-[8px] relative overflow-hidden">
          <div className="w-full h-full absolute top-0 right-0">
            <img
              src={img7}
              className="w-full h-full bg-center bg-cover"
              alt=""
            />
          </div>
          <ImgContent name="party jokes starting but unnecessary" />
        </div>
        <div className=" col-span-1 bg-red-800 h-[440px] rounded-[8px] relative overflow-hidden">
          <div className="w-full h-full absolute top-0 right-0">
            <img
              src={img6}
              className="w-full h-full bg-center bg-cover"
              alt=""
            />
          </div>
          <ImgContent name="muai by air the best way around the island" />
        </div>
        <div className=" col-span-1 bg-red-800 h-[440px] rounded-[8px] relative overflow-hidden">
          <div className="w-full h-full absolute top-0 right-0">
            <img
              src={img5}
              className="w-full h-full bg-center bg-cover"
              alt=""
            />
          </div>
          <ImgContent name="party jokes starting but unnecessary" />
        </div>
        <div className=" col-span-1 rounded-[8px] h-[280px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full">
            <img
              src={img3}
              className="w-full h-full bg-center bg-cover -z-0"
              alt=""
            />
          </div>
          <ImgContent name="traveling to barcelona" />
        </div>
        <div className="col-span-1 md:col-span-2 bg-red-800 h-[280px] rounded-[8px] relative overflow-hidden">
          <div className="w-full h-full absolute top-0 right-0">
            <img
              src={img4}
              className="w-full h-full bg-center bg-cover"
              alt=""
            />
          </div>
          <ImgContent name="a guide to rocky mountain vacations" />
        </div>
        <div className=" col-span-1 bg-red-800 h-[440px] rounded-[8px] relative overflow-hidden">
          <div className="w-full h-full absolute top-0 right-0">
            <img
              src={img2}
              className="w-full h-full bg-center bg-cover"
              alt=""
            />
          </div>
          <ImgContent name="party jokes starting but unnecessary" />
        </div>
        <div className=" col-span-1 bg-red-800 h-[440px] rounded-[8px] relative overflow-hidden">
          <div className="w-full h-full absolute top-0 right-0">
            <img
              src={img10}
              className="w-full h-full bg-center bg-cover"
              alt=""
            />
          </div>
          <ImgContent name="muai by air the best way around the island" />
        </div>
        <div className=" col-span-1 bg-red-800 h-[440px] rounded-[8px] relative overflow-hidden">
          <div className="w-full h-full absolute top-0 right-0">
            <img
              src={img9}
              className="w-full h-full bg-center bg-cover"
              alt=""
            />
          </div>
          <ImgContent name="party jokes starting but unnecessary" />
        </div>
      </div>
    </div>
  );
};

export default MainImg;
