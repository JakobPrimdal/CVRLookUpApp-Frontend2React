export async function fetchCvr(cvrNumber) {
    const response = await fetch(
  `${import.meta.env.VITE_API_URL}/company/${cvrNumber}`
    );

    if (!response.ok) {
        throw new Error("CVR not found");
    }

    return await response.json();
}
