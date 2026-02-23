
export default function TopBox({ company }) {
    return (
        <div className="top-box">
            <h2>{company.name}</h2>
            <span className="status">{company.status}</span>
            <p>{company.address}</p>
        </div>
    );
}