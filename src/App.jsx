import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./store/slice/ProductSlice";
import Cart from "./components/Cart";
import { addSingleData, removeOneItem } from "./store/slice/AddSlice";


const App = () => {
  const gre = useSelector((state) => state.product.list);

  const dispatch = useDispatch();



  const handleAdd = (item) => {
    dispatch(addSingleData(item));
  };

  const handleRemove = (item) => {
    dispatch(removeOneItem(item));
  };

  const isInCart = (id) => data.some((co) => co.id === id);

  const { list, status, error } = useSelector((state) => state.product);
   
  const { data } = useSelector((state) => state.addData);
  console.log("data", data);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Cart />
      {status === "loading" && <div className="texl-3xl">Loading.....</div>}
      {status === "error" && <div>Error...</div>}
      {status === "succeeded" && (
        <div className="flex justify-center flex-wrap">
          {list.map((item) => {
            const inCart = isInCart(item.id);

            return (
              <div className="wrapper mt-5 text-center justify-center shadow-xl w-90 rounded-2xl  grid grid-cols-1 mb-2 gap-1 mr-2" key={item.id}>
                <div className="box mt-2 font-bold text-2xl a col-span-1 col-start-1">{item.title}</div>
                <div className="box mt-2 text-left  ml-2 a col-span-1 col-start-1">{item.description}</div>
                <div className="box mt-2 text-left ml-2 a col-span-1 col-start-1">{item.category}</div>
                <div className="box mt-2 font-bold text-left ml-2 a col-sp
                
                an-1 col-start-1">
                  ₹{item.price} <span className="text-red-400 font-thin text-sm">({item.discountPercentage}%)</span>
                </div>
                <div className="box mt-2 text-left ml-2 a col-span-1 col-start-1"></div>
                <div className="box w-50  a col-span-1 col-start-1">
                  <img src={item.thumbnail} />
                </div>
                <div>
                  {inCart ? (
                    <button className="bg-[#dfe1e6] border-gray-1 cursor-pointer m-2  px-20 py-3" onClick={() => handleRemove(item)}>
                      Remove From cart
                    </button>
                  ) : (
                    <button className="bg-[#dfe1e6] border-gray-1 cursor-pointer m-2  px-20 py-3" onClick={() => handleAdd(item)}>
                      Add To cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default App;
