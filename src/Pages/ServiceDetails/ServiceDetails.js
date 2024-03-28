import React from "react";
import { Link, useParams } from "react-router-dom";

function ServiceDetails() {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Experts number ..{serviceId}</h2>
            <div>
                <Link to="/checkout">
                    <button>Procedd Checkout</button>
                </Link>
            </div>
        </div>
    );
}

export default ServiceDetails;
