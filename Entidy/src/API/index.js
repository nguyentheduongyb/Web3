import axios from "axios";
const token = localStorage.getItem('token');
// axios.defaults.headers.common['authorization'] = token;
export default axios.create({
    baseURL: "http://localhost:8888",
    headers: {
        'authorization': `Bearer ${token}`,
    }
});
