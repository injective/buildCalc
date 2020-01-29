import React, {Component} from 'react';
import ItemsTableHeader from './partials/ItemsTableHeader';
import ItemsTableTr from './partials/ItemsTableTr';
import ItemsTableSum from './partials/ItemsTableSum';
import './ItemsTable.css';

class ItemsTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {
        const itemsTableTr = this.props.itemsArrayProp.map((item) => {
            return(
                <ItemsTableTr 
                    key={item.id}
                    data={item}  s
                />
            );
        });
        
        return (
            <table className='table table-striped'>
                <ItemsTableHeader 
                    headerLabels={this.props.headerLabels} />
    
                <tbody>
                    {itemsTableTr}

                    <ItemsTableSum 
                        sumCountItems={this.props.sumCountItemsProps} 
                        sumLengthItems={this.props.sumLengthItemsProps} />
                </tbody>
            </table>
        );
    }
}

export default ItemsTable;