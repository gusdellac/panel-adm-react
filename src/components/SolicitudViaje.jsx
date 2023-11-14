import React from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import "../styles/SolicitudViaje.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPowerOff } from '@fortawesome/free-solid-svg-icons';


export const SolicitudViaje = (props) => {
    const [animationParent] = useAutoAnimate();
    return (
        <ul 
            ref={animationParent} 
            className="solicitud-viaje">
            <li className="solicitud-viaje_item" style={{color:props.color}}>
              {props.text} {props.estado}
            </li>
            <button type="button" className="btn btn-success botones">
                <FontAwesomeIcon icon={faCheck} />
            </button>
            <button type="button" className="btn btn-danger botones">
                <FontAwesomeIcon icon={faPowerOff} />
            </button>
        </ul>
    )
}