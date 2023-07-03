import { useState, useLayoutEffect, useEffect } from "react"
import { Link } from "react-router-dom"

import { Checkbox } from "flowbite-react"
import { BiPlus, BiMinus } from "react-icons/bi"

import { MdDelete } from "react-icons/md"
import { baseURL } from "~/API/request"
import entidyAPI from "~/API"

const CartItem = ({ item, handleSelect, selectAll, handleLoadAgain }) => {
        // const checkedAll = handleSelectAll()
        const priceItem = item.product.price
        const [quantity, setQuantity] = useState(item.quantity)
        const [total, setTotal] = useState(priceItem * quantity)
        const [checked, setChecked] = useState(false)
        useLayoutEffect(() => {
                if (quantity <= 1) {
                        setQuantity(1)
                }
                setTotal(quantity * priceItem)
        }, [quantity])
        const handleChecked = () => {
                setChecked(!checked)
        }
        item.checked = checked

        useEffect(() => {
                handleSelect(item)

        }, [checked])

        const handleDeleteCartItem = (id) => {
                entidyAPI.delete(`/user/cart/${id}`)
                        .then(() => {
                                handleLoadAgain()
                        })
                        .catch(err => {
                                console.log(err);
                        })
        }
        return (
                <li>
                        <div className="bg-[#ffff] rounded text-sm  mb-4">
                                <div className="flex items-center px-8 py-5">
                                        <Checkbox className="mr-6" checked={checked && true} onChange={handleChecked} />
                                        <div className="flex justify-between flex-1">
                                                <p className="flex-1">ENTIDY</p>
                                        </div>
                                </div>
                                <div className="px-4 pb-4">
                                        <div className="border rounded">
                                                <div className="px-3 py-4">{item.product.promotion && item.product.promotion}<Link class="ml-3">Thêm {`>`}</Link></div>
                                                <div className="px-4 py-4 flex items-center">
                                                        <Checkbox className="mr-6" checked={checked && true} onChange={handleChecked} />
                                                        <div className="flex justify-between flex-1 items-center">
                                                                <div className="flex-1 flex gap-2 items-center">
                                                                        <div className="w-20 h-20 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url("${baseURL}${item.product.image}")` }}></div>
                                                                        <p className="flex-1 line-clamp-2">{item.product.name}</p>
                                                                        <p className="text-wrap flex-1">Phân loại hàng: Chiết 10ml</p>
                                                                </div>
                                                                <div className="w-52 text-center text-xs">{priceItem}đ/0.01074865<span className="font-bold">ETH</span></div>
                                                                <div className="w-36 flex justify-center">
                                                                        <div className="flex h-[32px] border-[1px] border  border-black">
                                                                                <button onClick={() => { setQuantity(quantity - 1) }} className="border-r border-black w-[32px] flex justify-center items-center h-full p-0"><BiMinus /></button>
                                                                                <input className="flex justify-center text-center w-11 border-none  border-l border-r focus-input-none" type="text" value={quantity} />
                                                                                <button onClick={() => { setQuantity(quantity + 1) }} className="border-l border-solid border-black  w-[32px] flex justify-center items-center h-full p-0"><BiPlus /></button>
                                                                        </div>
                                                                </div>
                                                                <p className="w-52 text-center text-xs">{total}đ/0.01074865<span className="font-bold">ETH</span></p>
                                                                <p className="w-20 flex justify-center"><button onClick={() => { handleDeleteCartItem(item._id) }}><MdDelete fontSize={24} /></button></p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="py-4 border-t px-8 flex">
                                        <Checkbox className="mr-6" checked={checked && true} onChange={handleChecked} />
                                        <div className="flex gap-4">
                                                Miễn phí vận chuyển <Link>Tìm hiểu thêm</Link>
                                        </div>
                                </div>
                        </div>
                </li>
        )
}
export default CartItem;