
export async function fetchCvr(CvrNumber) {
    const response = await fetch('http://localhost:8080/api/cvr/${cvrNumber}');

    if (!response.ok) {
        throw new Error("CVR not found");
    }

    return await response.json();

}