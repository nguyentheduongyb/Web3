import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/Components/Page/Popper';
import WalletItem from './WalletItem';
const defaultFn = () => { };

function Wallet({ children, items = [], hideOnClick = false, onChange = defaultFn, show }) {

        const renderItems = () => {
                return items.map((item, index) => {
                        return (
                                <WalletItem
                                        key={index}
                                        data={item}

                                />
                        );
                });
        };
        const renderResult = (attrs) => (
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded shadow-lg" tabIndex="-1" {...attrs}>
                        <PopperWrapper className="py-2">
                                <div className="w-full flex flex-col">{renderItems()}</div>
                        </PopperWrapper>
                </div>
        );

        return (
                <Tippy
                        interactive
                        visible={show}
                        delay={[0, 150]}
                        offset={[12, 8]}
                        hideOnClick={hideOnClick}
                        placement="bottom-end"
                        render={renderResult}
                >
                        {children}
                </Tippy>
        );
}

Wallet.propTypes = {
        children: PropTypes.node.isRequired,
        items: PropTypes.array,
        hideOnClick: PropTypes.bool,
        onChange: PropTypes.func,
        show: PropTypes.bool,
};

export default Wallet;
