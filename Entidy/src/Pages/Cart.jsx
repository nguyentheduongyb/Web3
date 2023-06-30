import { Fragment, useEffect, useLayoutEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Checkbox, Label, Button } from "flowbite-react"
import { BiStar, BiPlus, BiMinus } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import entidyAPI from "~/API"
import { baseURL } from "~/API/request"
import CartItem from "~/Components/Page/Product/CartItem"
const Cart = () => {
        const navigate = useNavigate()
        const [arrays, setArrays] = useState([])
        const [quantity, setQuantity] = useState(1)
        const [price, setPrice] = useState(150000)
        const [total, setTotal] = useState(price)
        const [selectAll, setSelectAll] = useState(false)
        let arrOrder = []
        useLayoutEffect(() => {
                if (quantity <= 1) {
                        setQuantity(1)
                }
                setTotal(quantity * price)
        }, [quantity])
        useEffect(() => {
                entidyAPI.get('/user/cart')
                        .then((res) => {
                                setArrays(res.data)
                        })
        }, [])

        const handleSelect = (item) => {
                if (item.checked === true) {
                        arrOrder.push(item)
                }
                else {
                        arrOrder.pop(item)
                }
        }
        const handleSelectAll = () => {
                arrOrder = arrays
                return !selectAll
        }
        const handleOrder = (e) => {
                e.preventDefault()
                entidyAPI.post('/user/order', {
                        products: arrOrder,
                })
                        .then((res) => {
                                navigate(`/payment/crypto/${res.data._id}`)
                        })
                        .catch((err) => {
                                alert("Có lỗi xảy ra")
                        })
        }
        return (
                <div>
                        <div className="bg-[#f5f5f5] py-5">
                                <div className="container ">
                                        <div className="bg-[#FFFEFB] rounded text-sm px-3 py-2 mb-4">Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</div>
                                        <div className="bg-[#ffff] rounded text-sm px-8 py-5 mb-4 flex items-center">
                                                <Checkbox className="mr-6" />
                                                <div className="flex justify-between flex-1">
                                                        <p className="flex-1">Sản phẩm</p>
                                                        <p className="w-52 text-center">Đơn Giá</p>
                                                        <p className="w-36 text-center">Số Lượng</p>
                                                        <p className="w-52 text-center">Thành Tiền</p>
                                                        <p className="w-20 text-center">Thao Tác</p>
                                                </div>
                                        </div>
                                        <ul>
                                                {arrays && arrays.map((item, index) => (
                                                        <CartItem item={item} key={index} handleSelect={handleSelect} selectAll={handleSelectAll} />
                                                ))}


                                        </ul>
                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 bottom-0 mb-4">
                                                <div className="flex px-4 py-2 w-full">
                                                        <div className="w-2/4 p-3 border-r">
                                                                <h2 className="font-bold">Crypto</h2>
                                                                <div className="flex justify-end gap-28 mt-4 text-sm">
                                                                        <button>Entidy Voucher</button>
                                                                        <button>Chọn hoặc nhập mã</button>
                                                                </div>
                                                        </div>
                                                        <div className="w-2/4 p-3">
                                                                <h2 className="font-bold">VNĐ</h2>
                                                                <div className="flex justify-end gap-28 mt-4 text-sm">
                                                                        <button>Entidy Voucher</button>
                                                                        <button>Chọn hoặc nhập mã</button>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="px-4 py-4 flex justify-between items-center border-t">
                                                        <Checkbox className="mr-6" onClick={handleSelectAll} />
                                                        <button>Chọn tất cả</button>
                                                        <button>Xóa</button>
                                                        <p>Tổng thanh toán(0)sản phẩm: 0đ/0<span className="font-bold">ETH</span></p>
                                                        <div className="flex gap-8">
                                                                <Link to="/payment">
                                                                        <Button>Mua với VNĐ</Button>
                                                                </Link>
                                                                <Link to="/payment/crypto" onClick={handleOrder}>
                                                                        <Button>Mua với Crypto(New)</Button>
                                                                </Link>
                                                        </div>
                                                </div>
                                        </div>
                                        {/* Thanh toán với VNĐ */}
                                        {/* <div className="bg-gradient-to-r from-purple-500 to-pink-500 bottom-0 mb-4">
                                                <div className="flex justify-end gap-40 px-4 py-2">
                                                        <div>Entidy vourcher</div>
                                                        <button>Chọn hoặc nhập mã</button>
                                                </div>

                                                <div className="px-4 py-4 flex justify-between items-center border-t">
                                                        <Checkbox className="mr-6" />
                                                        <button>Chọn tất cả</button>
                                                        <button>Xóa</button>
                                                        <button>Tổng thanh toán(0)sản phẩm: 0đ</button>
                                                        <Button>Mua hàng</Button>
                                                </div>

                                        </div> */}
                                        {/* Thanh toán với Crypto */}
                                        {/* <div className="bg-gradient-to-r from-purple-500 to-pink-500 bottom-0">
                                                <div className="flex justify-end gap-40 px-4 py-2">
                                                        <div>Entidy vourcher</div>
                                                        <button>Chọn hoặc nhập mã</button>
                                                </div>

                                                <div className="px-4 py-4 flex justify-between items-center border-t">
                                                        <Checkbox className="mr-6" />
                                                        <button>Chọn tất cả</button>
                                                        <button>Xóa</button>
                                                        <button>Tổng thanh toán(0)sản phẩm: 0đ</button>
                                                        <Button>Mua hàng</Button>
                                                </div>

                                        </div> */}
                                </div>

                        </div>
                </div>

        )
}
export default Cart