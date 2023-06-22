import { TextInput } from 'flowbite-react';

import { AiOutlineSearch } from '@react-icons/all-files/ai/AiOutlineSearch'
import { useState } from 'react';
const Search = () => {
        const [searchInput, setSearchInput] = useState('')

        const handleSearch = (e) => {
                setSearchInput(e.target.value)
        }
        return (
                <div className="max-w-[440px] flex items-center justify-between w-full h-[38px] border-solid border-[1px] rounded-[92px] pl-1">
                        <input type="text" className="border-transparent w-[90%] bg-[transparent] caret-[#fe2c55] text-xs h-full focus:outline-none focus:border-[transparent] focus-input-none flex items-center placeholder-gray-600" placeholder='Tìm kiếm sản phẩm' />
                        <span className="w-[1px] h-[60%] border-[1px]"></span>
                        <AiOutlineSearch fontSize={21} className="w-[38px] cursor-pointer text-2xl" />
                </div>
        )

}
export default Search;