import { FC } from "react";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className=" mb-80 bg-[#f5f7fa] max-md:px-8 px-8 ">
      <div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-5xl font-syne font-bold mt-8">Merry Matrix</div>
        <div className="flex flex-col gap-4 font-syne text-xl mt-8">
          <div className="">
            <h3 className="font-bold">Call Us</h3>
            <a href="tel:+61470638795">
              <span className="text-[#2f4062]">+61 470638795</span>
            </a>
          </div>
          <div className="">
            <h3 className="font-bold">Open Hours</h3>
            <p className="text-nowrap text-[#2f4062]">
              9am to 5am Monday to Friday - by appointments only{" "}
            </p>
          </div>
          <div className="">
            <h3 className="font-bold">Adderess</h3>
            <p className="text-[#2f4062]">
              Level 4, 24 Davey Street, Hobart 7000{" "}
            </p>
          </div>
        </div>
        <div className="h-[500px]  max-md:mt-10">
          <div className="relative w-full h-full">
            <div className="overflow-hidden bg-none! w-full h-full absolute inset-0">
              <iframe
                className="w-full h-full"
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Level%204%2C%2024%20Davey%20Street%2C%20Hobart%207000&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// <style>.embed-map-responsive{position:relative;text-align:right;width:100%;height:0;padding-bottom:66.66666666666666%;}.embed-map-container{overflow:hidden;background:none!important;width:100%;height:100%;position:absolute;top:0;left:0;}.embed-map-frame{width:100%!important;height:100%!important;position:absolute;top:0;left:0;}</style>
