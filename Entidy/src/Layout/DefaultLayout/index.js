import Header from "~/Layout/Components/Header";
import Footer from "~/Layout/Components/Footer";

function DefaultLayout({ children }) {
    return (
        <div className="bg-[#F1F3F6] h-full">
            <Header></Header>
            <div className="pt-[105px]">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
