import OnlyNavbar from "~/Layout/OnlyNavbar";
import Home from "~/Pages/Home";
import Account from "~/Pages/Account";
import SignIn from "~/Components/Page/Auth/SignIn";
import SignUp from "~/Components/Page/Auth/SignUp";
import Cart from "~/Pages/Cart";
import Payment from "~/Pages/Payment";
import PaymentCrypto from "~/Pages/PaymentCrypto";

//Public Routes
const publicRoutes = [
    { path: "/account/:extension", component: Account, isRequireAuth: true },
    { path: "/signin", component: SignIn, layout: null },
    { path: "/signup", component: SignUp, layout: null },
    { path: "/cart", component: Cart, layout: OnlyNavbar },
    { path: "/payment/crypto", component: PaymentCrypto, layout: OnlyNavbar },
    { path: "/payment/", component: Payment, layout: OnlyNavbar },
    { path: "/", component: Home },

];
//Public Routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
