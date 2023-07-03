import { Link } from "react-router-dom"
import { CgNotes } from "react-icons/cg"
import { MdPayments } from "react-icons/md"
import { FaTruckMoving } from "react-icons/fa"
import { BsInbox } from "react-icons/bs"
import { AiOutlineStar } from "react-icons/ai"
const Order = () => {
        return (
                <div>
                        <div className="bg-[#f5f5f5] py-5">
                                <div className="container">
                                        {/* Địa chỉ nhận hàng */}
                                        <div className="px-32 py-16 bg-white mb-3 justify-between flex ">
                                                <div>
                                                        <Link to="/account/order"></Link>
                                                </div>
                                                <div className="w-64 flex flex-col items-center">
                                                        <div className="w-16 h-16 rounded-full border flex items-center justify-center">
                                                                <CgNotes fontSize={32} />
                                                        </div>
                                                        <div className="mt-4 text-center text-sm">
                                                                <p className="font-bold">Đơn hàng đã đặt</p>
                                                                <p>2021-07-08 8:00</p>
                                                        </div>

                                                </div>
                                                <div className="w-64 flex flex-col items-center">
                                                        <div className="w-16 h-16 rounded-full border flex items-center justify-center">
                                                                <MdPayments fontSize={32} />
                                                        </div>
                                                        <div className="mt-4 text-center text-sm">
                                                                <p className="font-bold">Đã xác nhận thông tin thanh toán</p>
                                                                <p>2021-07-08 8:00</p>
                                                        </div>
                                                </div>
                                                <div className="w-64 flex flex-col items-center">
                                                        <div className="w-16 h-16 rounded-full border flex items-center justify-center">
                                                                <FaTruckMoving fontSize={32} />
                                                        </div>
                                                        <div className="mt-4 text-center text-sm">
                                                                <p className="font-bold">Chờ lấy hàng</p>
                                                                <p>2021-07-08 8:00</p>
                                                        </div>
                                                </div>
                                                <div className="w-64 flex flex-col items-center">
                                                        <div className="w-16 h-16 rounded-full border flex items-center justify-center">
                                                                <BsInbox fontSize={32} />
                                                        </div>
                                                        <div className="mt-4 text-center text-sm">
                                                                <p className="font-bold">Đang giao</p>
                                                                <p>2021-07-08 8:00</p>
                                                        </div>
                                                </div>
                                                <div className="w-64 flex flex-col items-center">
                                                        <div className="w-16 h-16 rounded-full border flex items-center justify-center">
                                                                <AiOutlineStar fontSize={32} />
                                                        </div>
                                                        <div className="mt-4 text-center text-sm">
                                                                <p className="font-bold">Đánh giá</p>
                                                                <p>2021-07-08 8:00</p>
                                                        </div>
                                                </div>
                                        </div>
                                        {/* 1 Sản phẩm */}
                                        <div className="bg-white px-8 py-8">
                                                <div>Đơn hàng đã được thanh toán chờ xác nhận của người bán</div>
                                                <div className="flex justify-end mb-6">
                                                        <button className="w-64 py-3 rounded border text-sm">Liên hệ người bán</button>
                                                </div>
                                                <div className="flex justify-end mb-6">
                                                        <button className="w-64 py-3 rounded border text-sm">Hủy đơn hàng</button>
                                                </div>
                                                <div className="px-8">
                                                        <div className="flex items-center mb-5 justify-between">
                                                                <h2 className="font-bold text-2xl">Địa chỉ nhận hàng</h2>
                                                                <p>Giao hàng nhanh</p>
                                                        </div>
                                                        <div className="flex">
                                                                <div className="w-60 pr-6 border-r">
                                                                        <h6>Nguyễn Thế Dương</h6>
                                                                </div>
                                                                <div className="pl-6">
                                                                        <p className="text-sm text-wrap">Thôn Bảo Tân, xã Minh Bảo, thành phố Yên Bái, tỉnh Yên Bái.</p>

                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
export default Order