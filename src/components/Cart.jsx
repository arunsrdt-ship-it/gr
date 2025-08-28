import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/slice/ProductSlice";
import { removeOneItem } from "../store/slice/AddSlice";

const Cart = () => {
  const [toggle, setToggle] = useState(true);
  const { list, status, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.addData);

  const handleClick = () => {
    setToggle(true);
  };

  const handleRemove = (item) => {
    dispatch(removeOneItem(item));
  };

  console.log("jk", data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <button onClick={() => setToggle(!toggle)} className="btn btn-primary mb-5">
        Cart
      </button>
      {!toggle && (
        <div>
          <h1>Cart</h1>
          <button onClick={handleClick}>Close</button>

          <div className="flex flex-wrap">
            {data.length !== 0 &&
              data.map((item) => (
                <div className="wrapper mt-5 text-center justify-center shadow-xl w-90 rounded-2xl  grid grid-cols-1 mb-2 gap-1 mr-2" key={item.id}>
                  <div className="box mt-2 font-bold text-2xl a col-span-1 col-start-1">{item.title}</div>
                  <div className="box mt-2 font-bold text-2xl a col-span-1 col-start-1"></div>
                  <div className="box mt-2 font-bold text-2xl a col-span-1 col-start-1">{item.category}</div>
                  <div className="box mt-2 font-bold text-2xl a col-span-1 col-start-1">₹{item.price}</div>
                  <div className="box w-50  a col-span-1 col-start-1">
                    <img src={item.thumbnail} />
                  </div>
                  <div className="">
                    <button className="bg-[#dfe1e6] border-gray-1 cursor-pointer m-2  px-20 py-3" onClick={() => handleRemove(item)}>
                      Remove From Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div>{data.length === 0 ? <h3>No Items present in cart</h3> : <div>Present</div>}</div>
        </div>
      )}
    </>
  );
};

export default Cart;
