import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div>
            <p>Copyright @ {year}</p>
        </div>
    );
}

export default Footer;
