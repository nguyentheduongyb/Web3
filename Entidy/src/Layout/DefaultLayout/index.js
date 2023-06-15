import Header from "~/Layout/Components/Header";
import Footer from "~/Layout/Components/Footer";

function DefaultLayout({ children }) {
    return (
        <div className="gradient-bg h-full dark">
            <Header></Header>
            <div style={{ paddingTop: "68px" }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
