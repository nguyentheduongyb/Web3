import Home from "~/Pages/Home";
import Account from "~/Pages/Account";
import Login from "~/Components/Page/Auth/LogIn";
import Register from "~/Components/Page/Auth/Register";
import LogOut from "~/Components/Page/Auth/LogOut";

//Public Routes
const publicRoutes = [
    { path: "/account/:extension", component: Account, isRequireAuth: true },
    { path: "/login", component: Login, layout: null },
    { path: "/register", component: Register, layout: null },
    { path: "/logout", component: LogOut, layout: null },
    { path: "/", component: Home },

];
//Public Routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
