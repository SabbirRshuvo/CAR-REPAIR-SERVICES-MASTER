import React from "react";
import { Link, useParams } from "react-router-dom";

function ServiceDetails() {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className="text-3xl text-red-400 m-2">
                Experts number ..{serviceId}
            </h2>
            <div>
                <Link to="/checkout">
                    <button className="border-2 rounded-lg p-2">
                        Proceed Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ServiceDetails;
