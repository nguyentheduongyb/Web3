import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

import { signUpUser } from '~/Redux/Auth/authActions';
import PreLoader from "~/Components/Page/PreLoader"


const SignUp = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();
        const { loading, userToken } = useSelector(
                (state) => state.auth
        )
        const dispatch = useDispatch()

        const navigate = useNavigate()

        useEffect(() => {
                if (userToken) {
                        navigate('/')
                        window.location.reload();
                }
        }, [navigate, userToken])

        const onSubmit = (data) => {
                // check if passwords match
                if (data.password !== data.confirmPassword) {
                        alert('Password mismatch')
                        return
                }
                // transform email string to lowercase to avoid case sensitivity issues in login
                data.email = data.email.toLowerCase()
                dispatch(signUpUser(data))
        }
        return (
                <div className="text-black h-screen grid grid-cols-2">
                        <div className="flex items-center justify-center">

                                <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4 w-[48%]">
                                        <div className='mb-6'>
                                                <h1 className="font-bold text-2xl">Đăng ký</h1>
                                                <p className="text-[#67748E]">Nhập email và mật khẩu của bạn để đăng ký</p>
                                        </div>
                                        <div>
                                                <div className="mb-2 block">
                                                        <Label
                                                                htmlFor="username"
                                                                value="User Name"
                                                        />
                                                </div>
                                                <TextInput
                                                        id="username"
                                                        placeholder="User Name"
                                                        required
                                                        shadow
                                                        type="text"
                                                        {...register("username")}
                                                />
                                        </div>
                                        <div>
                                                <div className="mb-2 block">
                                                        <Label
                                                                htmlFor="email"
                                                                value="Your email"
                                                        />
                                                </div>
                                                <TextInput
                                                        id="email"
                                                        placeholder="Email"
                                                        required
                                                        shadow
                                                        type="email"
                                                        {...register("email")}

                                                />
                                        </div>
                                        <div>
                                                <div className="mb-2 block">
                                                        <Label
                                                                htmlFor="password"
                                                                value="Your password"
                                                        />
                                                </div>
                                                <TextInput
                                                        id="password"
                                                        required
                                                        shadow
                                                        type="password"
                                                        {...register("password")}

                                                />
                                        </div>
                                        <div>
                                                <div className="mb-2 block">
                                                        <Label
                                                                htmlFor="repeat-password"
                                                                value="Repeat password"
                                                        />
                                                </div>
                                                <TextInput
                                                        id="confirmPassword"
                                                        required
                                                        shadow
                                                        type="password"
                                                        {...register("confirmPassword")}
                                                />
                                        </div>
                                        <div className="flex items-center gap-2">
                                                <Checkbox id="agree" />
                                                <Label
                                                        className="flex"
                                                        htmlFor="agree"
                                                >
                                                        <p>
                                                                Đồng ý với điều khoản
                                                        </p>

                                                </Label>
                                        </div>
                                        <Button type="submit" >
                                                Đăng ký
                                        </Button>
                                        <div className="mt-5 text-[#67748e] text-sm text-center"><p>Bạn đã có tài khoản? <Link to="/signin" className="cursor-pointer text-[#CB0C9F]">Đăng nhập</Link></p></div>

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
                        {loading && <PreLoader />}

                </div>
        )

}
export default SignUp