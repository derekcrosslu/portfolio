/* eslint-disable react/no-unescaped-entities */
import {
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
  // FaFreeCodeCamp,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#414b84] to-[#0d0346] -mb-12">
      <div className="px-3  flex flex-col items-center relative">
        <div className="lg:w-60 w-20 lg:h-60 h-20 rounded-[560px] rounded-t-none border border-t-0 border-r-0 border-[#6797ff] absolute z-20 opacity-30 right-0"></div>
        <div className="lg:w-60 w-20 lg:h-60 h-20 rounded-[560px] rounded-b-none border border-b-0 border-l-0 border-[#6797ff] absolute z-20 opacity-50 left-0 lg:bottom-40 bottom-0"></div>
        <div className="flex flex-col gap-y-12 text-[#c3d9bd] absolute lg:left-[20%] left-2 top-1/4">
          <FaLinkedinIn
            className="rounded-xl border border-[#c3d9bd] p-1 text-3xl cursor-pointer hover:opacity-40"
            onClick={() => (
              (window.location.href =
                "https://www.linkedin.com/in/crossderek/"),
              "_blank"
            )}
          />
          <FaGithub
            className="p-1 text-3xl cursor-pointer hover:opacity-40"
            onClick={() => (
              (window.location.href = "https://github.com/derekcrosslu"),
              "_blank"
            )}
          />
          <FaTwitter
            className="p-1 text-3xl cursor-pointer hover:opacity-40"
            onClick={() => (
              (window.location.href = "https://twitter.com/derek22cross"),
              "_blank"
            )}
          />
          <FaYoutube
            className="p-1 text-3xl cursor-pointer hover:opacity-40"
            onClick={() => (
              (window.location.href = "https://www.youtube.com/@derekcross22"),
              "_blank"
            )}
          />
        </div>

        <div className="sm:w-[30rem] w-4/5 lg:h-[25rem] mt-24 rounded-[560px] rounded-b-none border border-b-0 border-r-0 border-[#6797ff] relative z-20">
          <img
            src="/assets/Main_Image.webp"
            alt=""
            className="relative  -mt-36 z-20  "
          />
          <div className="bg-gradient-to-b from-[#414b84] to-[#0d0346] rounded-full rounded-b-none lg:w-40 h-20 lg:p-8 p-4 absolute top-[40%] lg:-right-32 -right-[16%]">
            <a href="#contactme">
              <button className="rounded-full bg-[#6797ff] text-[#414b84] h-24 w-24 p-4 relative z-20 transition ease-out duration-300 transform hover:scale-125">
                <p className="lg:text-[1.7rem] text-xl font-medium uppercase">
                  Let's talk
                </p>
              </button>
            </a>
          </div>
        </div>
        <div className="relative z-20 lg:mt-16 mb-16">
          <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text md:text-7xl text-3xl text-center font-semibold">
            Derek Cross
          </h1>
          <p className="text-[#c3d9bd] md:text-2xl text-center mt-4">
            SOFTWARE ENGINEER // PRODUCT DESIGNER
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
