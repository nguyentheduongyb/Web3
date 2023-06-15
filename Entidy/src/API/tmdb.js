import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "0e7933ccb96aa8a6aa3112ae73201b82",
    },
});
