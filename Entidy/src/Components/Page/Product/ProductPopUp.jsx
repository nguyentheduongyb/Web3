import { useEffect, useLayoutEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from 'flowbite-react';

import { TransactionContext } from '~/Context/TransactionContext'
import { BiStar, BiPlus, BiMinus } from "react-icons/bi"
import { baseURL } from "~/API/request";
import entidyAPI from "~/API"
const ProductDetail = ({ item, show, setShow }) => {
        const navigate = useNavigate()
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
        const handleAddCart = () => {
                entidyAPI.post("user/cart", {
                        productId: item._id,
                        quantity
                })
                        .then(() => {
                                alert("Thêm vào giỏ hàng thành công")
                        })
                        .catch((error) => {
                                console.log(error);
                        })
        }
        const handleChangePage = (e) => {
                e.preventDefault()
                setShow(false)
                navigate("/cart")
        }

        return (
                <Modal show={show} size="5xl" onClose={() => setShow(false)}>
                        <Modal.Header className="border-none p-4 pb-0"></Modal.Header>
                        <Modal.Body>
                                <div className="flex">
                                        <div className="w-[400px] p-[16px]">
                                                <div className={`w-full pt-[100%] bg-no-repeat bg-center bg-cover rounded-[12px]`} style={{ backgroundImage: `url('${baseURL}${imageUrl && imageUrl}')` }}></div>
                                        </div>
                                        <div className="p-[16px] flex-1">
                                                <div><span className="bg-[red] p-1 text-xs rounded text-white mr-3">Yêu thích+</span><span className="text-[#dc2626] font-bold line-clamp-3 inline">{item.name}</span></div>
                                                <div className="flex justify-between mt-3">
                                                        <div className="flex">
                                                                <div className="flex items-center pr-5">
                                                                        <span className="mr-1">{item.vote}</span>
                                                                        {item.vote % 1 == 0 && [...Array(item.vote)].map((x, i) =>
                                                                                <BiStar key={i} />
                                                                        )}
                                                                </div>
                                                                <div className="flex items-center px-5 border-x border-[#dc2626]">
                                                                        <span className="mr-1">{item.rate}</span>
                                                                        <span>Đánh giá</span>
                                                                </div>
                                                                <div className="flex items-center pl-5">
                                                                        <span className="mr-1">{item.selled}</span>
                                                                        Đã bán
                                                                </div>
                                                        </div>
                                                        <button>Tố cáo</button>
                                                </div>
                                                <div className="flex justify-center mt-3 py-2 rounded bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                                        <div className="flex items-center gap-40">
                                                                <p>{item.price}</p>
                                                        </div>

                                                </div>
                                                <div className="mt-3">
                                                        <h2 className="font-bold">Mô tả:</h2>
                                                        <div>
                                                                <p className={`mt-3 line-clamp-2 text-sm ${extendText && 'line-clamp-none'}`}>{item.description}</p>
                                                                {!extendText ? <span className="cursor-pointer text-blue-500 text-xs" onClick={() => { setExtendText(true) }}>Đọc thêm ...</span>
                                                                        : <span className="cursor-pointer text-blue-500 text-xs" onClick={() => { setExtendText(false) }}>Ẩn bớt ...</span>}
                                                        </div>
                                                </div>
                                                <div className="mt-3">
                                                        <h2 className="font-bold">Phân loại:</h2>
                                                        <div className="flex flex-wrap gap-5 mt-4">
                                                                {item.classify && item.classify.map((classify, key2) => (
                                                                        <button key={key2} className="h-[32px] flex items-center border rounded px-4 border-[#000] border-[1.6px]">{classify}</button>

                                                                ))}
                                                        </div>
                                                </div>
                                                <div className="mt-3 flex items-center gap-12">
                                                        <h2 className="font-bold">Số lượng:</h2>
                                                        <div className="flex h-[32px] border-[1px] border border-black">
                                                                <button onClick={() => { setQuantity(quantity - 1) }} className="border-r border-black w-[32px] flex justify-center items-center h-full p-0"><BiMinus /></button>
                                                                <input className="flex justify-center text-center w-10 border-none  border-l border-r focus-input-none" type="text" value={quantity} />
                                                                <button onClick={() => {
                                                                        if (quantity == item.quantity) {
                                                                                setQuantity(quantity + 0)
                                                                        }
                                                                        else { setQuantity(quantity + 1) }
                                                                }} className="border-l border-solid border-black  w-[32px] flex justify-center items-center h-full p-0"><BiPlus /></button>
                                                        </div>
                                                        <p>{item.quantity} sản phẩm có sẵn</p>
                                                </div>
                                                <div className="flex justify-center gap-5 py-5">
                                                        <Button onClick={handleAddCart} color="gray">Thêm vào giỏ hàng</Button>
                                                        <Link to="/cart" onClick={handleChangePage}>
                                                                <Button color="failure">Mua ngay</Button>
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </Modal.Body>
                </Modal>
        )
}
export default ProductDetail;