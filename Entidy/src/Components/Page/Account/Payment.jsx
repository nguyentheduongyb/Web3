import { useContext } from "react"
import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs"
import { BiPlus } from "react-icons/bi"

import { TransactionContext } from "~/Context/TransactionContext"
const Payment = () => {
        const { currentAccount } = useContext(TransactionContext)
        return (
                <div className="flex-1 bg-gradient-to-r from-slate-50 to-cyan-50 text-black rounded p-5">
                        <div>
                                <div className="h-[80px] border-b flex justify-between items-center">
                                        <div>
                                                <h5 className="font-bold mb-4">Ví (tiền điện tử)</h5>
                                        </div>
                                        <div>
                                                <button className="px-4 font-bold text-white h-[32px] flex items-center rounded bg-gray-500"><span>Thêm ví mới</span><BiPlus /></button>
                                        </div>
                                </div>
                                <div className="min-h-[200px] w-full py-5 flex items-center justify-center">
                                        {currentAccount
                                                ? (<div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
                                                        <div className="flex justify-between flex-col w-full h-full">
                                                                <div className="flex justify-between items-start">
                                                                        <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                                                                <SiEthereum fontSize={21} color="#fff" />
                                                                        </div>
                                                                        <BsInfoCircle fontSize={17} color="#fff" />
                                                                </div>
                                                                <div>
                                                                        <p className="text-black overflow-hidden font-light text-sm">
                                                                                {currentAccount}
                                                                        </p>
                                                                        <p className="text-white font-semibold text-lg mt-1">
                                                                                Ethereum
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>)
                                                : (
                                                        <span>Bạn chưa liên kết với ví.</span>

                                                )}
                                </div>
                        </div>
                        <div>
                                <div className="h-[80px] border-b flex justify-between items-center">
                                        <div>
                                                <h5 className="font-bold mb-4">Ngân hàng</h5>
                                        </div>
                                        <div>
                                                <button className="px-4 font-bold text-white h-[32px] flex items-center rounded bg-gray-500"><span>Thêm tài khoản mới</span><BiPlus /></button>
                                        </div>
                                </div>
                                <div className="min-h-[200px] w-full py-5 flex items-center justify-center">
                                        Bạn chưa có tài khoản ngân hàng.

                                </div>
                        </div>
                </div>
        )
}
export default Payment