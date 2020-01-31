import React from 'react';


const NewItemInput = (props) => {
    return(
        <div className="form-group">
            <label htmlFor="widthInputID">{props.label}</label>
            <input type="number"
                   className="form-control"
                   name={props.name}
                   value={props.value}  />
        </div>
    );
};

export default NewItemInput;