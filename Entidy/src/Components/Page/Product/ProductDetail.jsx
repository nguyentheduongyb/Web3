import { Fragment, useEffect, useState } from "react";
import { useContext } from 'react'

import { TransactionContext } from '~/Context/TransactionContext'
import { BiStar } from "react-icons/bi"
import { RiShoppingBasketFill } from "react-icons/ri"
import { SiBitcoin } from 'react-icons/si'
import { IoMdClose } from 'react-icons/io'

const ProductDetail = ({ item, show, setShow }) => {
        const { connectedWallet } = useContext(TransactionContext)

        const [imageUrl, setImageUrl] = useState('')
        useEffect(() => {
                setImageUrl(item.image)
        })
        return (
                <div className={`fixed top-0 left-0 z-50 w-full h-full items-center justify-center bg-black bg-opacity-5 ${show ? 'flex' : 'hidden'}`}>
                        <div className="w-[70%] rounded-[8px] bg-gradient-to-r from-[#a5f3fc] to-[#e7e5e4]">
                                <div className="p-[16px] pb-[0px] flex justify-end">
                                        <button onClick={() => { setShow(false) }}><IoMdClose fontSize={28} color="#fff" /></button>
                                </div>
                                <div className="">
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
                                                        <div className="flex justify-center mt-3">
                                                                <div className="flex items-center gap-40">
                                                                        {item.prices.map((price) => {
                                                                                return (
                                                                                        <div className="flex items-center gap-4">
                                                                                                {price.currency == "VNĐ"
                                                                                                        ? <Fragment><p className="flex items-end leading-none"><span className="text-[10px] mr-[2px] text-[red]">vnđ</span><span className="truncate">{price.price}</span></p><button className="hover:bg-sky-500 shadow-indigo-500/50 gap-2 flex items-center rounded-[16px] h-[26px] px-3 bg-white"><RiShoppingBasketFill />VNĐ</button></Fragment>
                                                                                                        : <Fragment><p className="flex items-center"><span><SiBitcoin className='mr-[2px] text-[green]' /></span><span title={price.price} className="truncate">{price.price}</span></p><button onClick={connectedWallet} className="hover:bg-sky-500 shadow-indigo-500/50 gap-2 flex items-center rounded-[16px] h-[26px] px-3 bg-white"><RiShoppingBasketFill />BTC</button></Fragment>
                                                                                                }
                                                                                        </div>
                                                                                )
                                                                        })}
                                                                </div>

                                                        </div>
                                                        <div className="mt-3">
                                                                <h2 className="font-bold">Mô tả:</h2>
                                                                <p className="mt-4">{item.description}</p>
                                                        </div>
                                                        <div className="mt-3">
                                                                <h2 className="font-bold">Phân loại:</h2>
                                                                <ul className="flex flex-wrap gap-5 mt-4">
                                                                        <li className="h-[32px] flex items-center border rounded px-4 border-[#000] border-[1.6px]">Chiết 10ml</li>
                                                                        <li className="h-[32px] flex items-center border rounded px-4 border-[#000] border-[1.6px]">Chiết 10ml</li>
                                                                        <li className="h-[32px] flex items-center border rounded px-4 border-[#000] border-[1.6px]">Chiết 10ml</li>
                                                                        <li className="h-[32px] flex items-center border rounded px-4 border-[#000] border-[1.6px]">Chiết 10ml</li>
                                                                        <li className="h-[32px] flex items-center border rounded px-4 border-[#000] border-[1.6px]">Chiết 10ml</li>

                                                                </ul>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </div>
                </div >
        )
}
export default ProductDetail;