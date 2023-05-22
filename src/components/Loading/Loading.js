import React from "react";
import './Loading.scss';

const Loading = () => {
    return (
        <div className="lds-roller" data-testid="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loading;