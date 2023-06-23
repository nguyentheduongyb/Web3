import { Fragment, useEffect, useLayoutEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, TextInput } from 'flowbite-react';

import { TransactionContext } from '~/Context/TransactionContext'
import { BiStar, BiPlus, BiMinus } from "react-icons/bi"
import { SiBitcoin } from 'react-icons/si'
import { IoMdClose } from 'react-icons/io'

const ProductDetail = ({ item, show, setShow }) => {
        const { connectedWallet } = useContext(TransactionContext)
        const [quantity, setQuantity] = useState(1)
        const [imageUrl, setImageUrl] = useState('')
        const [extendText, setExtendText] = useState(false)
        useEffect(() => {

                setImageUrl(item.image)
        })
        useLayoutEffect(() => {
                if (quantity <= 1) {
                        setQuantity(1)
                }
        }, [quantity])
        return (
                <div className={`fixed top-0 text-sm left-0 z-50 w-full h-full items-center justify-center bg-black bg-opacity-5 ${show ? 'flex' : 'hidden'}`}>
                        <div className="w-[70%] rounded-[8px] bg-gradient-to-r from-[#a5f3fc] to-[#e7e5e4]">
                                <div className="p-[16px] pb-[0px] flex justify-end">
                                        <button onClick={() => { setShow(false) }}><IoMdClose fontSize={28} color="#fff" /></button>
                                </div>
                                <div className="flex">
                                        <div className="w-[400px] p-[16px]">
                                                <div className={`w-full pt-[100%] bg-no-repeat bg-center bg-cover rounded-[12px]`} style={{ backgroundImage: `url('${imageUrl ? imageUrl : ''}')` }}></div>
                                        </div>
                                        <div className="p-[16px] flex-1">
                                                <div><span className="bg-[red] p-1 text-xs rounded text-white mr-3">Yêu thích+</span><span className="text-[#dc2626] font-bold line-clamp-3 inline">{item.name}</span></div>
                                                <div className="flex justify-between mt-3">
                                                        <div className="flex">
                                                                <div className="flex items-center pr-5">
                                                                        <span className="mr-1">5.0</span>
                                                                        <BiStar />
                                                                        <BiStar />
                                                                        <BiStar />
                                                                        <BiStar />
                                                                        <BiStar />
                                                                </div>
                                                                <div className="flex items-center px-5 border-x border-[#dc2626]">
                                                                        <span className="mr-1">456k</span>
                                                                        <span>Đánh giá</span>
                                                                </div>
                                                                <div className="flex items-center pl-5">
                                                                        <span className="mr-1">1tr</span>
                                                                        Đã bán
                                                                </div>
                                                        </div>
                                                        <button>Tố cáo</button>
                                                </div>
                                                <div className="flex justify-center mt-3 py-2 rounded bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                                        <div className="flex items-center gap-40">
                                                                {item.prices.map((price) => {
                                                                        return (
                                                                                <div className="flex items-center gap-4  text-2xl">
                                                                                        {price.currency == "VNĐ"
                                                                                                ? <Fragment><p className="flex items-end leading-none"><span className="truncate">{price.price}</span><span className="text-[10px] mr-[2px] text-[red]">vnđ</span></p></Fragment>
                                                                                                : <Fragment><p className="flex items-center"><span title={price.price} className="truncate">{price.price}</span><span><SiBitcoin className='mr-[2px] text-[green]' /></span></p></Fragment>
                                                                                        }
                                                                                </div>
                                                                        )
                                                                })}
                                                        </div>

                                                </div>
                                                <div className="mt-3">
                                                        <h2 className="font-bold">Mô tả:</h2>
                                                        <div>
                                                                <p className={`mt-3 line-clamp-2 text-sm ${extendText ? 'line-clamp-4' : ''}`}>{item.description}</p>
                                                                {!extendText ? <span className="cursor-pointer text-blue-500 text-xs" onClick={() => { setExtendText(true) }}>Đọc thêm ...</span>
                                                                        : <span className="cursor-pointer text-blue-500 text-xs" onClick={() => { setExtendText(false) }}>Ẩn bớt ...</span>}
                                                        </div>
                                                </div>
                                                <div className="mt-3">
                                                        <h2 className="font-bold">Phân loại:</h2>
                                                        <ul className="flex flex-wrap gap-5 mt-4">
                                                                <button className="h-[32px] flex items-center border rounded px-4 border-[#000] border-[1.6px]">Chiết 10ml</button>
                                                                <button className="h-[32px] flex items-center border rounded px-4 border-[#000] border-[1.6px]">Chiết 10ml</button>
                                                                <button className="h-[32px] flex items-center border rounded px-4 border-[#000] border-[1.6px]">Chiết 10ml</button>
                                                                <button className="h-[32px] flex items-center border rounded px-4 border-[#000] border-[1.6px]">Chiết 10ml</button>
                                                                <button className="h-[32px] flex items-center border rounded px-4 border-[#000] border-[1.6px]">Chiết 10ml</button>
                                                        </ul>
                                                </div>
                                                <div className="mt-3 flex items-center gap-12">
                                                        <h2 className="font-bold">Số lượng:</h2>
                                                        <div className="flex h-[32px] border-[1px] border border-black">
                                                                <button onClick={() => { setQuantity(quantity - 1) }} className="border-r border-black w-[32px] flex justify-center items-center h-full p-0"><BiMinus /></button>
                                                                <input className="flex justify-center text-center w-10 border-none  border-l border-r focus-input-none" type="text" value={quantity} />
                                                                <button onClick={() => { setQuantity(quantity + 1) }} className="border-l border-solid border-black  w-[32px] flex justify-center items-center h-full p-0"><BiPlus /></button>
                                                        </div>
                                                        <p>225 sản phẩm có sẵn</p>
                                                </div>
                                                <div className="flex justify-center gap-5 py-5">
                                                        <Button color="gray">Thêm vào giỏ hàng</Button>
                                                        <Link to="/cart">
                                                                <Button color="failure">Mua ngay</Button>
                                                        </Link>
                                                </div>
                                        </div>

                                </div>

                        </div>
                </div >
        )
}
export default ProductDetail;