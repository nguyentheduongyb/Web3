import PropTypes from 'prop-types';
import Button from '~/Components/Page/Button';
function WalletItem({ data }) {
        const classes = `w-full justify-start font-bold-[600] ${data.separate ? 'border-t' : ''}`
        return (
                <Button className={classes} to={data.to} onClick={data.onClick}>
                        <div className="flex gap-5">
                                <img className="w-8 h-8" src={data.icon} />
                                {data.title}
                        </div>

                </Button>
        );
}

WalletItem.propTypes = {
        data: PropTypes.object.isRequired,
        onClick: PropTypes.func,
};

export default WalletItem;
