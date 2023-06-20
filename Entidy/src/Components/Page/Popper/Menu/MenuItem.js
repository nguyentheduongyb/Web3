import PropTypes from 'prop-types';
import Button from '~/Components/Page/Button';
function MenuItem({ data, onClick }) {
    const classes = `w-full justify-start font-bold-[600] ${data.separate ? 'border-t' : ''}`
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
