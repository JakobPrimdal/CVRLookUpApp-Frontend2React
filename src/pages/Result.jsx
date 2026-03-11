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
                <p>Tlf: {company.phone}</p>
                <p>Email: {company.email}</p>
                <p>Fax: {company.fax}</p>
            </DataBox>

            <DataBox title="Company info">
                <p>Ad protection: {company.protected === true ? "true" : "false"}</p>
                <p>Company type: {company.companytype}</p>
                <p>Company desc: {company.companydesc}</p>
                <p>Industry type: {company.industrytype}</p>
                <p>Industry desc: {company.industrydesc}</p>
                <p>Start date: {company.startdate}</p>
                <p>End date: {company.enddate}</p>
            </DataBox>

            <DataBox title="Ownership/Employees">
                <p>Owner: {company.owners}</p>
                <p>Employees: {company.employees}</p>
            </DataBox>
        </div>
    );
}