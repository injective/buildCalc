import React from 'react';

const ItemsTableSum = (props) => {
    return(
        <tr className='itemsTableSumTr'>
            <th scope='row'>Summary:</th>
            <td></td>
            <td><strong>{props.sumLengthItems}</strong></td>
            <td><strong>{props.sumCountItems}</strong></td>
            <td></td>
            <td></td>
        </tr>
    );
}

export default ItemsTableSum;