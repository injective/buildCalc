import React from 'react';

const ItemsTableSum = (props) => {
    return(
        <tr>
            <th scope='row'>Summary:</th>
            <td></td>
            <td>{props.sumLengthItems}</td>
            <td>{props.sumCountItems}</td>
        </tr>
    );
}

export default ItemsTableSum;