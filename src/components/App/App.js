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
                    countInput: 4,
                    id: 1
                },
                {
                    widthInput: 100,
                    lengthInput: 2000,
                    countInput: 2,
                    id: 2
                },
                {
                    widthInput: 200,
                    lengthInput: 2500,
                    countInput: 1,
                    id: 3
                },
                {
                    widthInput: 150,
                    lengthInput: 1500,
                    countInput: 2,
                    id: 4
                },
            ],
            widthInput: '',
            lengthInput: '',
            countInput: '',
            id: 0,
            headerOfTableItems: {
                ordinalNumberLabel: '#',
                widthLabel: 'Width, mm',
                lengthLabel: 'Length, mm',
                countLabel: 'Count'
            },
        }
    }

    // onChange input values of new item
    onChangeInputForNewItem = (e) => {
        const value = e.target.value;
        this.setState({
            [e.target.name]: value 
        })
    }

    idCounter = () => {
        let countId;
        if(this.state.itemsArray.length) {
            countId = this.state.itemsArray[this.state.itemsArray.length-1].id + 1;
        } else {
            countId = 0;
        }
        return countId++;
    }


    // adding new item to array
    onClickAddItem = () => {
        if(this.state.widthInput.length && this.state.lengthInput.length && this.state.countInput.length) {
            
            const newItem = {
                widthInput: parseInt(this.state.widthInput),
                lengthInput: parseInt(this.state.lengthInput),
                countInput: parseInt(this.state.countInput),
                id: this.idCounter()
            }

            this.setState((state) => ({
                itemsArray: [...state.itemsArray, newItem],
                widthInput: '',
                lengthInput: '',
                countInput: ''
            }))
        }
    }

    //delete item from list
    onClickDeleteItem = (item) => {
        this.setState(({itemsArray}) => {
            const idx = itemsArray.findIndex((el) => el.id === item.id);
            const beforeItemsArray = itemsArray.slice(0, idx);
            const afterItemsArray = itemsArray.slice(idx + 1);
            const newItemsArray = [...beforeItemsArray, ...afterItemsArray];

            return {
                itemsArray: newItemsArray
            }
        });
    };

    render() {
        const { itemsArray, widthInput, lengthInput, countInput, headerOfTableItems } = this.state;

        // sum of count items
        const sumCountItems = itemsArray.reduce((sum, obj) => {
            return sum + obj.countInput
        }, 0);

        // sum of length items
        const sumLengthItems = itemsArray.reduce((sum, obj) => {
            return (sum + obj.lengthInput * obj.countInput)
        }, 0);

        
        return(
            <div className="container">

                <div className="row form-group entiresInputsGroup">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="widthInputID">Ширина</label>
                            <input type="number" 
                                className="form-control" 
                                name="widthInput"  
                                value={widthInput}
                                onChange={this.onChangeInputForNewItem} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="lengthInputID">Длина</label>
                            <input type="number" 
                                className="form-control" 
                                name="lengthInput" 
                                value={lengthInput}
                                onChange={this.onChangeInputForNewItem} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="countInputID">Количество</label>
                            <input type="number" 
                                className="form-control" 
                                name="countInput" 
                                value={countInput}
                                onChange={this.onChangeInputForNewItem} />
                        </div>
                    </div>
                    {/* <NewItemInput /> */}
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
                        sumLengthItemsProps={sumLengthItems} 
                        onDeleted={this.onClickDeleteItem.bind(this)} />
                </div>
            </div>
        );
    }
}

export default App;