import React from "react";
import { useNavigate } from "react-router-dom";

function Service({ service }) {
    const { img, id, name, description } = service;

    const navigate = useNavigate();
    const buttonHandle = (id) => {
        navigate(`/service/${id}`);
    };
    return (
        <div className="border-2 rounded-lg pb-2">
            <img src={img} alt=""></img>
            <h2>{name}</h2>
            <p>{description}</p>
            <button
                onClick={() => buttonHandle(id)}
                className="border-2 rounded-lg p-2 bg-slate-600 text-white"
            >
                {name}
            </button>
        </div>
    );
}

export default Service;
