import { AiOutlineSearch } from '@react-icons/all-files/ai/AiOutlineSearch'
const Search = () => {
        return (
                <div className="flex items-center justify-between w-[360px] h-[38px] border-solid border-[1px] rounded-[92px] pl-3">
                        <input type="text" className="border-transparent w-[90%] bg-[transparent] caret-[#fe2c55] text-xs h-full focus:outline-none flex items-center" placeholder='Enter something ... ' />
                        <span className="w-[1px] h-[60%] border-[1px]"></span>
                        <AiOutlineSearch fontSize={21} className="w-[38px] cursor-pointer text-2xl" />
                </div>
        )

}
export default Search;