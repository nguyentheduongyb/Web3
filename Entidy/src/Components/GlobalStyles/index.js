
import PropTypes from 'prop-types';

import "~/Components/GlobalStyles/GlobalStyles.css";
function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyles;
