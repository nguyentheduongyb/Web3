import { Fragment, useState } from "react"

import { BsSearch } from "react-icons/bs"

import Item from "./OrderItem"
const Order = () => {
        const [tab, setTab] = useState(1)
        const [focusInput, setFocusInput] = useState(false)
        const handleChangeTab = (e) => {
                setTab(e.currentTarget.getAttribute('id'))
        }
        return (
                <div className="w-full">
                        <ul className="mb-5 flex w-full justify-between bg-gradient-to-r from-slate-50 to-cyan-50 text-black rounded">
                                <li onClick={handleChangeTab} id={1} className={`${tab == 1 ? 'text-[var(--text-primary)] border-b border-[var(--text-primary)] border-b-[3px]' : ''} cursor-pointer hover:text-[var(--text-primary)] text-center py-3 w-[calc(100%/7)]`}>
                                        Tất cả
                                </li>
                                <li onClick={handleChangeTab} id={2} className={`${tab == 2 ? 'text-[var(--text-primary)] border-b border-[var(--text-primary)] border-b-[3px]' : ''} cursor-pointer hover:text-[var(--text-primary)] text-center py-3 w-[calc(100%/7)]`}>
                                        Chờ thanh toán
                                </li>
                                <li onClick={handleChangeTab} id={3} className={`${tab == 3 ? 'text-[var(--text-primary)] border-b border-[var(--text-primary)] border-b-[3px]' : ''} cursor-pointer hover:text-[var(--text-primary)] text-center py-3 w-[calc(100%/7)]`}>
                                        Vận chuyển
                                </li>
                                <li onClick={handleChangeTab} id={4} className={`${tab == 4 ? 'text-[var(--text-primary)] border-b border-[var(--text-primary)] border-b-[3px]' : ''} cursor-pointer hover:text-[var(--text-primary)] text-center py-3 w-[calc(100%/7)]`}>
                                        Đang giao
                                </li>
                                <li onClick={handleChangeTab} id={5} className={`${tab == 5 ? 'text-[var(--text-primary)] border-b border-[var(--text-primary)] border-b-[3px]' : ''} cursor-pointer hover:text-[var(--text-primary)] text-center py-3 w-[calc(100%/7)]`}>
                                        Hoàn thành
                                </li>
                                <li onClick={handleChangeTab} id={6} className={`${tab == 6 ? 'text-[var(--text-primary)] border-b border-[var(--text-primary)] border-b-[3px]' : ''} cursor-pointer hover:text-[var(--text-primary)] text-center py-3 w-[calc(100%/7)]`}>
                                        Đã hủy
                                </li>
                                <li onClick={handleChangeTab} id={7} className={`${tab == 7 ? 'text-[var(--text-primary)] border-b border-[var(--text-primary)] border-b-[3px]' : ''} cursor-pointer hover:text-[var(--text-primary)] text-center py-3 w-[calc(100%/7)]`}>
                                        Trả hàng/Hoàn tiền
                                </li>
                        </ul>
                        <div className="rounded bg-[#eaeaea] p-3 text-[#bbb] flex items-center mb-5 focus:text-black">
                                <BsSearch fontSize={22} className={`${focusInput ? 'text-[#555]' : ''}`} />
                                <input onClick={() => { setFocusInput(true) }} className={`${focusInput ? 'text-[#555]' : ''} flex-1 focus:text-black bg-transparent ml-5 border-none focus-input-none focus:outline-none font-sm`} type="text" placeholder="Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên Sản phẩm" />
                        </div>
                        <Item />
                        <Item />
                </div>
        )
}
export default Order