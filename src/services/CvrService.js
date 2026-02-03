export async function fetchCvr(cvrNumber) {
    const response = await fetch(
        `http://localhost:8080/api/company/${cvrNumber}`
    );

    if (!response.ok) {
        throw new Error("CVR not found");
    }

    return await response.json();
}
