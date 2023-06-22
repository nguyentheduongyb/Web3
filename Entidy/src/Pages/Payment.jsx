import { Fragment, useLayoutEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Checkbox, Label, Button, TextInput, Tooltip } from "flowbite-react"

import { BsInfoCircle } from "react-icons/bs"
import { SiEthereum } from "react-icons/si"
import { BsCheck2 } from "react-icons/bs"
import { LuCopy } from "react-icons/lu"

import images from "~/assets/images"
import Search from "~/Components/Page/Search"
import { TransactionContext } from "~/Context/TransactionContext"
import { shortenAddress } from "~/utils/shortenAddress"

const Payment = () => {
        const { currentWallet, connectWallet } = useContext(TransactionContext)

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
                                                <h4 className="text-xl">Thanh toán</h4>
                                        </div>
                                        <Search />
                                </div>

                        </div>
                        <div className="bg-[#f5f5f5] py-5">
                                <div className="container">
                                        {/* Địa chỉ nhận hàng */}
                                        <div className="px-8 py-5 bg-white mb-3">
                                                <p>Địa chỉ nhận hàng</p>
                                                <div className="flex gap-5 items-center"><span>Nguyễn Thế Dương (+8485444759)</span><div className="flex items-center">Số nhà 120 Ngách 250/39 Kim Giang, Phường Đại Kim, Quận Hoàng Mai, Hà Nội <button className="ml-2 text-xs border px-1 py-1 rounded">Mặc định</button></div><button>Thay đổi</button></div>
                                        </div>
                                        {/* 1 Sản phẩm */}
                                        <div className="px-8 py-8 pb-0 mb-4 bg-white rounded">
                                                <div className="">
                                                        <div className="flex items-center mb-4">
                                                                <p className="flex-1">Sản phẩm</p>
                                                                <p className="w-40 text-center text-center">Đơn giá</p>
                                                                <p className="w-40 text-center">Số lượng</p>
                                                                <p className="w-40 text-center">Thành tiền</p>
                                                        </div>
                                                        <div className="flex gap-4 mb-4">
                                                                <p>OCEAN.NTD</p>
                                                                <span>|</span>
                                                                <button>Chat ngay</button>
                                                        </div>
                                                        <div className="flex items-center mb-4 items-center">
                                                                <div className="bg-no-repeat bg-center bg-cover w-12 h-12 mr-4" style={{ backgroundImage: 'url("https://down-vn.img.susercontent.com/file/d05d4968ccf1688925ceb4a75941f496_tn")' }}></div>
                                                                <div className="flex-1 flex items-center">
                                                                        <p className="truncate text-sm">Áo thun tay lỡ unisex Local brand OCEAN - Áo phông Ullza áo phông</p>
                                                                        <p className="text-[#ccc] text-xs">Loại: ĐEN, M từ (38 đến 65kg)</p>
                                                                </div>
                                                                <p className="w-40 text-center">155000đ</p>
                                                                <p className="w-40 text-center">1</p>
                                                                <p className="w-40 text-center">15500</p>
                                                        </div>
                                                        <div className="flex items-center mb-4 items-center">
                                                                <div className="bg-no-repeat bg-center bg-cover w-12 h-12 mr-4" style={{ backgroundImage: 'url("https://down-vn.img.susercontent.com/file/d05d4968ccf1688925ceb4a75941f496_tn")' }}></div>
                                                                <div className="flex-1 flex items-center">
                                                                        <p className="truncate text-sm">(Tặng Ngẫu Nhiên) Sticker decal chống thấm nước ca</p>
                                                                        <p className="text-[#ccc] text-xs"></p>
                                                                </div>
                                                                <p className="w-40 text-center"></p>
                                                                <p className="w-40 text-center">1</p>
                                                                <p className="w-40 text-center"></p>
                                                        </div>
                                                </div>
                                                <div className="border-y flex justify-end gap-60 py-4 text-sm">
                                                        <button>Voucher của Shop</button>
                                                        <button>Chọn Voucher</button>
                                                </div>
                                                <div className="border-b flex py-3">
                                                        <div className="flex items-center w-4/12 gap-4 pr-8 border-r">
                                                                <Label>Lời nhắn:</Label>
                                                                <TextInput className="flex-1" placeholder="Lưu ý cho người bán"></TextInput>
                                                        </div>
                                                        <div className="flex justify-between flex-1 pl-8 text-sm">
                                                                <p>Đơn vị vận chuyển</p>
                                                                <div>
                                                                        <p>Nhanh</p>
                                                                        <p class="text-xs">Nhận hàng vào 26/06 - 28/06 </p>
                                                                </div>
                                                                <p className="cursor-pointer">THAY ĐỔI</p>
                                                                <p>28.800đ</p>
                                                        </div>
                                                </div>
                                                <p className="py-3 text-end">Tổng số tiền (3 sản phẩm): <span>183000đ</span></p>
                                        </div>

                                        {/* Voucher */}
                                        <div className="flex justify-between bg-white px-8 py-4 rounded mb-4 text-sm    ">
                                                <p>Entidy voucher</p>
                                                <button>Chọn voucher</button>
                                        </div>

                                        {/* Phương thức thanh toán */}
                                        <div className="bg-white px-8 py-4">
                                                {/* Tab Payment */}
                                                <div className="mb-4">
                                                        <h4 className="font-bold">Phương thức thanh toán:</h4>
                                                        <ul className="flex gap-8 mt-4">
                                                                <button className="rounded border relative px-4 py-2 text-sm">Crypto
                                                                        <BsCheck2 className="absolute right-0 bottom-0" />
                                                                </button>

                                                                <button className="rounded relative border px-4 py-2 text-sm">Ngân hàng
                                                                        <BsCheck2 className="absolute right-0 bottom-0" />
                                                                </button>
                                                                <button className="rounded relative border px-4 py-2 text-sm">Thanh toán khi nhận hàng
                                                                        <BsCheck2 className="absolute right-0 bottom-0" />
                                                                </button>
                                                        </ul>
                                                </div>

                                                {/* Tab content */}
                                                <div>
                                                        <div className="py-4 border-y flex gap-12 text-sm">
                                                                <span>Thanh toán khi nhận hàng</span>
                                                                <span>Phí thu hộ: ₫0 VNĐ. Ưu đãi về phí vận chuyển (nếu có) áp dụng cả với phí thu hộ.</span>
                                                        </div>
                                                        <div className="flex justify-end py-5">
                                                                <div>
                                                                        <p className="flex justify-between mb-4 items-center gap-8 text-sm"><span>Tổng tiền hàng:</span><span>₫155000</span></p>
                                                                        <p className="flex justify-between mb-4 items-center gap-8 text-sm"><span>Phí vận chuyển:</span><span>₫15000</span></p>
                                                                        <p className="flex justify-between mb-4 items-center gap-8 text-sm"><span>Tổng tiền hàng:</span><span className="text-3xl">₫170000</span></p>
                                                                </div>
                                                        </div>
                                                        <div className="flex justify-between border-t py-5 items-center">
                                                                <p>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân thủ theo <a href="">Điều khoản của Entidy</a></p>
                                                                <Button className="px-12">Đặt hàng</Button>
                                                        </div>
                                                </div>

                                        </div>
                                </div>
                        </div>
                </div>

        )
}
export default Payment