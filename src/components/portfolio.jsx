const Portfolio = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#414b84] to-[#0d0346] pb-20"
      id="portfolio"
    >
      <div className="container mx-auto px-3 pt-20 ">
        <p className="text-[#c0d6bb] lg:ext-2xl text-xl uppercase text-center"></p>
        <span className="flex justify-center pb-20 pt-8">
          <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:text-5xl text-2xl">
            Selected works
          </h1>
        </span>
        <section className="grid md:grid-cols-3 grid-cols-1 gap-2 p-28 mt-20">
          <div className="md:col-span-2">
            <img
              src="https://camo.githubusercontent.com/9e24d9896a7ec149d8eee755818f317df634e0f0ecc8d88496c63f911721a28a/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d314f677979534b55514a74454a4f455330486d385765512d626849336e63635949"
              alt=""
              className=" h-[50%] w-[15%]"
            />
            <p className="text-[#c3d9bd] md:text-2xl text-left mt-10  ">
              Backend for open source project Sumbi
            </p>
            <p className="text-[#aa38a1] md:text-1xl text-left mt-5  ">
              Github:{" "}
              <a
                href="https://github.com/derekcrosslu/SUMBI-BACKEND"
                className="hover:text-black  ml-5 text-slate-400"
              >
                Link
              </a>
            </p>
            <p className="text-[#aa38a1] md:text-1xl text-left mt-0  ">
              Website:
              <a
                href="https://www.sumbi.org.pe/"
                className="hover:text-black  ml-5 text-slate-400"
              >
                Link
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src="https://camo.githubusercontent.com/c02ab50da322dea1aac36fb7145fbcef6a0c2b07f456e4d279a9a7124b2bce2d/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d3156596455724c6b356d3162446f4342486b7568374e5161772d50794e42507139"
              alt=""
            />
          </div>
        </section>
        <section className="grid md:grid-cols-3 grid-cols-1 gap-2 p-28 mt-20">
          <div className="md:col-span-2">
            <img
              src="/assets/CordialLogo.png"
              alt=""
              className=" h-[15%] w-[30%]"
            />
            <p className="text-[#c3d9bd] md:text-1xl text-left mt-10  mr-32">
              {" "}
              Project Cordial is an innovative web project designed to showcase
              the unique ambiance of Cordial, a wind bar located in Barranco,
              Peru. This digital representation brings to life the restaurant's
              aesthetic and atmosphere through a stunning 3D online experience.
              Developed using React, React Fiber, and Three.js for the frontend,
              the website captures the essence of Cordial with interactive and
              immersive 3D visuals.
            </p>
            <p className="text-[#aa38a1] md:text-1xl text-left mt-5  ">
              Github:{" "}
              <a
                href="https://github.com/derekcrosslu/cordial"
                className="hover:text-black  ml-5 text-slate-400"
              >
                Link
              </a>
            </p>
            <p className="text-[#aa38a1] md:text-1xl text-left mt-0  ">
              Website:
              <a
                href="http://cordial.derekcross.app"
                className="hover:text-black  ml-5 text-slate-400"
              >
                Link
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-0">
            <img src="/assets/cordial0.png" alt="" />
          </div>
        </section>
        <section className="grid md:grid-cols-3 grid-cols-1 gap-2 p-28 mt-20">
          <div className="md:col-span-2">
            <img src="/assets/NRL.png" alt="" className=" h-[35%] w-[15%]" />
            <p className="text-[#c3d9bd] md:text-2xl text-left mt-10 mr-32 ">
              {" "}
              PML is a web application that simulates energy use, storage,
              harvesting, and sharing to improve energy-informed decision-making
            </p>
            <p className="text-[#aa38a1] md:text-1xl text-left mt-5  ">
              Github:{" "}
              <a
                href="https://github.com/derekcrosslu/PML"
                className="hover:text-black  ml-5 text-slate-400"
              >
                Link
              </a>
            </p>
            <p className="text-[#aa38a1] md:text-1xl text-left mt-0  ">
              Website:
              <a
                href="https://www.nrl.navy.mil/Our-Work/Areas-of-Research/"
                className="hover:text-black  ml-5 text-slate-400"
              >
                Link
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src="https://camo.githubusercontent.com/f61945134beca2a737a3d29116a694ed9552946a3035d936e60b10e2b8535188/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d315234674867414f693163366c77455330396e4e613750766464785a4c70343033"
              alt=""
            />
          </div>
        </section>
        <section className="grid md:grid-cols-3 grid-cols-1 gap-2 p-28 mt-20">
          <div className="md:col-span-2 mt-20">
            <img src="/assets/VDLogo.png" alt="" className=" h-[18%] w-[45%]" />
            <p className="text-[#c3d9bd] md:text-1xl text-left mt-10  mr-32">
              {" "}
              The Virtual Doorman Incident Reporting App is a mobile application
              designed for Android and IOS devices using React Native. This app
              revolutionizes the way residents interact with their building's
              security and management, enhancing their sense of safety and
              community.
            </p>
            <p className="text-[#aa38a1] md:text-1xl text-left mt-5  ">
              Github:{" "}
              <a
                href="https://github.com/derekcrosslu/Intercom-Mobile-App"
                className="hover:text-black  ml-5 text-slate-400"
              >
                Link
              </a>
            </p>
            <p className="text-[#aa38a1] md:text-1xl text-left mt-0  ">
              Website:
              <a
                href="https://www.virtualdoorman.com/products/"
                className="hover:text-black  ml-5 text-slate-400"
              >
                Link
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <img src="/assets/IntercomMobile.png" alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
