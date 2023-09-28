import { useState, useEffect } from "react";

export default function Authentication() {
    const [key, setKey] = useState("");

    useEffect(() => {
        if (key === "12345678") {
            console.log("Correct");
            window.location.href = "/home";
        }
    });

    return (
        <div className="AuthenticationContainer">
            <input id="keyInput" type="password" placeholder="Enter your secret key" onChange={(text) => setKey(text.target.value)} />
        </div>
    );
}
