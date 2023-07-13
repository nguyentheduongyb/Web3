import { Link, useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import { useDispatch, useSelector } from 'react-redux'

import { HiOutlineMail } from "react-icons/hi"
import { BiSupport } from "react-icons/bi"
import { MdNotifications, MdLanguage } from "react-icons/md"

import { FaUser, FaSignOutAlt, FaUserCircle } from "react-icons/fa"
import { IoMdWallet, IoIosSettings } from "react-icons/io"

import { logOut } from "~/Redux/Auth/authSlice"
import Menu from "~/Components/Page/Popper/Menu/Menu";
import Language from "~/Components/Page/Popper/Language";
import Image from "~/Components/Page/Image/Image";
import images from "~/assets/images";

const MENU_ITEMS = [
        {
                icon: <MdLanguage />,
                title: 'Tiếng Việt',
                children: {
                        title: 'Language',
                        data: [
                                {
                                        type: 'language',
                                        code: 'en',
                                        title: 'English',
                                },
                                {
                                        type: 'language',
                                        code: 'vi',
                                        title: 'Tiếng Việt',
                                },
                        ],
                },

        },
];


const Navbar = () => {
        const { userInfo } = useSelector(
                (state) => state.auth
        )
        const dispatch = useDispatch()

        const handleSignOut = () => {
                dispatch(logOut())
                localStorage.clear()
                window.location.reload();
        }
        const userMenu = [
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
                        onClick: handleSignOut,
                        separate: true,
                },
        ];

        // Handle logic
        const handleMenuChange = (menuItem) => {
                switch (menuItem.type) {
                        case 'language':
                                // Handle change language
                                break;
                        default:
                }
        };

        return (
                <div className="w-full flex items-center justify-between text-[14px] py-2">
                        <div className="flex items-center gap-5">
                                <Link to="" className="flex items-center gap-1"><HiOutlineMail fontSize={21} />Liên hệ hợp tác</Link>
                                <Link to="" className="flex items-center gap-1"><BiSupport fontSize={21} />Hỗ trợ</Link>
                        </div>
                        <div className="flex gap-5 items-center">
                                <Tippy
                                        interactive
                                        delay={[0, 300]}
                                        offset={[12, 8]}
                                        placement="bottom-start"
                                        render={() => (
                                                <div className="min-w-[400px] text-black bg-white rounded absolute right-0 overflow-hidden">
                                                        <h5 className="p-2 font-bold">Thông báo</h5>
                                                        <p className="bg-gray-100 py-4 text-center">Hiện tại! Bạn chưa có thông báo nào</p>
                                                </div>
                                        )}
                                >
                                        <Link to="" className="flex items-center gap-1"><MdNotifications fontSize={21} />Thông báo</Link>
                                </Tippy>


                                <Language items={MENU_ITEMS} onChange={handleMenuChange}>
                                        <Link to="" className="flex items-center gap-1"><MdLanguage fontSize={21} />Ngôn ngữ</Link>
                                </Language>
                                {userInfo
                                        ? <Menu items={userMenu} >
                                                <div className="flex items-center gap-2">
                                                        <Image
                                                                className="w-[21px] h-[21px] rounded-full cursor-pointer"
                                                                src={images.entidy}
                                                                alt="Nguyen The Duong"
                                                        />
                                                        <span>{userInfo.username}</span>
                                                </div>
                                        </Menu>
                                        : <Link to="/signin" className="flex items-center gap-2"><FaUserCircle />Tài khoản</Link>
                                }
                        </div>
                </div >
        )
}
export default Navbar;