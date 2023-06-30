import { Link } from "react-router-dom";

import Search from "~/Components/Page/Search";
import images from "@assets/images";
import Navbar from "./Navbar";
import Cart from "~/Components/Page/Popper/Cart";

import { HiOutlineMail } from "react-icons/hi"
import { BiSupport } from "react-icons/bi"
import { MdNotifications, MdLanguage } from "react-icons/md"

import { FaUser, FaSignOutAlt, FaUserCircle } from "react-icons/fa"
import { IoMdWallet, IoIosSettings } from "react-icons/io"
import { CgShoppingCart } from "react-icons/cg"

const Header = () => {
        const userMenu1 = [
                {
                        icon: <FaUser />,
                        title: 'Xem Profile',
                        to: '/account/profile',
                },
                {
                        icon: <IoMdWallet />,
                        title: 'Ví',
                        to: '/account/wallet',
                },
                {
                        icon: <IoIosSettings />,
                        title: 'Cài đặt',
                        to: '/settings',
                },
                {
                        icon: <FaSignOutAlt />,
                        title: 'Đăng xuất',
                        separate: true,
                },
        ];
        return (
                <div className="w-full bg-header  text-white fixed top-0 z-[40] shadow-lg shadow-cyan-500/50">
                        <div className="container h-full">
                                <Navbar />
                                <div className="h-[68px] flex items-center container mx-auto justify-around">
                                        <Link to="/"><img className="h-[68px]" src={images.logo} alt="" /></Link>
                                        <div className="flex gap-4">
                                                <Link to="">Sản phẩm mới</Link>
                                                <Link to="">Nữ</Link>
                                                <Link to="">Nam</Link>
                                                <Link to="" className="text-red-500">Sale</Link>
                                        </div>
                                        <Search />
                                        <Cart items={userMenu1}>
                                                <Link to="/cart">
                                                        <CgShoppingCart className="cursor-pointer" fontSize={32} />
                                                </Link>

                                        </Cart>

                                </div>
                        </div>
                </div>
        )
}
export default Header;