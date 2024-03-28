import React from "react";
import { useParams } from "react-router-dom";

function ExpertDetails() {
    const { expertId } = useParams();
    return (
        <div>
            <h2>Experts number ..{expertId}</h2>
        </div>
    );
}

export default ExpertDetails;
