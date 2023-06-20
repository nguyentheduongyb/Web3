import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit'
const LogOut = () => {
        const navigate = useNavigate()
        const signOut = useSignOut()
        useEffect(() => {
                const clearTimeout = setTimeout(() => {
                        signOut()
                        navigate('/')
                        window.location.reload();
                }, 1500)
                return () => {
                        clearTimeout(clearTimeout);
                };



        }, [])



}
export default LogOut