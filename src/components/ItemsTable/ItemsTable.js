import React, {Component} from 'react';
import ItemsTableHeader from './partials/ItemsTableHeader';
import ItemsTableTr from './partials/ItemsTableTr';
import ItemsTableSum from './partials/ItemsTableSum';

class ItemsTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {
        const itemsTableTr = this.props.itemsArrayProp.map((item, id) => {
            return(
                <ItemsTableTr 
                    data={item} 
                    id={id} 
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