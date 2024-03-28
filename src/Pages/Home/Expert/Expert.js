import React from "react";

function Expert({ expert }) {
    const { img, id, name } = expert;
    return (
        <div className="border-2 rounded-lg pb-2">
            <img src={img} alt=""></img>
            <h2>{name}</h2>
            <button className="border-2 rounded-lg p-2 bg-yellow-200 text-blue-500">
                Expert Here
            </button>
        </div>
    );
}

export default Expert;
