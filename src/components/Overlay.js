import React from 'react'
import { useGlobalContext } from '../context/provider';

export const Overlay = () => {
    const { overlayActive } = useGlobalContext()
    return (
    <div className={`${overlayActive ? "overlay overlay-active" : "overlay"}`}></div>
    )
}

export default Overlay