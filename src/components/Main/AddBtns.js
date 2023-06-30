import React from "react";

const AddBtns = ({cartFunc}) => {
    return(
        <div className="cart-btns">
            <button onClick = {() => { 
                cartFunc('delete')
            }} >delete all</button>
            <button  onClick={() => {
                cartFunc('restore')
            }}>restore all</button>
        </div>
    )
}

export default AddBtns;