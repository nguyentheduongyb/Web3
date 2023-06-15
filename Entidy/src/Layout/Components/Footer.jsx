import { BsDiscord, BsGithub, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
const Footer = () => {
        return (
                <div className="container flex justify-between py-12 border-t border-t-[#A3B3BC] text-[#A3B3BC]">
                        <div className="flex gap-[20px]">
                                <a href=""><BsDiscord className="w-[20px] h-[20px]" /></a>
                                <a href=""><BsGithub className="w-[20px] h-[20px]" /></a>
                                <a href=""><BsFacebook className="w-[20px] h-[20px]" /></a>
                                <a href=""><BsInstagram className="w-[20px] h-[20px]" /></a>
                                <a href=""><BsTwitter className="w-[20px] h-[20px]" /></a>
                        </div>
                        <p>Copyright © 2022 Entidy | All Rights Reserved</p>
                </div>
        )
}
export default Footer;