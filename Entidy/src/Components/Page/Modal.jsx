import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

const Modal = ({ size, show, onHide }) => {
        // const [sizeModal, setSizeModal] = useState('sm')
        const sizeModal = ''
        const [showModal, setShowModal] = useState(show)
        return (
                <div className={`fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${show ? "flex" : "hidden"}`}>
                        <div className="w-[500px] max-h-[400px] rounded-[8px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                                <div className="p-[16px] flex item-center justify-between text-[26px] border-b border-[#ccc]">
                                        <div>
                                                <p>Modal title</p>
                                        </div>
                                        <button onClick={() => { setShowModal(false) }}><IoMdClose color="#fff" /></button>
                                </div>
                                <div className="p-[16px] max-h-[260px] overflow-y-auto">
                                        <h3>hello</h3>
                                        <h3>hello</h3>
                                        <h3>hello</h3>
                                        <h3>hello</h3>
                                        <h3>hello</h3>
                                        <h3>hello</h3>
                                        <h3>hello</h3>
                                        <h3>hello</h3>
                                        <h3>hello</h3>
                                        <h3>hello</h3>
                                </div>
                                <div className="p-[16px] flex justify-end border-t border-[#ccc]">
                                        <button className="h-[37.5px] px-5 bg-[#6C757D] rounded-[12px] font-bold mr-5">Close</button>
                                        <button className="h-[37.5px] px-4 bg-[blue] rounded-[12px] font-bold">Save</button>
                                </div>
                        </div>
                </div >
        )
}

export { Modal }
