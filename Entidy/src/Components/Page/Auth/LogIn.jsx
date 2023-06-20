import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { LoginContext } from '~/Context/LoginContext';


import { ToggleSwitch, Button, Checkbox, Label, TextInput } from 'flowbite-react';


const Input = ({ placeholder, name, type, value, handleChange }) => (
        <input
                placeholder={placeholder}
                type={type}
                step="0.0001"
                value={value}
                onChange={(e) => handleChange(e, name)}
                className="text-[#67748E] focus:outline-[#E293D3] rounded-[6px] h-[42px] w-full border mb-4 p-3"
        />
);
const Login = () => {
        const { currentAccount, handleChange, formData, handleLogin } = useContext(LoginContext);
        const [check, setCheck] = useState(false)

        const handleSubmit = async (e) => {
                e.preventDefault();
                const { email, password } = formData
                if (!email || !password) return
                handleLogin()
        }
        return (
                <div className="text-black h-screen grid grid-cols-2">
                        <div className="flex items-center justify-center">
                                <form className="w-[48%]">
                                        <div className='mb-10'>
                                                <h1 className="font-bold text-2xl">Đăng nhập</h1>
                                                <p className="text-[#67748E]">Nhập email và mật khẩu của bạn để đăng nhập</p>
                                        </div>
                                        <div className="mb-5">
                                                <TextInput
                                                        name="email"
                                                        onChange={(e) => { handleChange(e, "email") }}
                                                        placeholder="Email"
                                                        required
                                                        type="email"
                                                />
                                        </div>
                                        <div className="mb-5">
                                                <TextInput
                                                        name="password"
                                                        onChange={(e) => { handleChange(e, "password") }}
                                                        placeholder="Password"
                                                        required
                                                        type="password"
                                                />
                                        </div>
                                        <ToggleSwitch
                                                checked={check}
                                                className="mb-3 text-black"
                                                onChange={() => { setCheck(!check) }}
                                        />
                                        <Button type="submit" onClick={handleSubmit} className="h-[48px] rounded-[6px]  bg-gray-500 w-full text-white">
                                                Đăng nhập
                                        </Button>
                                        <div className="mt-5 text-[#67748e] text-sm text-center"><p>Bạn chưa có tài khoản? <Link to="/register" className="cursor-pointer text-[#CB0C9F]">Đăng ký</Link></p></div>
                                </form>
                        </div>
                        <div className="flex items-center justify-center relative">
                                <div className="w-[715px] bg-gradient-to-l from-[#7928ca] to-[#ff0080] h-[90vh] rounded-[12px] flex items-center justify-center" >
                                        <div className='bg-no-repeat bg-cover bg-center w-full h-full absolute opacity-40' style={{ backgroundImage: 'url("https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/shapes/pattern-lines.svg")' }}></div>
                                        <div className="w-full flex justify-center items-center flex-col text-center">
                                                <img className="max-w-[500px] w-full relative" src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/illustrations/chat.png" alt="chat-img" />
                                                <h4 className="mt-5 text-white font-weight-bolder">"Attention is the new currency"</h4>
                                                <p className="text-white">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                                        </div>
                                </div>
                        </div>
                </div>
        )

}
export default Login