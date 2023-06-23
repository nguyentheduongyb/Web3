import { BsDiscord, BsGithub, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
const Footer = () => {
        return (
                <div className="container flex justify-between py-12 border-t border-t-[#A3B3BC] text-[#A3B3BC]">
                        <div className="flex gap-[20px]">
                                <a href="https://discord.gg/CWBV5Utg" target="_blank"><BsDiscord className="w-[20px] h-[20px]" /></a>
                                <a href="https://github.com/nguyentheduongyb/" target="_blank"><BsGithub className="w-[20px] h-[20px]" /></a>
                                <a href="https://www.facebook.com/ntd.7302/" target="_blank"><BsFacebook className="w-[20px] h-[20px]" /></a>
                                <a href="https://www.instagram.com/ntd.7302/"><BsInstagram className="w-[20px] h-[20px]" /></a>
                                <a href="https://twitter.com/ntduong2002"><BsTwitter className="w-[20px] h-[20px]" /></a>
                        </div>
                        <p>Copyright © 2022 Entidy | All Rights Reserved</p>
                </div>
        )
}
export default Footer;