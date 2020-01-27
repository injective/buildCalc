import React, {Component} from 'react';
import './App.css';

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
            countInput: ''
        }
    }

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

    onClickAddItem = () => {
        if(this.state.widthInput.length && this.state.lengthInput.length && this.state.countInput.length) {
            const newItem = {
                widthInput: this.state.widthInput,
                lengthInput: this.state.lengthInput,
                countInput: this.state.countInput
            }

            this.setState((state) => ({
                itemsArray: [...state.itemsArray, newItem],
                widthInput: '',
                lengthInput: '',
                countInput: ''
            }))
        }
    }

    render() {
        const { itemsArray, widthInput, lengthInput, countInput } = this.state;

        const newItems = itemsArray.map((item, id) => {
            return (
                <div key={id} className="list-group-item resultItem row">
                    <div className='col-1'>{item.widthInput}</div>
                    <div className='col-1'>x</div>
                    <div className='col-1'>{item.lengthInput}</div>
                    <div className='col-1'>-</div>
                    <div className='col-1'>{item.countInput}</div>
                </div>
            );
        });


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

                <hr />

                <div className='resultListWrapper row'>
                    <div className="list-group resultList col-12">
                        {newItems}
                    </div>

                    <div>
                        <div>
                            <span>Sum count: {Object.itemsArray.reduce((total, {countInput}) => total + countInput, 0)}</span>
                        </div>
                    </div>
                </div>

            
            </div>
        );
    }
}

export default App;