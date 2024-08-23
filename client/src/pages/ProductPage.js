import React, { useEffect, useState } from "react";
import NavBar from "../components/HomeNavBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProfilePic from "../assets/gamer.png";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [feedbacks, setFeedbacks] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleAddClick = (product) => {
    const sanitizedProduct = {
      _id: product._id,
      name: product.productName,
      image: product.image,
      price: product.price,
      quantity: product.quantity,
      selectedQuantity: 1,
      discount: product.discount,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(
      (item) => item.id === product._id
    );

    if (existingProductIndex >= 0) {
      cart[existingProductIndex].selectedQuantity += 1;
    } else {
      cart.push(sanitizedProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate(`/cart`);
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products/${id}`);
        const data = res.data.product;
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (user && user._id) {
      // Ensure user is not null and _id is available
      const fetchSales = async () => {
        try {
          const res = await fetch(
            `http://localhost:5000/feedback/get-feedbacks/${user._id}`
          );
          const data = await res.json();
          setFeedbacks(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };

      fetchSales();
    }
  }, [user]);

  console.log("feed", feedbacks);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className=" max-w-[1400px] p-4 mx-auto mt-[50px] mb-[150px]">
        <div className="  flex justify-between">
          <div className="  w-full">
            {product.discount !== 0 ? (
              <div className="bg-red-600 rounded-full  w-[100px] h-[100px] flex items-center justify-center text-4xl font-bold">
                {product.discount}%
              </div>
            ) : null}
            <img
              className=" w-full object-cover rounded-xl"
              src={product.image}
            />
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
              {product.discount > 0 ? (
                <div>
                  <span className="line-through">
                    LKR.
                    {product.price.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <span className="text-orange-600 text-2xl">
                    LKR.
                    {(
                      product.price -
                      (product.price * product.discount) / 100
                    ).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              ) : (
                <div>
                  <span className="text-2xl font-bold">
                    LKR.
                    {product.price.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              )}
              <button
                onClick={
                  product.quantity > 0
                    ? () => handleAddClick(product)
                    : () => alert("Out of Stock")
                }
                className="mx-2 font-semibold bg-green-600 bottom-4  text-white mt-10 hover:scale-105 duration-100 border border-white rounded-xl px-5 py-3 hover:text-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <hr className=" border-2-2 mt-3 mb-3" />
        {feedbacks?.map((feedback, index) => {
          return (
            <div className="grid grid-cols-3 gap-4">
              <div className=" p-4 flex gap-2">
                <div className=" w-[100px] h-[100px] ">
                  <img src={ProfilePic} />
                </div>
                <div className="w-full bg-slate-400 rounded-lg p-4">
                  {feedback.feedback}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductPage;
