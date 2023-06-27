import { useLayoutEffect, useState, useContext } from "react"
import { Spinner, Label, TextInput, Tooltip, Button, Modal } from "flowbite-react"

import { BsInfoCircle } from "react-icons/bs"
import { SiEthereum } from "react-icons/si"
import { CiPaperplane } from "react-icons/ci"
import { LuCopy } from "react-icons/lu"

import { TransactionContext } from "~/Context/TransactionContext"
import { shortenAddress } from "~/utils/shortenAddress"
const PaymentCrypto = () => {
        const { currentWallet, addressTo, handlePrice, sendTransaction, connectWallet, loadingConnectWallet, setLoadingConnectWallet } = useContext(TransactionContext)
        const [isconnectWallet, setIsConnectWallet] = useState(false)
        const [quantity, setQuantity] = useState(1)
        const [price, setPrice] = useState(0.002)
        const [total, setTotal] = useState(price)
        useLayoutEffect(() => {
                if (quantity <= 1) {
                        setQuantity(1)
                }
                setTotal(quantity * price)
                handlePrice('0.002')
        }, [quantity])

        const handleOrder = (e) => {
                if (currentWallet) {
                        sendTransaction()
                }
                else {
                        setLoadingConnectWallet(true)
                        setIsConnectWallet(true)
                }

        }
        return (
                <div>
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
                                                                <p className="w-40 text-center"><span>{price} <span className="font-bold">ETH</span></span></p>
                                                                <p className="w-40 text-center">1</p>
                                                                <p className="w-40 text-center"><span>0.01074865 <span className="font-bold">ETH</span></span></p>
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
                                                                        <p className="text-xs">Nhận hàng vào 26/06 - 28/06 </p>
                                                                </div>
                                                                <p className="cursor-pointer">THAY ĐỔI</p>
                                                                <p><span>0.0000165 <span className="font-bold">ETH</span></span></p>
                                                        </div>
                                                </div>
                                                <p className="py-3 text-end">Tổng số tiền (3 sản phẩm): <span>{price} <span className="font-bold">ETH</span></span></p>
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

                                                </div>

                                                {/* Tab content */}
                                                <div>
                                                        <div className="py-4 border-t justify-center flex gap-12 text-sm items-center">
                                                                {currentWallet
                                                                        ? (<div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                                                                                <div className="flex justify-between flex-col w-full h-full">
                                                                                        <div className="flex justify-between items-start">
                                                                                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                                                                                        <SiEthereum fontSize={21} color="#fff" />
                                                                                                </div>
                                                                                                <BsInfoCircle fontSize={17} color="#fff" />
                                                                                        </div>
                                                                                        <div>
                                                                                                <p className="flex gap-3 items-center text-black overflow-hidden font-light text-sm">
                                                                                                        {currentWallet ? shortenAddress(currentWallet) : ''}
                                                                                                        <Tooltip content="Copied" trigger="click" className="text-xs leading-none py-1 px-2">
                                                                                                                <button onClick={() => navigator.clipboard.writeText(currentWallet)}>
                                                                                                                        <LuCopy />
                                                                                                                </button>
                                                                                                        </Tooltip>
                                                                                                </p>
                                                                                                <p className="text-white font-semibold text-lg mt-1 text-gradient">
                                                                                                        Ethereum
                                                                                                </p>
                                                                                        </div>
                                                                                </div>
                                                                        </div>)
                                                                        : (
                                                                                <span>Bạn chưa liên kết với ví.</span>

                                                                        )}
                                                                <CiPaperplane fontSize={38} />
                                                                {addressTo
                                                                        ? (
                                                                                <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                                                                                        <div className="flex justify-between flex-col w-full h-full">
                                                                                                <div className="flex justify-between items-start">
                                                                                                        <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                                                                                                <SiEthereum fontSize={21} color="#fff" />
                                                                                                        </div>
                                                                                                        <BsInfoCircle fontSize={17} color="#fff" />
                                                                                                </div>
                                                                                                <div>
                                                                                                        <p className="flex gap-3 items-center text-black overflow-hidden font-light text-sm">
                                                                                                                {shortenAddress(addressTo)}
                                                                                                                <Tooltip content="Copied" trigger="click" className="text-xs leading-none py-1 px-2">
                                                                                                                        <button onClick={() => navigator.clipboard.writeText(addressTo)}>
                                                                                                                                <LuCopy />
                                                                                                                        </button>
                                                                                                                </Tooltip>
                                                                                                        </p>
                                                                                                        <p className="text-white font-semibold text-lg mt-1 text-gradient">
                                                                                                                Ethereum
                                                                                                        </p>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        ) : ''}
                                                        </div>
                                                        <div className="flex justify-end py-5">
                                                                <div>
                                                                        <p className="flex justify-between mb-4 items-center gap-8 text-sm"><span>Tổng tiền hàng:</span><span>0.01074865 <span className="font-bold">ETH</span></span></p>
                                                                        <p className="flex justify-between mb-4 items-center gap-8 text-sm"><span>Phí gas:</span><span>- 0.0000165 <span className="font-bold">ETH</span></span></p>
                                                                        <p className="flex justify-between mb-4 items-center gap-8 text-sm"><span>Phí vận chuyển:</span><span>+ 0.0000165 <span className="font-bold">ETH</span></span></p>
                                                                        <p className="flex justify-between mb-4 items-center gap-8 text-sm"><span>Tổng tiền hàng:</span><span className="text-3xl">{price} <span className="font-bold">ETH</span></span></p>
                                                                </div>
                                                        </div>
                                                        <div className="flex justify-between border-t py-5 items-center">
                                                                <p>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân thủ theo <a href="">Điều khoản của Entidy</a></p>
                                                                <Button className="px-12" onClick={handleOrder}>Đặt hàng</Button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        {isconnectWallet
                                ? (
                                        <Modal show={loadingConnectWallet} size="md" popup onClose={() => setLoadingConnectWallet(false)}>
                                                <Modal.Header />
                                                <Modal.Body>
                                                        <div className="text-center">

                                                                <div className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                                        <h3 className="font-bold text-xl mb-3">Bạn chưa kết nối với Ví !</h3>
                                                                        {loadingConnectWallet ? <Spinner aria-label="Default status example" /> : ''}
                                                                        <p className="text-xs">Vui lòng kết nối ví để hoàn tất thanh toán.</p>
                                                                </div>
                                                                <div className="flex justify-center gap-4">
                                                                        <Button onClick={connectWallet}>
                                                                                Kết nối với Ví
                                                                        </Button>

                                                                </div>
                                                        </div>
                                                </Modal.Body>
                                        </Modal>
                                )
                                : ''
                        }
                </div >

        )
}
export default PaymentCrypto