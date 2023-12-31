import { useEffect, useState, useContext, useRef } from 'react';

import { Carousel } from 'flowbite-react';
import ProductItem from '~/Components/Page/Product/ProductItem';
import { Link } from 'react-router-dom';
import entidyAPI from '~/API'
const Home = () => {

    const [arrays, setArrays] = useState([])
    const [tab, setTab] = useState(1)

    const handleChangeTab = (e) => {
        setTab(e.currentTarget.getAttribute('id'))
    }
    useEffect(() => {
        entidyAPI.get('/api/product')
            .then((res) => {
                setArrays(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <div className="container pt-8 ">
            <div className='flex gap-2 h-[235px] mx-auto'>
                <div className="w-[796px] h-full">
                    <Carousel slideInterval={5000}>
                        <Link to="">
                            <div className="rounded w-full h-[235px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-b2a2951fd90f7ed294ea89de8b0498cf_xxhdpi")' }}></div>
                        </Link>
                        <Link to="">
                            <div className="rounded w-full h-[235px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-9452ec3552d60109b1f14c5aa1ae2b98_xxhdpi")' }}></div>
                        </Link>

                    </Carousel>
                </div>
                <div className='flex flex-1 flex-col gap-2 h-full'>
                    <div className="w-full h-2/4 rounded bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-c0f9828b11d3793d080f105f449986e5_xhdpi")' }}></div>
                    <div className="w-full h-2/4 rounded bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-c0f9828b11d3793d080f105f449986e5_xhdpi")' }}></div>

                </div>
            </div>
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
                {arrays && arrays.map((item, index) => {
                    return (
                        <ProductItem item={item} key={index} />
                    )
                })}
            </div>
        </div>
    );
}
export default Home;
