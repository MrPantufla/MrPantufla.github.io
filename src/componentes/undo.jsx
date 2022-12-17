import React from "react";
import "../stylesheets/undo.css"

const Undo = (props) => (
    <div className="botonUndo" onClick={props.undo}>
        {props.children}
    </div>
);

export default Undo;