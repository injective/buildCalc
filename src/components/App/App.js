import React, {Component} from 'react';
import './App.css';
import ItemsTable from '../ItemsTable';
import NewItemInput from '../NewItemInput';

class App extends Component {
    constructor() {
        super();

        this.state = {
            itemsArray: [
                {
                    widthInput: 250,
                    lengthInput: 3000,
                    countInput: 4
                }
            ],
            widthInput: '',
            lengthInput: '',
            countInput: '',
            id: 0,
            headerOfTableItems: {
                ordinalNumberLabel: '#',
                widthLabel: 'Width',
                lengthLabel: 'Length',
                countLabel: 'Count'
            }
        }
    }

    // onChange input values of new item
    onChangeWidthInput = (e) => {
        this.setState({
            widthInput: e.target.value
        })
    }

    onChangeLengthInput = (e) => {
        this.setState({
            lengthInput: e.target.value
        })
    }

    onChangeCountInput = (e) => {
        this.setState({
            countInput: e.target.value
        })
    }

    // adding new item to array
    onClickAddItem = () => {
        if(this.state.widthInput.length && this.state.lengthInput.length && this.state.countInput.length) {
            const newItem = {
                widthInput: parseInt(this.state.widthInput),
                lengthInput: parseInt(this.state.lengthInput),
                countInput: parseInt(this.state.countInput)
            }

            this.setState((state) => ({
                itemsArray: [...state.itemsArray, newItem],
                widthInput: 0,
                lengthInput: 0,
                countInput: 0
            }))
        }
    }

    render() {
        const { itemsArray, widthInput, lengthInput, countInput, headerOfTableItems } = this.state;

        // sum of count items
        const sumCountItems = itemsArray.reduce((sum, obj) => {
            return sum + obj.countInput
        }, 0);

        // sum of length items
        const sumLengthItems = itemsArray.reduce((sum, obj) => {
            return (
                sum + (obj.lengthInput * obj.countInput)
            );
        }, 0);

        return(
            <div className="container">
                <div className="row form-group entiresInputsGroup">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="widthInputID">Ширина</label>
                            <input type="number" 
                                className="form-control" 
                                id="widthInputID"  
                                value={widthInput}
                                onChange={this.onChangeWidthInput} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="lengthInputID">Длина</label>
                            <input type="number" 
                                className="form-control" 
                                id="lengthInputID" 
                                value={lengthInput}
                                onChange={this.onChangeLengthInput} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="countInputID">Количество</label>
                            <input type="number" 
                                className="form-control" 
                                id="countInputID" 
                                value={countInput}
                                onChange={this.onChangeCountInput} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <button type="button" 
                                className="btn btn-dark" 
                                onClick={this.onClickAddItem}>Add</button>
                        </div>
                    </div>
                </div>

                <div className='resultListWrapper row'>
                    <ItemsTable 
                        headerLabels={headerOfTableItems} 
                        itemsArrayProp={itemsArray} 
                        sumCountItemsProps={sumCountItems}
                        sumLengthItemsProps={sumLengthItems} />


                </div>
            </div>
        );
    }
}

export default App;