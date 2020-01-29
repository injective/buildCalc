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

            response: '',
            post: '',
            responseToPost: '',
        }
    }

    componentDidMount() {
        this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    }
    
    callApi = async () => {
        const response = await fetch('http://localhost:3000/data');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };

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
            const funcIdCheck = () => {
                if(this.state.itemsArray.length) {
                    return this.state.itemsArray[this.state.itemsArray.length-1].id + 1
                } else {
                    return 1
                }
                
            }

            const newItem = {
                widthInput: parseInt(this.state.widthInput),
                lengthInput: parseInt(this.state.lengthInput),
                countInput: parseInt(this.state.countInput),
                id: funcIdCheck()
            }

            this.setState((state) => ({
                itemsArray: [...state.itemsArray, newItem],
                widthInput: 0,
                lengthInput: 0,
                countInput: 0
            }))
        }
    }

    //delete item from list
    onClickDeleteItem = (id) => {
        console.log(id);    
    };

    render() {
<<<<<<< HEAD
        const { response, itemsArray, widthInput, lengthInput, countInput, headerOfTableItems } = this.state;
=======
        const { itemsArray, widthInput, lengthInput, countInput, headerOfTableItems } = this.state;
>>>>>>> a81a0a2c26c433c77b80a412a7dfde6773556e78

        // sum of count items
        const sumCountItems = itemsArray.reduce((sum, obj) => {
            return sum + obj.countInput
        }, 0);

        // sum of length items
        const sumLengthItems = itemsArray.reduce((sum, obj) => {
<<<<<<< HEAD
            return (sum + obj.lengthInput * obj.countInput)
=======
            return (
                sum + (obj.lengthInput * obj.countInput)
            );
>>>>>>> a81a0a2c26c433c77b80a412a7dfde6773556e78
        }, 0);

        
        console.log(response);

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
                        sumLengthItemsProps={sumLengthItems} 
                        onDeleted={this.onClickDeleteItem}
                        />


                </div>
            </div>
        );
    }
}

export default App;