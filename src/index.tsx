import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from "react-toasts";


ReactDOM.render(
    <React.StrictMode>
        <App/>
        <ToastsContainer store={ToastsStore}
                         position={ToastsContainerPosition.TOP_CENTER}/>
    </React.StrictMode>,
    document.getElementById("root")
);
