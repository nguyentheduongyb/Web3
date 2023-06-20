import { BiUser, BiPlus } from "react-icons/bi"

const Address = () => {
        return (
                <div className="flex-1 bg-gradient-to-r from-slate-50 to-cyan-50 text-black rounded p-5">
                        <div className="h-[80px] border-b flex justify-between">
                                <div>
                                        <h5 className="font-bold mb-4">Địa chỉ của tôi</h5>
                                </div>
                                <div>
                                        <button className="px-4 font-bold text-white h-[32px] flex items-center rounded bg-gray-500"><span>Thêm địa chỉ mới</span><BiPlus /></button>
                                </div>
                        </div>

                        <div className="mt-5">
                                <h6 className="font-bold mb-3">Địa chỉ</h6>
                                <ul>
                                        <li className="border-b last:border-none py-5">
                                                <div className="flex justify-between mb-3">
                                                        <div className="flex gap-4">
                                                                <span>Nguyễn Thế Dương</span>
                                                                <span>|</span>
                                                                <span>+84985444759</span>
                                                        </div>
                                                        <p>Cập nhật</p>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                        <p>Số nhà 120 Ngách 250/39 Kim Giang
                                                                Phường Đại Kim, Quận Hoàng Mai, Hà Nội</p>
                                                        <button className="inline-flex rounded border py-1 px-2">Thiết lập mặc định</button>
                                                </div>

                                                <button className="inline-flex rounded border py-1 px-2 text-sm">Mặc định</button>
                                        </li>
                                        <li className="border-b last:border-none py-5">
                                                <div className="flex justify-between mb-3">
                                                        <div className="flex gap-4">
                                                                <span>Nguyễn Thế Dương</span>
                                                                <span>|</span>
                                                                <span>+84985444759</span>
                                                        </div>
                                                        <p>Cập nhật</p>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                        <p>Số nhà 120 Ngách 250/39 Kim Giang
                                                                Phường Đại Kim, Quận Hoàng Mai, Hà Nội</p>
                                                        <button className="inline-flex rounded border py-1 px-2">Thiết lập mặc định</button>
                                                </div>

                                                <button className="inline-flex rounded border py-1 px-2 text-sm">Mặc định</button>
                                        </li>
                                        <li className="border-b last:border-none py-5">
                                                <div className="flex justify-between mb-3">
                                                        <div className="flex gap-4">
                                                                <span>Nguyễn Thế Dương</span>
                                                                <span>|</span>
                                                                <span>+84985444759</span>
                                                        </div>
                                                        <p>Cập nhật</p>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                        <p>Số nhà 120 Ngách 250/39 Kim Giang
                                                                Phường Đại Kim, Quận Hoàng Mai, Hà Nội</p>
                                                        <button className="inline-flex rounded border py-1 px-2">Thiết lập mặc định</button>
                                                </div>
                                                <button className="inline-flex rounded border py-1 px-2 text-sm">Mặc định</button>
                                        </li>
                                </ul>
                        </div>
                </div>
        )
}
export default Address