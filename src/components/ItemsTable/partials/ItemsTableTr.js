import React from 'react';
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

const ItemsTableTr = (props) => {
    return(
        <tr>
            <th scope='row'>{props.data.id}</th>
            <td>{props.data.widthInput}</td>
            <td>{props.data.lengthInput}</td>
            <td>{props.data.countInput}</td>
            <td className='td-icon'>
                <button>
                    <FaPencilAlt />
                </button>
            </td>
            <td className='td-icon'>
                <button>
                    <FaTrashAlt />
                </button>
            </td>
        </tr>
    );
}

export default ItemsTableTr;