import React from 'react';


const NewItemInput = (props) => {
    return(
        <div className="form-group">
            <label htmlFor="widthInputID">Ширина</label>
            <input type="number"
                   className="form-control"
                   id="widthInputID"
                   value="1"
                    />
        </div>
    );
};

export default NewItemInput;