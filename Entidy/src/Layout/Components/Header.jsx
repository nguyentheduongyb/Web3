import { Link } from "react-router-dom";
import { useContext } from "react";
import { useAuthUser } from 'react-auth-kit'

import { LoginContext } from "~/Context/LoginContext";
import { TransactionContext } from "~/Context/TransactionContext";
import Menu from "~/Components/Page/Popper/Menu/Menu";
import { FaUser, FaSignOutAlt, FaQuestionCircle } from "react-icons/fa"
import { AiOutlineGlobal } from "react-icons/ai"
import { IoMdWallet, IoMdMore, IoIosSettings } from "react-icons/io"
import Search from "~/Components/Page/Search";
import images from "@assets/images";
import Image from "~/Components/Page/Image/Image";

const MENU_ITEMS = [
        {
                icon: <AiOutlineGlobal />,
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
        {
                icon: <FaQuestionCircle />,
                title: 'Đóng góp và hỗ trợ',
                to: '/feedback',
        },

];

const Header = () => {
        const { currentAccount, handleLogout } = useContext(LoginContext)
        const auth = useAuthUser()
        const userAuth = auth()
        // Handle logic
        const handleMenuChange = (menuItem) => {
                switch (menuItem.type) {
                        case 'language':
                                // Handle change language
                                break;
                        default:
                }
        };
        const handle = () => {
                alert()
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
                ...MENU_ITEMS,
                {
                        icon: <FaSignOutAlt />,
                        title: 'Đăng xuất',
                        to: '/logout',
                        separate: true,
                },
        ];

        return (
                <div className="w-full h-[68px] text-white fixed top-0 z-[40] bg-black">
                        <div className="h-full flex items-center container mx-auto justify-between">
                                <Link to="/"><img src={images.broflix} alt="" /></Link>
                                <ul className="flex gap-[40px]">
                                        <li>
                                                <Link className="font-bold" to="">New In</Link>
                                        </li>
                                        <li>
                                                <Link className="font-bold" to="">Male</Link>
                                        </li>
                                        <li>
                                                <Link className="font-bold" to="">Female</Link>
                                        </li>
                                        <li>
                                                <Link className="font-bold" to="">Sale</Link>
                                        </li>
                                        <li>
                                                <Link className="font-bold" to="">Blog</Link>
                                        </li>
                                </ul>
                                <Search />
                                <div className="flex gap-[15px] items-center">
                                        <div className="h-[38px] w-[38px] rounded-[8px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]">
                                                <button className="h-full w-full rounded-[8px] bg-[white] text-black font-bold">VI</button>
                                        </div>
                                        {!userAuth
                                                ? <Link Link to="/login" className="rounded flex items-center justify-center px-5 font-bold border h-[38px]">Log In</Link>
                                                : ''
                                        }

                                        <Menu items={userAuth ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                                                {userAuth ? (
                                                        <Image
                                                                className="w-[32px] h-[32px] rounded-full cursor-pointer"
                                                                src={images.entidy}
                                                                alt="Nguyen The Duong"
                                                        />
                                                ) : (
                                                        <button>
                                                                <IoMdMore fontSize={38} />
                                                        </button>
                                                )}
                                        </Menu>

                                        {/* {currentAccount
                                                ? <button onClick={() => { setCurrentAccount('') }} > <FaUserCircle className="w-[28px] h-[28px]" /></button>
                                                : <button className="rounded px-5 font-bold border h-[38px]">Log In</button>
                                        } */}
                                </div>
                        </div>
                </div>
        )
}
export default Header;