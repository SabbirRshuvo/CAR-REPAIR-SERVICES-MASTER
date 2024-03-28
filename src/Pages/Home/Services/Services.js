import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

function Services() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div id="services">
            <h2 className="text-3xl m-2 text-blue-300">
                Our Services ..{services.length}
            </h2>
            <div className="grid grid-cols-3 gap-4 container mx-auto">
                {services.map((service) => (
                    <Service key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}

export default Services;
