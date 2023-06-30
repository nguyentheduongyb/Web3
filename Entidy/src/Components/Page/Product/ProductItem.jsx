import { Link } from "react-router-dom"
import { Fragment, useEffect, useState } from 'react';

import { baseURL } from "~/API/request";
import ProductDetail from "./ProductPopUp";
const ProductItem = ({ item, index }) => {
        const [show, setShow] = useState(false)

        useEffect(() => {
        })
        return (
                <div className="p-2 rounded-[8px] item-card text-black" key={index}>
                        <Link to="/cart">
                                <div className={`w-full pt-[100%] bg-no-repeat bg-center bg-cover rounded-[12px]`} style={{ backgroundImage: `url('${baseURL}${item.image && item.image}')` }}></div>
                                <h6 className="font-bold leading-none my-3 text-sm line-clamp-2">{item.name}</h6>
                                <div className="flex justify-between items-center mt-3 overflow-hidden">
                                        <p>{item.price}</p>
                                </div>
                        </Link>
                        <div className="text-center">
                                <button className="text-xs underline text-blue-500" onClick={() => { setShow(true) }}>
                                        Xem chi tiết
                                </button>
                        </div>
                        <p className="mt-3 text-xs text-end">Đã bán {item.selled}</p>
                        <ProductDetail show={show} setShow={setShow} se item={item} />
                </div>
        )
}
export default ProductItem