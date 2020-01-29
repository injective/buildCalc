import React from 'react';

const ItemsTableHeader = (props) => {
    return (
        <thead>
            <tr className='itemTr'>
                <th scope='col'>{props.headerLabels.ordinalNumberLabel}</th>
                <th scope='col'>{props.headerLabels.widthLabel}</th>
                <th scope='col'>{props.headerLabels.lengthLabel}</th>
                <th scope='col'>{props.headerLabels.countLabel}</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
    );
}

export default ItemsTableHeader;