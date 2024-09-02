import { useState } from "react"

export const Form = ({ children, onSubmit }) => {
    return(
      <form onSubmit={onSubmit}>
        { children }
      </form>
    )
  }