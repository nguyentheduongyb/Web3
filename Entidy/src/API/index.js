import axios from "axios";
const token = localStorage.getItem('token');
export default axios.create({
    baseURL: "http://localhost:8888",
    headers: {
        'authorization': token && `Bearer ${token}`,
    },
});
