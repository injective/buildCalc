import React from "react";

const NewItemAddButton = (props) => {
    return (
        <div className="form-group">
            <button type="button"
                    className="btn btn-dark"
                    onClick={props.onClickAddItem}>Add</button>
        </div>
    );
}

export default NewItemAddButton;