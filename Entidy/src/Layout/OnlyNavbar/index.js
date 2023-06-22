import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const OnlyNavbar = ({ children }) => {
        return (
                <div className="bg-white h-full">
                        <div className="w-full bg-cyan-500  text-white fixed top-0 z-[40] shadow-lg shadow-cyan-500/50">
                                <div className="container h-full">
                                        <Navbar />

                                </div>
                        </div>
                        <div className="pt-[37px] h-full">
                                {children}
                        </div>
                </div>
        );
}
export default OnlyNavbar