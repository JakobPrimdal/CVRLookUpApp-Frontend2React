import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CvrSearch() {
    const [cvr, setCvr] = useState("");
    const navigate = useNavigate();

    function handleSearch() {
        navigate(`/result/${cvr}`);
    }

    return (
        <>
        <div className="search-container">
            <input 
            value={cvr}
            onChange={(e) => setCvr(e.target.value)}
            placeholder="Enter CVR number..."
            />
        </div>
        <button onClick={handleSearch}>Search</button>
        </>
    );
}