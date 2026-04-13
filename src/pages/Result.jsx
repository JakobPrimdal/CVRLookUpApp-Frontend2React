import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCvr } from "../services/CvrService";
import TopBox from "../components/TopBox";
import DataBox from "../components/DataBox";

function Field({ label, value }) {
    if (!value || value == "") return null;
    return <p>{label}: {value}</p>;
}

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
                <Field label="Tlf" value={company.phone} />
                <Field label="Email" value={company.email} />
                <Field label="Fax" value={company.fax} />
            </DataBox>
 
            <DataBox title="Virksomhedsinformation">
                <p>Reklamebeskyttelse: {company.protected === true ? "Ja" : "Nej"}</p>
                <Field label="Virksomhedstype" value={company.companytype} />
                <Field label="Virksomhedsbeskrivelse" value={company.companydesc} />
                <Field label="Industritype" value={company.industrytype} />
                <Field label="Industri beskrivelse" value={company.industrydesc} />
                <Field label="Startdato" value={company.startdate} />
                <Field label="Slutdato" value={company.enddate} />
            </DataBox>
 
            <DataBox title="Ejerskab/Ansatte">
                <Field label="Ejer" value={company.owners} />
                <Field label="Ansatte" value={company.employees} />
            </DataBox>
        </div>
    );
}