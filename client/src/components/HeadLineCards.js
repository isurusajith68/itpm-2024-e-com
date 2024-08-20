import React from "react";
import { useNavigate } from "react-router-dom";

function HeadLineCards() {
    const navigate = useNavigate();
    const handleClick = (image) => {
        navigate('/product')
    }

    const image = "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/category-pages/alienware-desktop-aurora-r16-notebook-m18-800x620-image-v2.png?fmt=png-alpha&wid=800&hei=620"
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative  hover:scale-105 duration-300 " onClick={handleClick}>
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Gaming Desktop Computer
          </p>

          <button className="mx-2 absolute bottom-4 bg-white text-black border border-white rounded-xl px-5 py-1">
            Order Now
          </button>
          <div className=" bg-white w-[150px] flex justify-center ml-3 rounded-lg"><p className=" text-blue-600">LKR 450,000/=</p></div>
        </div>
        <img
          className="max-h-[250px] md:max-h-[500px] w-full object-cover rounded-xl"
          src={image}
        />
      </div>

      {/* card */}
      <div className="rounded-xl relative  hover:scale-105 duration-300 ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Gaming Desktop Computer
          </p>

          <button className="mx-2 absolute bottom-4 bg-white text-black border border-white rounded-xl px-5 py-1">
            Order Now
          </button>
          <div className=" bg-white w-[150px] flex justify-center ml-3 rounded-lg"><p className=" text-blue-600">LKR 450,000/=</p></div>
        </div>
        <img
          className="max-h-[250px] md:max-h-[500px] w-full object-cover rounded-xl"
          src={image}/>
      </div>
      {/* card */}
      <div className="rounded-xl relative  hover:scale-105 duration-300 ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Gaming Desktop Computer
          </p>

          <button className="mx-2 absolute bottom-4 bg-white text-black border border-white rounded-xl px-5 py-1">
            Order Now
          </button>
          <div className=" bg-white w-[150px] flex justify-center ml-3 rounded-lg"><p className=" text-blue-600">LKR 450,000/=</p></div>
        </div>
        <img
          className="max-h-[250px] md:max-h-[500px] w-full object-cover rounded-xl"
          src={image}/>
      </div>

      {/* card */}
      <div className="rounded-xl relative  hover:scale-105 duration-300 ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Gaming Desktop Computer
          </p>

          <button className="mx-2 absolute bottom-4 bg-white text-black border border-white rounded-xl px-5 py-1">
            Order Now
          </button>
          <div className=" bg-white w-[150px] flex justify-center ml-3 rounded-lg"><p className=" text-blue-600">LKR 450,000/=</p></div>
        </div>
        <img
          className="max-h-[250px] md:max-h-[500px] w-full object-cover rounded-xl"
          src={image}/>
      </div>
      {/* card */}
      <div className="rounded-xl relative  hover:scale-105 duration-300 ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Gaming Desktop Computer
          </p>

          <button className="mx-2 absolute bottom-4 bg-white text-black border border-white rounded-xl px-5 py-1">
            Order Now
          </button>
          <div className=" bg-white w-[150px] flex justify-center ml-3 rounded-lg"><p className=" text-blue-600">LKR 450,000/=</p></div>
        </div>
        <img
          className="max-h-[250px] md:max-h-[500px] w-full object-cover rounded-xl"
          src={image}/>
      </div>
      {/* card */}
      <div className="rounded-xl relative  hover:scale-105 duration-300 ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Gaming Desktop Computer
          </p>

          <button className="mx-2 absolute bottom-4 bg-white text-black border border-white rounded-xl px-5 py-1">
            Order Now
          </button>
          <div className=" bg-white w-[150px] flex justify-center ml-3 rounded-lg"><p className=" text-blue-600">LKR 450,000/=</p></div>
        </div>
        <img
          className="max-h-[250px] md:max-h-[500px] w-full object-cover rounded-xl"
          src={image}/>
      </div>
    </div>
  );
}

export default HeadLineCards;
