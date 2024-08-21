import React from "react";
import NavBar from "../components/HomeNavBar";

const ProductPage = () => {
  const image =
    "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/category-pages/alienware-desktop-aurora-r16-notebook-m18-800x620-image-v2.png?fmt=png-alpha&wid=800&hei=620";
  return (
    <>
      <NavBar />
      <div className=" max-w-[1640px] p-4 mx-auto mt-[150px] mb-[150px]">
        <div className="  flex justify-between">
          <div className="  w-full">
            <img className=" w-full object-cover rounded-xl" src={image} />
          </div>
          <div className="h-auto border-l-2 border-gray-300"></div>
          <div className="  w-full mt-[100px]">
            <div className=" p-3">
              <div className=" font-bold flex justify-center mb-10">
                <p className=" text-4xl">Alienware Aurora R16 Gaming Desktop</p>
              </div>
              <div className=" p-4 ">
                <div className=" flex mb-3 gap-x-2">
                  {/* Row 1 */}
                  <div className="mr-2">
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/quill/50/processor.png"
                      alt="processor"
                      className=""
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="">
                    <span className=" text-lg ">
                      intel® Core™ i9 14900KF (68 MB cache, 24 cores, up to 6.0
                      GHz P-Core Thermal Velocity)
                    </span>
                  </div>
                </div>
                <div className=" flex gap-x-2  mb-3">
                  {/* Row 1 */}
                  <div className="mr-2">
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/comic/100/hdd.png"
                      alt="hdd"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="">
                    <span className=" text-lg ">
                      Windows 11 Home, English, French, Spanish
                    </span>
                  </div>
                </div>

                <div className=" flex gap-x-2  mb-3">
                  {/* Row 1 */}
                  <div className="mr-2">
                    <img
                      width="22"
                      height="22"
                      src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-graphic-card-computers-dreamstale-lineal-dreamstale.png"
                      alt="external-graphic-card-computers-dreamstale-lineal-dreamstale"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="">
                    <span className=" text-lg ">
                      NVIDIA® GeForce RTX™ 4090, 24 GB GDDR6X
                    </span>
                  </div>
                </div>

                <div className=" flex gap-x-2  mb-3">
                  {/* Row 1 */}
                  <div className="mr-2">
                    <img
                      width="23"
                      height="23"
                      src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/external-ram-technology-prettycons-lineal-prettycons.png"
                      alt="external-ram-technology-prettycons-lineal-prettycons"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="">
                    <span className=" text-lg ">
                      64 GB: 2 x 32 GB, DDR5, 5200 MT/s
                    </span>
                  </div>
                </div>

                <div className=" flex gap-x-2  mb-3">
                  {/* Row 1 */}
                  <div className="mr-2">
                    <img
                      width="23"
                      height="23"
                      src="https://img.icons8.com/ios/50/ssd.png"
                      alt="ssd"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="">
                    <span className=" text-lg ">2 TB, M.2, PCIe NVMe, SSD</span>
                  </div>
                </div>

                <div className=" flex gap-x-2  mb-3">
                  {/* Row 1 */}
                  <div className="mr-2">
                    <img
                      width="22"
                      height="22"
                      src="https://img.icons8.com/ios/50/paint-palette.png"
                      alt="paint-palette"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="">
                    <span className=" text-lg ">
                      1000W Platinum Rated PSU, 240mm Liquid-Cooled CPU & Clear
                      Side Panel
                    </span>
                  </div>
                </div>
              </div>
              <p className=" text-2xl font-bold">LKR : 350,000/=</p>
              <button className="mx-2 font-semibold bg-green-600 bottom-4  text-white mt-10 hover:scale-105 duration-100 border border-white rounded-xl px-5 py-3 hover:text-black">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
