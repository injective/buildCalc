import React from 'react';

const ItemsTableTr = (props) => {
    return(
        <tr>
            <th scope='row'>{props.id}</th>
            <td>{props.data.widthInput}</td>
            <td>{props.data.lengthInput}</td>
            <td>{props.data.countInput}</td>
        </tr>
    );
}

export default ItemsTableTr;