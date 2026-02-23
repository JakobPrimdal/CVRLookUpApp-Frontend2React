
export default function DataBox({ title, children }) {
    return (
        <div className="data-box">
            <h3>{title}</h3>
            {children}
        </div>
    );
}