import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit'

import API from '~/API';
import { TransactionContext } from '~/Context/TransactionContext';

import { ToggleSwitch, Button, TextInput } from 'flowbite-react';

const SignIn = () => {
        const { setIsLoading } = useContext(TransactionContext)
        const [isFailure, setIsFailure] = useState('')
        const signIn = useSignIn()
        const navigate = useNavigate();

        const [formData, setformData] = useState({ email: "", password: "", username: "" });
        const [check, setCheck] = useState(false)

        const handleChange = (e, name) => {
                setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
        };

        const handleSubmit = async (e) => {
                e.preventDefault();
                const { email, password } = formData
                if (!email || !password) return
                try {
                        const res = await API.post(`/users/signin`, {
                                email: formData.email,
                                password: formData.password,
                        });
                        setIsLoading(true)
                        signIn(
                                {
                                        token: res.data.token,
                                        expiresIn: 3600,
                                        tokenType: "Bearer",
                                        authState: res.data.user.username,
                                }
                        )
                        localStorage.setItem("token", res.data.token)
                        navigate("/")
                        const timeoutID = setTimeout(() => {
                                setIsLoading(false);
                        }, 1000);
                        return () => {
                                clearTimeout(timeoutID);
                        };
                } catch (error) {
                        setIsFailure("failure")
                        console.log("Error: ", error);
                }
        }
        return (
                <div className="text-black h-screen grid grid-cols-2">
                        <div className="flex items-center justify-center">
                                <form className="w-[48%]">
                                        <div className='mb-10'>
                                                <h1 className="font-bold text-2xl">Đăng nhập</h1>
                                                <p className="text-[#67748E]">Nhập email và mật khẩu của bạn để đăng nhập</p>
                                                {isFailure ? <p className="text-red-500 mt-4">Tài khoản hoặc mật khẩu không chính xác !!!</p> : ''}
                                        </div>
                                        <div className="mb-5">
                                                <TextInput
                                                        color={isFailure}
                                                        name="email"
                                                        onChange={(e) => { handleChange(e, "email") }}
                                                        placeholder="Email"
                                                        required
                                                        onClick={() => { setIsFailure("") }}
                                                        type="email"
                                                />
                                        </div>
                                        <div className="mb-5">
                                                <TextInput
                                                        color={isFailure}
                                                        name="password"
                                                        onChange={(e) => { handleChange(e, "password") }}
                                                        placeholder="Password"
                                                        required
                                                        onClick={() => { setIsFailure("") }}
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
                                        <div className="mt-5 text-[#67748e] text-sm text-center"><p>Bạn chưa có tài khoản? <Link to="/signup" className="cursor-pointer text-[#CB0C9F]">Đăng ký</Link></p></div>
                                </form>
                        </div>
                        <div className="flex items-center justify-center relative">
                                <div className="w-[715px] bg-gradient-to-l from-[#7928ca] to-[#ff0080] h-[90vh] rounded-[12px] flex items-center justify-center" >
                                        <div className='bg-no-repeat bg-cover bg-center w-full h-full absolute opacity-40' style={{ backgroundImage: 'url("https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/shapes/pattern-lines.svg")' }}></div>
                                        <div className="w-full flex justify-center items-center flex-col text-center px-3">
                                                <img className="max-w-[500px] w-full relative" src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/illustrations/chat.png" alt="chat-img" />
                                                <h4 className="mt-5 text-white font-weight-bolder">"Crypto Currency là dạng tiền mã hoá (tiền điện tử)"</h4>
                                                <p className="text-white">Nó được tạo ra bởi các dự án phát hành trên Blockchain. Bạn có thể sử dụng tiền mã hóa để mua bán các sản phẩm như tiền thật.</p>
                                        </div>
                                </div>
                        </div>
                </div>
        )

}
export default SignIn