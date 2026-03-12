import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCvr } from "../services/CvrService";
import TopBox from "../components/TopBox";
import DataBox from "../components/DataBox";

export default function Result() {
    const { cvr } = useParams();
    const [company, setCompany] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCvr(cvr).then(setCompany)
        .catch((err) => setError({ message: err.message, status: err.status }));
    }, [cvr]);

    if (error) return (
        <div className="error-box">
            <p><strong>Error {error.status}:</strong> {error.message}</p>
        </div>
    );

    if (!company) return <p>Loading...</p>;

    return (
        <div className="result-page">
            <TopBox company={company}/>

            <DataBox title="Kontakt">
                <p>Tlf: {company.phone}</p>
                <p>Email: {company.email}</p>
                <p>Fax: {company.fax}</p>
            </DataBox>

            <DataBox title="Virksomhedsinformation">
                <p>Reklamebeskyttelse: {company.protected === true ? "Ja" : "Nej"}</p>
                <p>Virksomhedstype: {company.companytype}</p>
                <p>Virksomhedsbeskrivelse: {company.companydesc}</p>
                <p>Industritype: {company.industrytype}</p>
                <p>Industri beskrivelse: {company.industrydesc}</p>
                <p>Startdato: {company.startdate}</p>
                <p>Slutdato: {company.enddate}</p>
            </DataBox>

            <DataBox title="Ejerskab/Ansatte">
                <p>Ejer: {company.owners}</p>
                <p>Ansatte: {company.employees}</p>
            </DataBox>
        </div>
    );
}