import { Fragment, useLayoutEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Checkbox, Label, Button } from "flowbite-react"
import images from "~/assets/images"
import Search from "~/Components/Page/Search"
import { BiStar, BiPlus, BiMinus } from "react-icons/bi"
import { MdDelete } from "react-icons/md"

const Cart = () => {
        const [quantity, setQuantity] = useState(1)
        const [price, setPrice] = useState(150000)
        const [total, setTotal] = useState(price)
        useLayoutEffect(() => {
                if (quantity <= 1) {
                        setQuantity(1)
                }
                setTotal(quantity * price)
        }, [quantity])
        return (
                <div>
                        <div className="h-[68px] w-full bg-white">
                                <div className="h-full flex items-center container mx-auto justify-between">
                                        <div className="flex items-center gap-4">
                                                <Link to="/"><img className="h-[68px]" src={images.logo} alt="" /></Link>
                                                <span className="h-[30px] w-[1.6px] bg-black"></span>
                                                <h4 className="text-xl">Giỏ hàng</h4>
                                        </div>
                                        <Search />
                                </div>

                        </div>
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
                                                <div className="bg-[#ffff] rounded text-sm  mb-4">
                                                        <div className="flex items-center px-8 py-5">
                                                                <Checkbox className="mr-6" />
                                                                <div className="flex justify-between flex-1">
                                                                        <p className="flex-1">OCEAN</p>
                                                                </div>
                                                        </div>
                                                        <div className="px-4 pb-4">
                                                                <div className="border rounded">
                                                                        <div className="px-3 py-4">Mua nhiều hơn ₫135.000 và nhận được 2 quà tặng <Link>Thêm {`>`}</Link></div>
                                                                        <div className="px-4 py-4 flex items-center">
                                                                                <Checkbox className="mr-6" />
                                                                                <div className="flex justify-between flex-1 items-center">
                                                                                        <div className="flex-1 flex gap-2 items-center">
                                                                                                <div className="w-20 h-20 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://down-vn.img.susercontent.com/file/d05d4968ccf1688925ceb4a75941f496_tn")' }}></div>
                                                                                                <p className="flex-1 line-clamp-2">Áo thun tay lỡ unisex Local brand OCEAN - Áo phông Ullzang tay lỡ nam nữ 100% Cotton 3 size M,L,XL - OCEAN.CLO</p>
                                                                                                <p>Phân loại hàng:</p>
                                                                                        </div>
                                                                                        <div className="w-52 text-center text-xs">{price}đ/0.01074865<span className="font-bold">ETH</span></div>
                                                                                        <div className="w-36 flex justify-center">
                                                                                                <div className="flex h-[32px] border-[1px] border  border-black">
                                                                                                        <button onClick={() => { setQuantity(quantity - 1) }} className="border-r border-black w-[32px] flex justify-center items-center h-full p-0"><BiMinus /></button>
                                                                                                        <input className="flex justify-center text-center w-12 border-none  border-l border-r focus-input-none" type="text" value={quantity} />
                                                                                                        <button onClick={() => { setQuantity(quantity + 1) }} className="border-l border-solid border-black  w-[32px] flex justify-center items-center h-full p-0"><BiPlus /></button>
                                                                                                </div>
                                                                                        </div>
                                                                                        <p className="w-52 text-center text-xs">{total}đ/0.01074865<span className="font-bold">ETH</span></p>
                                                                                        <p className="w-20 flex justify-center"><button><MdDelete fontSize={24} /></button></p>
                                                                                </div>
                                                                        </div>
                                                                </div>

                                                        </div>
                                                        <div className="py-4 border-t px-8 flex">
                                                                <Checkbox className="mr-6" />
                                                                <div className="flex gap-4">
                                                                        Shop Voucher giảm đến ₫15k <Link>Xem thêm voucher</Link>
                                                                </div>
                                                        </div>
                                                        <div className="py-4 border-t px-8 flex">
                                                                <Checkbox className="mr-6" />
                                                                <div className="flex gap-4">
                                                                        Miễn phí vận chuyển <Link>Tìm hiểu thêm</Link>
                                                                </div>
                                                        </div>
                                                </div>
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
                                                        <Checkbox className="mr-6" />
                                                        <button>Chọn tất cả</button>
                                                        <button>Xóa</button>
                                                        <p>Tổng thanh toán(0)sản phẩm: 0đ/0<span class="font-bold">ETH</span></p>
                                                        <div className="flex gap-8">
                                                                <Link to="/payment">
                                                                        <Button>Mua với VNĐ</Button>
                                                                </Link>
                                                                <Link to="/payment/crypto">
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