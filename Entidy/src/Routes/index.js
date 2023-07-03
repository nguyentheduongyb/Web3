import OnlyNavbar from "~/Layout/OnlyNavbar";
import Home from "~/Pages/Home";
import Account from "~/Pages/Account";
import SignIn from "~/Components/Page/Auth/SignIn";
import SignUp from "~/Components/Page/Auth/SignUp";
import Cart from "~/Pages/Cart";
import Payment from "~/Pages/Payment";
import PaymentCrypto from "~/Pages/PaymentCrypto";
import Order from "~/Pages/Order";

//Public Routes
const publicRoutes = [
    { path: "/account/:extension", component: Account, isRequireAuth: true },
    { path: "/signin", component: SignIn, layout: null },
    { path: "/signup", component: SignUp, layout: null },
    { path: "/cart", component: Cart, layout: OnlyNavbar, title: 'Giỏ hàng' },
    { path: "/payment/crypto/:id", component: PaymentCrypto, layout: OnlyNavbar, title: 'Thanh toán với Crypto Currency' },
    { path: "/payment", component: Payment, layout: OnlyNavbar, title: 'Thanh toán' },
    { path: "/order/:id", component: Order, layout: OnlyNavbar, title: 'Theo dõi đơn hàng' },
    { path: "/", component: Home },

];
//Public Routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
