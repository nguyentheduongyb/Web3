import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '~/API';
import { useSignIn } from 'react-auth-kit'
import { Toast } from 'flowbite-react';
export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
        const signIn = useSignIn()
        const navigate = useNavigate();
        const [formData, setformData] = useState({ email: "", password: "", username: "" });
        const handleChange = (e, name) => {
                setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
        };
        const handleLogin = async () => {
                try {
                        const res = await API.post(`/users/login`, {
                                email: formData.email,
                                password: formData.password,
                        });
                        signIn(
                                {
                                        token: res.data.token,
                                        expiresIn: 3600,
                                        tokenType: "Bearer",
                                        authState: res.data.user.email,
                                }
                        )
                        if (signIn(
                                {
                                        token: res.data.token,
                                        expiresIn: 3600,
                                        tokenType: "Bearer",
                                        authState: res.data.user.email,
                                }
                        )) {
                                navigate("/")
                        } else {
                                throw new Error("Error React Auth Kit")
                        }
                } catch (error) {
                        console.log("Error: ", error);
                }
        }
        const handleRegister = async () => {
                try {
                        const res = await API.post(`/users/register`, {
                                username: formData.username,
                                email: formData.email,
                                password: formData.password,
                        });
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('id', res.data.user._id)
                        if (res.data.token) {
                                navigate("/")
                                window.location.reload();
                        }
                        // Thực hiện xử lý dữ liệu submit trả về (nếu có)
                } catch (error) {
                        return (
                                false
                        )

                        // Xử lý lỗi (nếu có)
                }
        }
        return (
                <LoginContext.Provider value={{ formData, handleChange, handleLogin, handleRegister }}>
                        {children}
                </LoginContext.Provider>
        )
}

export default LoginProvider;