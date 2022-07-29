import React from 'react'
import { useGlobalContext } from '../context/provider';

export const Overlay = () => {
    const { overlayActive, inputFormClose } = useGlobalContext();
    return (
    <div
        className={`${overlayActive ? "overlay overlay-active" : "overlay"}`}
        onClick={inputFormClose}
    ></div>
    );
}

export default Overlay