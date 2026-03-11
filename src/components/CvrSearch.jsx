import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CvrSearch() {
    const [cvr, setCvr] = useState("");
    const navigate = useNavigate();

    function handleSearch() {
        navigate(`/result/${cvr}`);
    }

    function handleChange(e) {
        const value = e.target.value.replace(/\D/g, "").slice(0,8);
        setCvr(value);
    }

    function handleKeyDown(e) {
    if (e.key === "Enter" && cvr.length === 8) {
        handleSearch();
    }
}


    return (
        <>
        <div className="search-container">
            <input 
            type="tel"
            inputMode="numeric"
            maxLength={8}
            value={cvr}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter CVR number..."
            />
        </div>
        <button 
            onClick={handleSearch}
            disabled={cvr.length !== 8}
        >Search</button>
        </>
    );
}