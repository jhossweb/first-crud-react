import { useState } from "react"

export const Input = ({ type, id }) => {
    

    return (
      <input type={type} id={id} onChange={ handleOnChange } />
    )
}