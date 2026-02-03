import { fetchCvr } from "../services/CvrService.js";
import { mapCvrFromApi } from "../models/Cvr.js";
import { useState } from "react";


function CvrSearch() {

    const [input, setInput] = useState("");
    const [cvr, setCvr] = useState(null);
    const [error, setError] = useState("");

    async function handleSearch() {
        if (!input) return;

        try {
            const dto = await fetchCvr(input);
            const cvrObj = mapCvrFromApi(dto);

            setCvr(cvrObj);
        }catch(err) {
            setError(err.message);
            setCvr(null);
        }
    }

    return (<div className="cvr-search">

        <h1>Welcome to CvrLookUp</h1>
        <h3>Get data from any Danish Company</h3>

        <input 
            type="text" 
            placeholder="Enter CVR number here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>

        {cvr && (
            <div className="result">
                <h2>{cvr.name}</h2>
                <p>CVR: {cvr.vat}</p>
                <p>Status: {cvr.status}</p>
                <p>Address: {cvr.address}, {cvr.city}, {cvr.zipcode}</p>
            </div>
        
    
        )}

    </div>
    );
}

export default CvrSearch;