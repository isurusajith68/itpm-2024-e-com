import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Promotions = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        setProduct(data.products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, []);
  return (
    <div>
      <div className="bg-gray-500 p-10">
        <p className=" text-orange-600 font-bold text-6xl mb-10">Promotions</p>

        <div className="text-white  gap-10 grid md:grid-cols-4">
          {product.map((p, index) =>
            p.promotion ? (
              <div className="rounded-xl relative" key={index}>
                <div className="w-full h-full bg-black/30 rounded-xl text-white p-3">
                  <div className="bg-red-600 rounded-full w-[80px] h-[80px] flex items-center justify-center text-4xl font-bold">
                    {p.discount}%
                  </div>
                  <p className="font-bold text-2xl px-2 pt-4">
                    {p.productName}
                  </p>
                  <img
                    className="max-h-[250px] md:max-h-[500px] w-full object-cover rounded-xl"
                    src={p.image}
                  />
                  <p className="font-bold text-lg px-2 pt-4">
                    Alienware Aurora R16 Gaming Desktop
                  </p>
                  <div className="p-3">
                    <span className="flex items-center gap-3">
                      <p className="text-lg font-bold">Processor:</p> Intel®
                      Core™ i9 14900KF
                    </span>
                    <span className="flex items-center gap-3">
                      <p className="text-lg font-bold">OS:</p> Windows 11 Home
                    </span>
                    <span className="flex items-center gap-3">
                      <p className="text-lg font-bold">Graphics:</p> NVIDIA®
                      GeForce RTX™ 4090
                    </span>
                    <span className="flex items-center gap-3">
                      <p className="text-lg font-bold">Storage:</p> 2 TB SSD
                    </span>
                    <span className="flex items-center gap-3">
                      <p className="text-lg font-bold">Price:</p>
                      <span className="line-through">LKR.{p.price}</span>
                      <span className="text-orange-600 text-2xl">
                        LKR.{(p.price * p.discount) / 100}/=
                      </span>
                    </span>
                  </div>
                  <Link to={`/product/${p._id}`}>
                    <button className="mx-2 bottom-4 bg-white text-black border border-white rounded-xl px-5 py-1">
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
