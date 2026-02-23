import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCvr } from "../services/CvrService";
import TopBox from "../components/TopBox";
import DataBox from "../components/DataBox";

export default function Result() {
    const { cvr } = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        fetchCvr(cvr).then(setCompany);
    }, [cvr]);

    if (!company) return <p>Loading...</p>;

    return (
        <div className="result-page">
            <TopBox company={company}/>

            <DataBox title="Contact">
                <p>{company.phone}</p>
                <p>{company.email}</p>
            </DataBox>

            <DataBox title="Company info">
                <p>{company.industrydesc}</p>
                <p>{company.companytype}</p>
            </DataBox>
        </div>
    );
}