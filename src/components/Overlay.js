import React from 'react'
import { useGlobalContext } from '../context/provider';

export const Overlay = () => {
    const { activeInputs } = useGlobalContext()
    const { todoInput } = activeInputs;
  return (
    <div className={`${todoInput ? "overlay overlay-active" : "overlay"}`}></div>
  )
}

export default Overlay