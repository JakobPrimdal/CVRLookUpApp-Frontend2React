
export default function TopBox({ company }) {
    return (
        <div className="top-box">
            <h2>{company.name}</h2>
            <span className="status">Status: {company.status}</span>
            <p>Address: {company.address}, {company.zipcode}, {company.city}</p>
        </div>
    );
}