import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./store/slice/ProductSlice";

const App = () => {
  const gre = useSelector((state) => state.product.list);
  const dispatch = useDispatch();

  const { list, status, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {status === "loading" && <div>Loading.....</div>}
      {status === "error" && <div>Error...</div>}
      {status === "succeeded" && (
        <div className="flex justify-center flex-wrap">
          {gre.map((item) => (
            <div className="wrapper mt-5 text-center justify-center shadow-xl w-90 rounded-2xl  grid grid-cols-1 mb-2 gap-1 mr-2" key={item.id}>
              <div className="box mt-2 font-bold text-2xl a col-span-1 col-start-1">{item.title}</div>
              <div className="box mt-2 text-left  ml-2 a col-span-1 col-start-1">{item.description}</div>
              <div className="box mt-2 text-left ml-2 a col-span-1 col-start-1">{item.category}</div>
              <div className="box mt-2 font-bold text-left ml-2 a col-span-1 col-start-1">
                {" "}
                ₹{item.price} <span className="text-red-400 font-thin text-sm">({item.discountPercentage}%)</span>
              </div>
              <div className="box mt-2 text-left ml-2 a col-span-1 col-start-1"></div>
              <div className="box w-50  a col-span-1 col-start-1">
                <img src={item.thumbnail} />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App;
