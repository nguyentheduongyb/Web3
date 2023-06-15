import PropTypes from 'prop-types';


function MenuItem({ data, onClick }) {

    return (
        <button>Hello</button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
