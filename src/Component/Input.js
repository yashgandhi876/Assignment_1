import React from 'react';


function Input(props){
    return (
        <input value={props.value} onChange={props.onChange} className={props.className} style={{margin:"5px 5px", padding:"5px 5px"}} type={props.type} placeholder={props.placeholder} />
    )
}


export default Input;
