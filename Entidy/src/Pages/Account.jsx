import { useLocation, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Image from "~/Components/Page/Image/Image";
import images from "~/assets/images";
import { CiEdit } from "react-icons/ci"
import { BiUser, BiPlus } from "react-icons/bi"

import Content from "~/Components/Page/Account";
const Profile = () => {
        const { extension } = useParams()
        let indexTab
        if (extension == "wallet") {
                indexTab = "2"
        }
        else {
                indexTab = "1"
        }
        const [tab, setTab] = useState(indexTab)



        const handleTab = (e) => {
                console.log(typeof (e.currentTarget.getAttribute('id')));
                setTab(e.currentTarget.getAttribute('id'))
        }
        return (
                <div className="container py-5">
                        <div className="flex gap-5">
                                <div className="w-[180px] py-5">
                                        <div className="flex gap-3 overflow-hidden h-[80px] border-b">
                                                <Image
                                                        className="min-w-[48px] h-[48px] rounded-full"
                                                        src={images.entidy}
                                                        alt="Nguyen The Duong"
                                                />
                                                <div className="overflow-hidden">
                                                        <p className="overflow-hidden" title="nguyentheduongyb">nguyentheduongyb</p>
                                                        <button className="flex items-center gap-2">
                                                                <CiEdit />
                                                                <span>Sửa hồ sơ</span>
                                                        </button>
                                                </div>
                                        </div>
                                        <div className="mt-8">
                                                <div>
                                                        <div onClick={handleTab} id={1} className="flex gap-4 items-center mb-2 cursor-pointer hover:text-[var(--text-primary)]">
                                                                <Link to="/account/profile" className="flex items-center gap-4">

                                                                        <BiUser />
                                                                        <span>Tài khoản của tôi</span>
                                                                </Link>
                                                        </div>
                                                        <ul className="pl-10 text-[12px]">
                                                                <li onClick={handleTab} id={1} className={`mb-2 ${tab == 1 ? 'text-[var(--text-primary)]' : ''} font-bold cursor-pointer hover:text-[var(--text-primary)]`}><Link to="/account/profile">Hồ Sơ</Link></li>
                                                                <li onClick={handleTab} id={2} className={`mb-2 ${tab == 2 ? 'text-[var(--text-primary)]' : ''} font-bold cursor-pointer hover:text-[var(--text-primary)]`}><Link to="/account/wallet">Phương thức thanh toán</Link></li>
                                                                <li onClick={handleTab} id={3} className={`mb-2 ${tab == 3 ? 'text-[var(--text-primary)]' : ''} font-bold cursor-pointer hover:text-[var(--text-primary)]`}><Link to="/account/address">Địa chỉ</Link></li>
                                                                <li onClick={handleTab} id={4} className={`mb-2 ${tab == 4 ? 'text-[var(--text-primary)]' : ''} font-bold cursor-pointer hover:text-[var(--text-primary)]`}><Link to="/account/changepassword">Đổi mật khẩu</Link></li>
                                                        </ul>
                                                </div>
                                                <div onClick={handleTab} id={5} className={`${tab == 5 ? 'text-[var(--text-primary)]' : ''} flex gap-4 items-center mb-2 cursor-pointer hover:text-[var(--text-primary)]`}>
                                                        <Link className="flex items-center gap-4" to="/account/order">
                                                                <BiUser />
                                                                <span>Đơn mua</span>
                                                        </Link>

                                                </div>
                                                <div onClick={handleTab} id={6} className={`${tab == 6 ? 'text-[var(--text-primary)]' : ''} flex gap-4 items-center mb-2 cursor-pointer hover:text-[var(--text-primary)]`}>
                                                        <Link className="flex items-center gap-4" to="/account/notification">
                                                                <BiUser />
                                                                <span>Thông báo</span>
                                                        </Link>

                                                </div>
                                                <div onClick={handleTab} id={7} className={`${tab == 7 ? 'text-[var(--text-primary)]' : ''} flex gap-4 items-center mb-2 cursor-pointer hover:text-[var(--text-primary)]`}>
                                                        <Link className="flex items-center gap-4" to="/account/voucher">
                                                                <BiUser />
                                                                <span>Vourcher</span>
                                                        </Link>

                                                </div>
                                        </div>
                                </div>
                                <Content tab={tab} />
                        </div >
                </div >
        );
}
export default Profile;
