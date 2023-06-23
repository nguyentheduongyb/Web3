import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Search from "~/Components/Page/Search";
import images from "~/assets/images";
const OnlyNavbar = ({ children, title }) => {
        return (
                <div className="bg-white h-full">
                        <div className="w-full bg-cyan-500  text-white fixed top-0 z-[40] shadow-lg shadow-cyan-500/50">
                                <div className="container h-full">
                                        <Navbar />
                                </div>
                        </div>
                        <div className="pt-[37px] h-full">
                                <div className="h-[68px] w-full bg-white">
                                        <div className="h-full flex items-center container mx-auto justify-between">
                                                <div className="flex items-center gap-4">
                                                        <Link to="/"><img className="h-[68px]" src={images.logo} alt="" /></Link>
                                                        <span className="h-[30px] w-[1.6px] bg-black"></span>
                                                        <h4 className="text-xl">{title}</h4>
                                                </div>
                                                <Search />
                                        </div>
                                </div>
                                {children}
                        </div>
                </div>
        );
}
export default OnlyNavbar