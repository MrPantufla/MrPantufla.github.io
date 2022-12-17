import React from "react";
import "../stylesheets/clear.css"

const Clear = (props) => (
    <div className="botonClear" onClick={props.clearear}>
        {props.children}
    </div>
);

export default Clear;