import Header from "~/Layout/Components/Header";
import Footer from "~/Layout/Components/Footer";

function DefaultLayout({ children }) {
    return (
        <div className="bg-white h-full">
            <Header></Header>
            <div style={{ paddingTop: "92px" }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
