import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';
import { Loading, Icon, Button } from '@deriv/components';
import { localize } from 'Components/i18next';
import { TableError } from 'Components/table/table-error.jsx';
import { InfiniteLoaderList } from 'Components/table/infinite-loader-list.jsx';
import { requestWS, getModifiedP2POrderList } from 'Utils/websocket';
import Dp2pContext from 'Components/context/dp2p-context';
import OrderTableHeader from './order-table-header.jsx';
import OrderRowComponent from './order-table-row.jsx';
import OrderInfo from '../order-info';

const OrderRowLoader = () => (
    <ContentLoader
        height={64}
        width={900}
        speed={2}
        primaryColor={'var(--general-hover)'}
        secondaryColor={'var(--general-active)'}
    >
        <rect x='1' y='20' rx='5' ry='5' width='90' height='10' />
        <rect x='180' y='20' rx='5' ry='5' width='90' height='10' />
        <rect x='360' y='20' rx='5' ry='5' width='90' height='10' />
        <rect x='536' y='20' rx='5' ry='5' width='90' height='10' />
        <rect x='720' y='20' rx='5' ry='5' width='90' height='10' />
    </ContentLoader>
);

const OrderEmptyStates = () => {
    const { changeTab } = useContext(Dp2pContext);

    return (
        <div className='orders__empty'>
            <Icon icon='IcNoOrder' size={128} />
            <div className='orders__empty-text'>{localize('You have no orders')}</div>
            <Button primary text={localize('Buy/Sell')} type='button' onClick={() => changeTab(0)} />
        </div>
    );
};

const OrderTableContent = ({ showDetails, is_active }) => {
    const { list_item_limit, order_offset, orders, setOrders, setOrderOffset } = useContext(Dp2pContext);
    const [is_mounted, setIsMounted] = useState(false);
    const [has_more_items_to_load, setHasMoreItemsToLoad] = useState(false);
    const [api_error_message, setApiErrorMessage] = useState('');
    const [is_loading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    useEffect(() => {
        if (is_mounted) {
            setIsLoading(true);
            loadMoreOrders(order_offset);
        }
    }, [is_mounted, is_active]);

    const loadMoreOrders = start_idx => {
        return new Promise(resolve => {
            requestWS({
                p2p_order_list: 1,
                offset: start_idx,
                limit: list_item_limit,
            }).then(response => {
                if (is_mounted) {
                    if (!response.error) {
                        const { list } = response.p2p_order_list;
                        setHasMoreItemsToLoad(list.length >= list_item_limit);
                        setIsLoading(false);
                        setOrders(orders.concat(getModifiedP2POrderList(list)));
                        setOrderOffset(order_offset + list.length);
                    } else {
                        setApiErrorMessage(response.api_error_message);
                    }
                    resolve();
                }
            });
        });
    };

    if (is_loading) {
        return <Loading is_fullscreen={false} />;
    }
    if (api_error_message) {
        return <TableError message={api_error_message} />;
    }

    const Row = row_props => <OrderRowComponent {...row_props} onOpenDetails={showDetails} is_active={is_active} />;

    if (orders.length) {
        const modified_list = orders
            .map(list => new OrderInfo(list))
            .filter(order => (is_active ? order.is_active : order.is_inactive));
        const item_height = 72;
        const height_values = {
            screen_size: '100vh',
            header_size: '48px',
            page_overlay_header: '53px',
            page_overlay_content_padding: '2.4rem',
            tabs_height: '36px',
            table_header_height: '50px',
            table_header_top_padding: '2.4rem',
            footer_size: '37px',
        };

        if (modified_list.length) {
            return (
                <OrderTableHeader is_active={is_active}>
                    <InfiniteLoaderList
                        autosizer_height={`calc(${Object.values(height_values).join(' - ')})`}
                        items={modified_list}
                        item_size={item_height}
                        RenderComponent={Row}
                        RowLoader={OrderRowLoader}
                        has_more_items_to_load={has_more_items_to_load}
                        loadMore={loadMoreOrders}
                    />
                </OrderTableHeader>
            );
        }

        return <OrderEmptyStates />;
    }

    return <OrderEmptyStates />;
};

OrderTableContent.propTypes = {
    showDetails: PropTypes.func,
};

export default OrderTableContent;
