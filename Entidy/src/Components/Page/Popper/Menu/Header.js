import PropTypes from 'prop-types';
import { FaChevronLeft } from "react-icons/fa"


function Header({ title, onBack }) {
    return (
        <header className="">
            <button className="" onClick={onBack}>
                <FaChevronLeft />
            </button>
            <h4 className="">{title}</h4>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
