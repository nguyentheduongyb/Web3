import { Link } from "react-router-dom";
import { useContext } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { TransactionContext } from "~/Context/TransactionContext";
// import Menu from "~/Components/Page/Popper/Menu/Menu";
import { FaUserCircle } from "react-icons/fa"
import Search from "~/Components/Page/Search";
import images from "@assets/images";

const MENU_ITEMS = [
        {
                icon: '',
                title: 'English',
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
                icon: '',
                title: 'Feedback and help',
                to: '/feedback',
        },
        {
                icon: '',
                title: 'Keyboard shortcuts',
        },
];

const Header = () => {
        const { currentAccount, setCurrentAccount } = useContext(TransactionContext)

        // Handle logic
        const handleMenuChange = (menuItem) => {
                switch (menuItem.type) {
                        case 'language':
                                // Handle change language
                                break;
                        default:
                }
        };
        const userMenu = [
                {
                        icon: '',
                        title: 'View profile',
                        to: '/@ntd7302',
                },
                {
                        icon: '',
                        title: 'Get coins',
                        to: '/coin',
                },
                {
                        icon: '',
                        title: 'Settings',
                        to: '/settings',
                },
                ...MENU_ITEMS,
                {
                        icon: '',
                        title: 'Log out',
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

                                        {/* <Menu items={currentAccount ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                                                {currentAccount ? (
                                                        <img
                                                                className="w-[28px] h-[28px]"
                                                                src="https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/344582047_201520219339947_6790388683204594669_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Wy9o0-F9J78AX9fhMtd&_nc_ht=scontent.fhan4-2.fna&oh=00_AfAFeKz--gRo2j_zNsNgMpXE-F2eeDVPaMAdd0a6fGKuzA&oe=647C1BD5"
                                                                alt="Nguyen The Duong"
                                                        />
                                                ) : (
                                                        <button><FaUserCircle className="w-[28px] h-[28px]" /></button>
                                                )}
                                        </Menu> */}
                                        {currentAccount
                                                ? <button onClick={() => { setCurrentAccount('') }} > <FaUserCircle className="w-[28px] h-[28px]" /></button>
                                                : <button className="rounded px-5 font-bold border h-[38px]">Log In</button>
                                        }
                                </div>
                        </div>
                </div>
        )
}
export default Header;