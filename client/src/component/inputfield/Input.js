import React from 'react'

export default function Input(props) {
    return (
        <>
            <label className='input-component__subtitle'>{props.inputsubtitle}</label>
            <br/>
            <input
                // name={props.name}
                // value={props.value}
                // onChange={props.onchange}
                // required
                // type={props.type}
                className="input-component__inputtype"
            />
        </>
    )
}
