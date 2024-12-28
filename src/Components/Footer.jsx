const Footer = () => {
  return (
    <div className="h-14 w-full bg-[#fff] flex justify-between items-center">
      <div>
        <h2 className="capitalize text-[10px]">
          2019 mass impressions.designed by tran{" "}
          <span className="md:block hidden">
            mau tam for mass impressions. allrights reserved.
          </span>
        </h2>
      </div>
      <div>
        <ul className="flex gap-2">
          <li>
            <p className="capitalize text-[8px] md:text-[10px]">
              term of services
            </p>
          </li>
          <li>
            <p className=" capitalize text-[8px] md:text-[10px]">
              privacy policy
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
