import { useEffect, useState } from 'react';
import { array } from '~/API/data';
import { Modal } from '~/Components/Page/Modal';
import ProductItem from '~/Components/Page/Product/ProductItem';

const Home = () => {
    const [products, setProducts] = useState([])
    const [tab, setTab] = useState(1)
    const handleChangeTab = (e) => {
        setTab(e.currentTarget.getAttribute('id'))
    }
    useEffect(() => {
        setProducts(array)
    }, [])
    return (
        <div className="container">
            <div className="flex gap-[32px] py-4 border-b">
                <button id="1" onClick={handleChangeTab} className={`h-[32px] px-5 font-bold flex rounded-xl h-[28px] items-center my-5 btn-category white-glassmorphism ${tab == 1 ? "active" : ""}`}>Tất cả</button>
                <button id="2" onClick={handleChangeTab} className={`h-[32px] px-5 font-bold flex rounded-xl h-[28px] items-center my-5 btn-category white-glassmorphism ${tab == 2 ? "active" : ""}`}>Quần</button>
                <button id="3" onClick={handleChangeTab} className={`h-[32px] px-5 font-bold flex rounded-xl h-[28px] items-center my-5 btn-category white-glassmorphism ${tab == 3 ? "active" : ""}`}>Áo</button>
                <button id="4" onClick={handleChangeTab} className={`h-[32px] px-5 font-bold flex rounded-xl h-[28px] items-center my-5 btn-category white-glassmorphism ${tab == 4 ? "active" : ""}`}>Váy</button>
                <button id="5" onClick={handleChangeTab} className={`h-[32px] px-5 font-bold flex rounded-xl h-[28px] items-center my-5 btn-category white-glassmorphism ${tab == 5 ? "active" : ""}`}>Giày</button>
                <button id="6" onClick={handleChangeTab} className={`h-[32px] px-5 font-bold flex rounded-xl h-[28px] items-center my-5 btn-category white-glassmorphism ${tab == 6 ? "active" : ""}`}>Trang sức</button>
                <button id="7" onClick={handleChangeTab} className={`h-[32px] px-5 font-bold flex rounded-xl h-[28px] items-center my-5 btn-category white-glassmorphism ${tab == 7 ? "active" : ""}`}>Nước hoa</button>
            </div>
            <div className="grid grid-cols-6 gap-6 mt-14 mb-14">
                {products.map((item, index) => {
                    return (
                        <ProductItem item={item} key={index} />
                    )
                })}
            </div>
            <Modal></Modal>
        </div>
    );
}
export default Home;
