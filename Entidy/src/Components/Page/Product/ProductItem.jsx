import { Link } from "react-router-dom"
import { Fragment, useEffect, useState } from 'react';

import { SiBitcoin } from 'react-icons/si'
import ProductDetail from "./ProductDetail";
const ProductItem = ({ item, index }) => {
        const [show, setShow] = useState(false)

        const [imageUrl, setImageUrl] = useState('')

        useEffect(() => {
                setImageUrl(item.image)
        })
        return (
                <div className="p-2 rounded-[8px] item-card text-black" key={index}>
                        <Link to="/cart">
                                <div className={`w-full pt-[100%] bg-no-repeat bg-center bg-cover rounded-[12px]`} style={{ backgroundImage: `url('${imageUrl ? imageUrl : ''}')` }}></div>
                                <h6 className="font-bold leading-none my-3 text-sm line-clamp-2">{item.name}</h6>
                                <div className="flex justify-between items-center mt-3 overflow-hidden">
                                        {item.prices.map((price, index) => {
                                                return (
                                                        <Fragment key={index}>
                                                                {price.currency == "VNĐ"
                                                                        ? <p className="flex items-end leading-none overflow-hidden"><span className="text-[10px] mr-[2px] text-[red]">vnđ</span><span className="truncate">{price.price}</span></p>
                                                                        : <Fragment><br></br><p className="flex items-center overflow-hidden"><span><SiBitcoin className='mr-[2px] text-[green]' /></span><span title={price.price} className="truncate">{price.price}</span></p></Fragment>}

                                                        </Fragment>
                                                )
                                        })}
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