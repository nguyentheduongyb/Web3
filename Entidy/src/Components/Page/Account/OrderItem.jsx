import { Fragment } from "react"
import { BsQuestionCircle, BsShop } from "react-icons/bs"
import { Link } from "react-router-dom"
const Item = () => {
        return (
                <div className="mb-3 rounded">
                        <div className="p-5 bg-white text-black border-b">
                                <div className="flex justify-between border-b pb-3">
                                        <div className="flex gap-2"><span>Love Studio</span><button className="border text-xs rounded px-2 py-1 flex items-center gap-2"><BsShop />Xem Shop</button></div>
                                        <div className="flex gap-2 items-center"><span>Đơn hàng đã được giao thành công</span><BsQuestionCircle /><span>|</span><span>Hoàn thành</span></div>
                                </div>
                                <div className="py-3 flex gap-4">
                                        <div className="border w-[80px] h-[80px] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg97sxvat7uf19_tn')" }} />
                                        <div className="w-full flex gap-18 justify-between items-center">
                                                <div>
                                                        <span>[Mã TOPMAY giảm đến 25k đơn 150k] Áo thun Drew local brand phông Gấu Hồng Lotso Unisex nam nữ bigsize Love Studio</span>
                                                        <p className="my-3">Phân loại hàng: Drew gấu trắng A089</p>
                                                        <div>x1</div>
                                                        <Link to="" className="border border-[var(--text-primary)] text-sm py-1 px-2">7 ngày trả hàng</Link>
                                                </div>
                                                <span>99.000đ</span>
                                        </div>
                                </div>
                        </div>
                        <div className="p-5 bg-white text-black">
                                <div className="flex justify-end pb-3">
                                        <div className="flex gap-2"><h2>Thành tiền:</h2><span className="text-sm text-[var(--text-primary)]">đ</span><span className="text-[var(--text-primary)] font-bold text-xl">97.000đ</span></div>
                                </div>
                                <div className="flex justify-between">
                                        <div>
                                                <span>Đánh giá sản phẩm trước<u className="text-[var(--text-primary)] mx-2 cursor-pointer" >04-07-2023</u></span>
                                                <span>Đánh giá ngay và nhận 200 Xu</span>
                                        </div>
                                        <div className="flex gap-4">
                                                <Link>
                                                        <button className="h-[38px] px-6 rounded-[4px] text-white bg-[var(--text-primary)]">Đánh giá</button>
                                                </Link>
                                                <Link>
                                                        <button className="h-[38px] px-6 rounded-[4px] border">Liên hệ người bán</button>
                                                </Link>
                                                <Link>
                                                        <button className="h-[38px] px-6 rounded-[4px] border">Mua lại</button>
                                                </Link>
                                        </div>
                                </div>
                        </div>
                </div>

        )
}
export default Item