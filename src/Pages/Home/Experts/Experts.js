import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";
function Experts() {
    const experts = [
        { id: 1, name: "Will Smith", img: expert1 },
        { id: 2, name: "John China", img: expert2 },
        { id: 3, name: "Harry Hardson", img: expert3 },
        { id: 4, name: "Tom Cruse", img: expert4 },
        { id: 5, name: "Thunder", img: expert5 },
        { id: 6, name: "Johny Deph", img: expert6 },
    ];
    return (
        <div id="experts">
            <h2 className="text-3xl text-blue-500 m-2">Our Experts </h2>
            <div className="grid grid-cols-3 gap-4 container mx-auto">
                {experts.map((expert) => (
                    <Expert key={expert.id} expert={expert} />
                ))}
            </div>
        </div>
    );
}

export default Experts;
