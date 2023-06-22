import Ledger from "~/Components/Page/Account/Profile";
import Payment from "~/Components/Page/Account/Payment";
import Address from "~/Components/Page/Account/Address";
import Order from "~/Components/Page/Account/Order";
const Content = ({ tab }) => {
        switch (tab) {
                case "1":
                        return <Ledger />
                case "2":
                        return <Payment />
                case "3":
                        return <Address />
                case "4":
                        return <Address />
                case "5":
                        return <Order />
                default:
                        return <Ledger />
        }
}
export default Content