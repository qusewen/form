import React from 'react'
import './InputEnter.scss'
export default function InputEnter({type, text, name, onInput, style}) {
  return (
    <>
        <label><input style={style} onInput={onInput} name={name} type={type}></input> {text}</label>
    </>
  )
}
